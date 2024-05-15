// PostList.js
import React from 'react';

const PostList = ({ posts, onSelectPost }) => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.title} className="cursor-pointer hover:text-blue-500 mb-4" onClick={() => onSelectPost(post)}>
            <strong>{post.title}</strong><br />
            <span>{post.shortDescription}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;