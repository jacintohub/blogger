// MainContent.js
import React from 'react';

const MainContent = ({ post }) => {
  if (!post) return <div className="flex-1 p-4"></div>;

  return (
    <div className="flex-1 p-4">
      <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
      <p className="mt-2">{post.description}</p>
    </div>
  );
};

export default MainContent;