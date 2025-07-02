import { getPostData } from '@/lib/posts';
import PostContent from '../../components/PostContent';

export default async function IOSPage() {
  // 这里假设你的 getPostData 支持传入 'iOS' 作为参数
  const postData = await getPostData('iOS');

  return (
    <div>
      {/* <h1>{postData.title}</h1> */}
      {/* <div className="post-date">{postData.date}</div> */}
      <PostContent content={postData.content} />
    </div>
  );
}