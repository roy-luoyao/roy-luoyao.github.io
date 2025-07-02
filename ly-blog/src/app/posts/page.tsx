import { getSortedPostsData } from '@/lib/posts';
import PostList from '../components/PostList';

type Post = {
  id: string;
  title: string;
  date: string;
};

export default async function PostsPage() {
  const allPostsData = await getSortedPostsData();

const posts: Post[] = allPostsData
  .filter(
    (post: any) =>
      typeof post.id === 'string' &&
      typeof post.title === 'string' &&
      typeof post.date === 'string'
  )
  .map((post: any) => ({
    id: post.id,
    title: post.title,
    date: post.date,
  }));

  return (
    <div>
      <h1>Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}