import React, { useState, useEffect } from 'react';

const PostForm = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      if (initialData.image) {
        setImagePreview(initialData.image);
      }
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, image });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">{initialData ? 'Edit Post' : 'New Post'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="8"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border p-2 mb-4 w-full rounded-lg"
      />
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      )}
      <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 rounded-lg w-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200">
        {initialData ? 'Update Post' : 'Submit Post'}
      </button>
    </form>
  );
};

export default PostForm;
