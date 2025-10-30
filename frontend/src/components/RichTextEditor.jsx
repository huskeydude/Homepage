import React, { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Image, Bold, Italic, List, Link as LinkIcon } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const RichTextEditor = ({ value, onChange }) => {
  const { getAuthHeader } = useAuth();
  const [showPreview, setShowPreview] = useState(false);

  const handleImageUpload = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(`${API}/upload`, formData, {
          headers: {
            ...getAuthHeader(),
            'Content-Type': 'multipart/form-data'
          }
        });

        // Construct proper image URL - response.data.url is already /uploads/filename
        const imageUrl = `${BACKEND_URL}${response.data.url}`;
        const imageTag = `<img src="${imageUrl}" alt="Uploaded image" class="blog-image" style="max-width: 100%; height: auto; margin: 16px 0; border-radius: 8px;" />`;
        onChange(value + '\n' + imageTag);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image');
      }
    };

    input.click();
  };

  const insertTag = (tag) => {
    const textarea = document.querySelector('textarea[name="content"]');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end) || 'text';
    
    let insertText = '';
    switch(tag) {
      case 'bold':
        insertText = `<strong>${selectedText}</strong>`;
        break;
      case 'italic':
        insertText = `<em>${selectedText}</em>`;
        break;
      case 'list':
        insertText = `<ul>\n  <li>${selectedText}</li>\n  <li>Item 2</li>\n</ul>`;
        break;
      case 'link':
        insertText = `<a href="https://example.com" target="_blank">${selectedText}</a>`;
        break;
      default:
        return;
    }

    const newValue = value.substring(0, start) + insertText + value.substring(end);
    onChange(newValue);
  };

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 bg-slate-950 border border-slate-800 rounded-lg">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertTag('bold')}
          className="text-slate-400 hover:text-white"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertTag('italic')}
          className="text-slate-400 hover:text-white"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertTag('list')}
          className="text-slate-400 hover:text-white"
          title="List"
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertTag('link')}
          className="text-slate-400 hover:text-white"
          title="Link"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>
        <div className="border-l border-slate-700 h-6 mx-2"></div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleImageUpload}
          className="text-slate-400 hover:text-white"
          title="Upload Image"
        >
          <Image className="w-4 h-4" />
        </Button>
        <div className="border-l border-slate-700 h-6 mx-2"></div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowPreview(!showPreview)}
          className="text-slate-400 hover:text-white text-xs"
        >
          {showPreview ? 'Edit' : 'Preview'}
        </Button>
      </div>

      {/* Editor/Preview */}
      {showPreview ? (
        <div 
          className="min-h-[300px] p-4 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ) : (
        <Textarea
          name="content"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your content using HTML tags like <strong>, <em>, <p>, <h2>, <ul>, <li>, etc.&#10;&#10;Use the toolbar buttons to insert tags or upload images."
          rows={12}
          className="bg-slate-950 border-slate-800 text-white font-mono text-sm"
        />
      )}

      <div className="text-xs text-slate-500 space-y-1">
        <p>💡 Tip: You can use HTML tags directly for formatting</p>
        <p>Examples: &lt;h2&gt;Heading&lt;/h2&gt;, &lt;p&gt;Paragraph&lt;/p&gt;, &lt;ul&gt;&lt;li&gt;List item&lt;/li&gt;&lt;/ul&gt;</p>
      </div>
    </div>
  );
};

export default RichTextEditor;
