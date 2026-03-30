import React from 'react';

const BlogContent = ({ content }) => {
  return (
    <div
      className="prose prose-lg max-w-none text-black prose-headings:text-black prose-strong:text-black prose-p:text-black prose-li:text-black prose-blockquote:text-black"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;
