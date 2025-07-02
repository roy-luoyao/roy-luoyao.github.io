import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default async function Home() {
  const posts = await getSortedPostsData();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">我的博客</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              <span className="text-xl text-blue-600 hover:underline">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}