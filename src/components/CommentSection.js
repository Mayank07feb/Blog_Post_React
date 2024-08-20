import React, { useState } from 'react';

const CommentSection = ({ comments, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Comments</h2>
      <div className="space-y-4 mb-6">
        {comments.map((c, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-gray-800">{c}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Write your comment here..."
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-lg w-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
