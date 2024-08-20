import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import EditPostPage from './pages/EditPostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
