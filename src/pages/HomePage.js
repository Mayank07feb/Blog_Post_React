import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (post) => {
    setPosts([
      ...posts,
      { id: posts.length + 1, ...post, summary: post.content.slice(0, 100) }
    ]);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 text-center rounded-b-lg shadow-md">
        <h1 className="text-3xl font-bold">My Blog</h1>
      </header>
      <main className="container mx-auto mt-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 lg:pr-4">
            <PostForm onSubmit={handleAddPost} />
          </div>
          <div className="lg:w-2/3 lg:pl-4">
            <PostList posts={posts} onDelete={handleDeletePost} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
