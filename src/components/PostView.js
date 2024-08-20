import React from 'react';

const PostView = ({ post }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{post.title}</h1>
      <div 
        className="prose max-w-none text-gray-700 leading-relaxed" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </div>
  );
};

export default PostView;
