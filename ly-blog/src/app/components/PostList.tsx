import React from 'react';

type Post = {
  id: string;
  title: string;
  date: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
      </li>
    ))}
  </ul>
);

export default PostList;