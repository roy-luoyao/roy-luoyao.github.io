import React from 'react';

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div
      className="post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostContent;