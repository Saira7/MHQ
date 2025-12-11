// components/blog/BlogCard.jsx
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {post.author}</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
