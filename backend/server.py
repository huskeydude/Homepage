from fastapi import FastAPI, APIRouter, HTTPException, Depends, File, UploadFile
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
import shutil


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create uploads directory
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

# Authentication setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()

JWT_SECRET = os.environ.get('JWT_SECRET_KEY', 'default-secret-key')
JWT_ALGORITHM = os.environ.get('JWT_ALGORITHM', 'HS256')
ADMIN_USERNAME = os.environ.get('ADMIN_USERNAME', 'admin')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'password123')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class LoginRequest(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    content: str
    date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    tags: List[str] = []

class BlogPostCreate(BaseModel):
    title: str
    content: str
    tags: str  # Comma-separated string

class BlogPostUpdate(BaseModel):
    title: str
    content: str
    tags: str  # Comma-separated string

# Authentication helper functions
def verify_password(plain_password: str, username: str) -> bool:
    """Verify password against environment variable"""
    return plain_password == ADMIN_PASSWORD and username == ADMIN_USERNAME

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """Create JWT access token"""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(hours=24)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return encoded_jwt

async def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Verify JWT token for protected routes"""
    try:
        token = credentials.credentials
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        username: str = payload.get("sub")
        if username is None or username != ADMIN_USERNAME:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        return username
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Blog Post Routes
@api_router.get("/blog/posts", response_model=List[BlogPost])
async def get_blog_posts():
    """Get all blog posts sorted by date (newest first)"""
    try:
        posts = await db.blog_posts.find({}, {"_id": 0}).sort("date", -1).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for post in posts:
            if isinstance(post['date'], str):
                post['date'] = datetime.fromisoformat(post['date'])
        
        return posts
    except Exception as e:
        logger.error(f"Error fetching blog posts: {e}")
        raise HTTPException(status_code=500, detail="Error fetching blog posts")

@api_router.post("/blog/posts", response_model=BlogPost)
async def create_blog_post(input: BlogPostCreate):
    """Create a new blog post"""
    try:
        # Parse tags from comma-separated string
        tags = [tag.strip() for tag in input.tags.split(',') if tag.strip()]
        
        # Create blog post object
        post_data = {
            "title": input.title,
            "content": input.content,
            "tags": tags
        }
        post = BlogPost(**post_data)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = post.model_dump()
        doc['date'] = doc['date'].isoformat()
        
        # Insert into database
        await db.blog_posts.insert_one(doc)
        
        logger.info(f"Created blog post: {post.id}")
        return post
    except Exception as e:
        logger.error(f"Error creating blog post: {e}")
        raise HTTPException(status_code=500, detail="Error creating blog post")

@api_router.put("/blog/posts/{post_id}", response_model=BlogPost)
async def update_blog_post(post_id: str, input: BlogPostUpdate):
    """Update an existing blog post"""
    try:
        # Check if post exists
        existing_post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
        if not existing_post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        # Parse tags from comma-separated string
        tags = [tag.strip() for tag in input.tags.split(',') if tag.strip()]
        
        # Update post data (preserve original date and id)
        updated_data = {
            "title": input.title,
            "content": input.content,
            "tags": tags
        }
        
        # Update in database
        await db.blog_posts.update_one(
            {"id": post_id},
            {"$set": updated_data}
        )
        
        # Fetch and return updated post
        updated_post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
        
        # Convert ISO string timestamp back to datetime object
        if isinstance(updated_post['date'], str):
            updated_post['date'] = datetime.fromisoformat(updated_post['date'])
        
        logger.info(f"Updated blog post: {post_id}")
        return BlogPost(**updated_post)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating blog post: {e}")
        raise HTTPException(status_code=500, detail="Error updating blog post")

@api_router.delete("/blog/posts/{post_id}")
async def delete_blog_post(post_id: str):
    """Delete a blog post"""
    try:
        # Check if post exists
        existing_post = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
        if not existing_post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        # Delete from database
        await db.blog_posts.delete_one({"id": post_id})
        
        logger.info(f"Deleted blog post: {post_id}")
        return {"message": "Blog post deleted successfully", "id": post_id}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting blog post: {e}")
        raise HTTPException(status_code=500, detail="Error deleting blog post")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()