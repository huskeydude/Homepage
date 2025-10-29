# API Contracts & Integration Plan

## Overview
This document outlines the backend implementation plan for Yeksuh San's homepage, focusing on the dynamic blog system.

## Current Frontend State (Mock Data)
- **Location**: `/app/frontend/src/mock/mockData.js`
- **Mock Posts**: 3 sample blog posts with title, content, date, and tags
- **Frontend Components**: Home, Resume (static), Blog (CRUD operations with mock data)

## Backend Requirements

### 1. MongoDB Models

**BlogPost Model** (`/app/backend/models/blog_post.py`)
```python
{
    "id": str (UUID),
    "title": str,
    "content": str,
    "date": datetime (ISO format),
    "tags": List[str]
}
```

### 2. API Endpoints

#### GET `/api/blog/posts`
- **Purpose**: Fetch all blog posts
- **Response**: `List[BlogPost]` (sorted by date, newest first)
- **Current Mock**: Returns all posts from mockBlogPosts array

#### POST `/api/blog/posts`
- **Purpose**: Create a new blog post
- **Request Body**: `{ title: str, content: str, tags: str (comma-separated) }`
- **Response**: Created BlogPost object
- **Current Mock**: Adds to local state with generated ID and current date

#### PUT `/api/blog/posts/{post_id}`
- **Purpose**: Update existing blog post
- **Request Body**: `{ title: str, content: str, tags: str }`
- **Response**: Updated BlogPost object
- **Current Mock**: Updates post in local state by matching ID

#### DELETE `/api/blog/posts/{post_id}`
- **Purpose**: Delete a blog post
- **Request Body**: None
- **Response**: Success message
- **Current Mock**: Filters out post from local state

### 3. Frontend Integration Changes

**Files to Update**:
- `/app/frontend/src/pages/Blog.jsx`
  - Replace mock data imports with API calls
  - Add axios for HTTP requests
  - Handle loading and error states
  - Use REACT_APP_BACKEND_URL from .env

**API Service Layer** (Optional but recommended):
- Create `/app/frontend/src/services/blogService.js`
- Centralize all blog API calls

### 4. Integration Steps

1. **Backend Setup**:
   - Create BlogPost model with Pydantic
   - Implement CRUD endpoints in server.py
   - Add proper error handling and validation
   - Test endpoints with curl or Postman

2. **Frontend Integration**:
   - Remove mock data imports
   - Add API calls using axios
   - Handle async operations with loading states
   - Add error handling with toast notifications
   - Ensure proper date formatting for API responses

3. **Testing**:
   - Test all CRUD operations
   - Verify data persistence in MongoDB
   - Check error handling for edge cases
   - Validate form inputs

## Notes
- Resume page remains static (PDF link only)
- No authentication required (open blog management)
- All blog operations are immediate (no confirmation dialogs for delete)
- Tags are stored as array but input as comma-separated string
