import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, Tag, Edit2, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: ''
  });

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/blog/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({ 
        title: 'Error loading posts', 
        description: 'Could not fetch blog posts',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (post = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title,
        content: post.content,
        tags: post.tags.join(', ')
      });
    } else {
      setEditingPost(null);
      setFormData({ title: '', content: '', tags: '' });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingPost) {
        // Edit existing post
        await axios.put(`${API}/blog/posts/${editingPost.id}`, formData);
        toast({ title: 'Post updated successfully!' });
      } else {
        // Add new post
        await axios.post(`${API}/blog/posts`, formData);
        toast({ title: 'Post created successfully!' });
      }
      
      // Refresh posts
      await fetchPosts();
      setIsDialogOpen(false);
      setFormData({ title: '', content: '', tags: '' });
    } catch (error) {
      console.error('Error saving post:', error);
      toast({ 
        title: 'Error saving post', 
        description: 'Could not save blog post',
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/blog/posts/${id}`);
      toast({ title: 'Post deleted successfully!' });
      await fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({ 
        title: 'Error deleting post', 
        description: 'Could not delete blog post',
        variant: 'destructive'
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-xl font-semibold text-white">Blog & Updates</h1>
          <Button
            onClick={() => handleOpenDialog()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-slate-400">Loading posts...</div>
          </div>
        ) : posts.length === 0 ? (
          <Card className="bg-slate-900/50 border-slate-800 p-12 text-center">
            <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl text-slate-400 mb-2">No posts yet</h3>
            <p className="text-slate-500 mb-6">Start sharing your updates and projects</p>
            <Button
              onClick={() => handleOpenDialog()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create First Post
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden group"
              >
                {/* Gradient accent */}
                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenDialog(post)}
                        className="text-slate-400 hover:text-white"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="text-slate-400 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {post.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingPost ? 'Edit Post' : 'Create New Post'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter post title"
                required
                className="bg-slate-950 border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Content</label>
              <Textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write your post content..."
                required
                rows={6}
                className="bg-slate-950 border-slate-800 text-white"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Tags (comma-separated)</label>
              <Input
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="React, Web Development, Updates"
                className="bg-slate-950 border-slate-800 text-white"
              />
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                {editingPost ? 'Update Post' : 'Create Post'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const BookOpen = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export default Blog;
