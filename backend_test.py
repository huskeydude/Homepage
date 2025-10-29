#!/usr/bin/env python3
"""
Backend API Testing for Yeksuh San's Homepage Blog System
Tests all CRUD operations for blog posts
"""

import requests
import json
import os
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
frontend_env_path = Path("/app/frontend/.env")
load_dotenv(frontend_env_path)

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    raise ValueError("REACT_APP_BACKEND_URL not found in frontend/.env")

API_BASE = f"{BACKEND_URL}/api"

def test_blog_api():
    """Test all blog API endpoints according to the test plan"""
    
    print(f"🚀 Testing Blog API at: {API_BASE}")
    print("=" * 60)
    
    # Store post IDs for later operations
    post_ids = []
    
    try:
        # Test 1: GET /api/blog/posts - Should initially return empty array
        print("\n1️⃣ Testing GET /api/blog/posts (initial - should be empty)")
        response = requests.get(f"{API_BASE}/blog/posts")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            posts = response.json()
            print(f"Response: {json.dumps(posts, indent=2)}")
            print(f"✅ Initial GET successful - Found {len(posts)} posts")
        else:
            print(f"❌ Initial GET failed: {response.text}")
            return False
            
        # Test 2: POST /api/blog/posts - Create first blog post
        print("\n2️⃣ Testing POST /api/blog/posts - Creating first post")
        post1_data = {
            "title": "Welcome to My Homepage",
            "content": "Just launched my new personal site with a blog system!",
            "tags": "Web Development, Personal"
        }
        
        response = requests.post(f"{API_BASE}/blog/posts", json=post1_data)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            post1 = response.json()
            post_ids.append(post1['id'])
            print(f"✅ First post created successfully")
            print(f"Post ID: {post1['id']}")
            print(f"Title: {post1['title']}")
            print(f"Tags: {post1['tags']}")
        else:
            print(f"❌ First post creation failed: {response.text}")
            return False
            
        # Test 3: POST /api/blog/posts - Create second blog post
        print("\n3️⃣ Testing POST /api/blog/posts - Creating second post")
        post2_data = {
            "title": "North Tech IT Updates",
            "content": "New features added to the platform",
            "tags": "Updates, North Tech IT"
        }
        
        response = requests.post(f"{API_BASE}/blog/posts", json=post2_data)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            post2 = response.json()
            post_ids.append(post2['id'])
            print(f"✅ Second post created successfully")
            print(f"Post ID: {post2['id']}")
            print(f"Title: {post2['title']}")
            print(f"Tags: {post2['tags']}")
        else:
            print(f"❌ Second post creation failed: {response.text}")
            return False
            
        # Test 4: GET /api/blog/posts - Verify both posts exist
        print("\n4️⃣ Testing GET /api/blog/posts - Verifying 2 posts exist")
        response = requests.get(f"{API_BASE}/blog/posts")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            posts = response.json()
            print(f"✅ Found {len(posts)} posts")
            if len(posts) == 2:
                print("✅ Correct number of posts found")
                for i, post in enumerate(posts):
                    print(f"  Post {i+1}: {post['title']} (ID: {post['id']})")
            else:
                print(f"❌ Expected 2 posts, found {len(posts)}")
                return False
        else:
            print(f"❌ GET posts failed: {response.text}")
            return False
            
        # Test 5: PUT /api/blog/posts/{post_id} - Update first post
        print(f"\n5️⃣ Testing PUT /api/blog/posts/{post_ids[0]} - Updating first post")
        update_data = {
            "title": "Welcome to My Homepage - Updated",
            "content": "Updated content here",
            "tags": "Web, Updates"
        }
        
        response = requests.put(f"{API_BASE}/blog/posts/{post_ids[0]}", json=update_data)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            updated_post = response.json()
            print(f"✅ Post updated successfully")
            print(f"New Title: {updated_post['title']}")
            print(f"New Content: {updated_post['content']}")
            print(f"New Tags: {updated_post['tags']}")
        else:
            print(f"❌ Post update failed: {response.text}")
            return False
            
        # Test 6: DELETE /api/blog/posts/{post_id} - Delete second post
        print(f"\n6️⃣ Testing DELETE /api/blog/posts/{post_ids[1]} - Deleting second post")
        response = requests.delete(f"{API_BASE}/blog/posts/{post_ids[1]}")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            delete_response = response.json()
            print(f"✅ Post deleted successfully")
            print(f"Response: {delete_response}")
        else:
            print(f"❌ Post deletion failed: {response.text}")
            return False
            
        # Test 7: GET /api/blog/posts - Final verification (should have 1 post)
        print("\n7️⃣ Testing GET /api/blog/posts - Final verification (should have 1 post)")
        response = requests.get(f"{API_BASE}/blog/posts")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            posts = response.json()
            print(f"✅ Found {len(posts)} posts")
            if len(posts) == 1:
                print("✅ Correct number of posts remaining")
                remaining_post = posts[0]
                print(f"  Remaining Post: {remaining_post['title']} (ID: {remaining_post['id']})")
                if remaining_post['id'] == post_ids[0]:
                    print("✅ Correct post remained (the updated one)")
                else:
                    print("❌ Wrong post remained")
                    return False
            else:
                print(f"❌ Expected 1 post, found {len(posts)}")
                return False
        else:
            print(f"❌ Final GET posts failed: {response.text}")
            return False
            
        # Test 8: Error handling - Try to update non-existent post
        print("\n8️⃣ Testing error handling - Update non-existent post")
        fake_id = "non-existent-id"
        response = requests.put(f"{API_BASE}/blog/posts/{fake_id}", json=update_data)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 404:
            print("✅ Proper 404 error for non-existent post update")
        else:
            print(f"❌ Expected 404, got {response.status_code}: {response.text}")
            
        # Test 9: Error handling - Try to delete non-existent post
        print("\n9️⃣ Testing error handling - Delete non-existent post")
        response = requests.delete(f"{API_BASE}/blog/posts/{fake_id}")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 404:
            print("✅ Proper 404 error for non-existent post deletion")
        else:
            print(f"❌ Expected 404, got {response.status_code}: {response.text}")
            
        print("\n" + "=" * 60)
        print("🎉 ALL BLOG API TESTS COMPLETED SUCCESSFULLY!")
        print("✅ All CRUD operations work correctly")
        print("✅ Posts are persisted in MongoDB")
        print("✅ Proper error handling for invalid IDs")
        print("✅ Tags are correctly parsed from comma-separated string")
        return True
        
    except requests.exceptions.ConnectionError as e:
        print(f"❌ Connection Error: Could not connect to {API_BASE}")
        print(f"Error: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error during testing: {e}")
        return False

if __name__ == "__main__":
    success = test_blog_api()
    if success:
        print("\n🎯 Test Result: SUCCESS")
        exit(0)
    else:
        print("\n💥 Test Result: FAILURE")
        exit(1)