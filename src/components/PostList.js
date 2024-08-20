import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, onDelete }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.summary}</p>
            <div className="flex justify-between">
              <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
              <div className="flex space-x-2">
                <Link to={`/edit/${post.id}`} className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">Edit</Link>
                <button onClick={() => onDelete(post.id)} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
