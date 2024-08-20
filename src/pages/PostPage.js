import React, { useState, useEffect } from 'react';
import PostView from '../components/PostView';
import CommentSection from '../components/CommentSection';

const PostPage = ({ match }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch the post data using the post ID from the URL
    const postId = parseInt(match.params.id, 10);
    // Simulate fetching data
    const fetchedPost = { id: postId, title: "Sample Post", content: "<p>This is a sample post content.</p>" };
    setPost(fetchedPost);
  }, [match.params.id]);

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {post ? (
        <>
          <PostView post={post} />
          <CommentSection comments={comments} onAddComment={handleAddComment} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage;
