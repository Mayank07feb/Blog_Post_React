import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPostPage = () => {
  const { id } = useParams();  // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post data using the post ID from the URL
    // Simulate fetching data
    const fetchedPost = { id: parseInt(id, 10), title: "Sample Post", content: "<p>This is a sample post content.</p>" };
    setPost(fetchedPost);
  }, [id]);

  const handleUpdatePost = (updatedPost) => {
    // Handle post update logic here
    console.log('Updated post:', updatedPost);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {post ? (
        <PostForm initialData={post} onSubmit={handleUpdatePost} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPostPage;
