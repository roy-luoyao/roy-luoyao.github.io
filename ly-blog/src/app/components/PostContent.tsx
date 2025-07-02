import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div className="post-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostContent;