import Link from 'next/link';
import { Button } from '@/shared/ui/shadcn/button';
import { postRepository } from '@/shared/api';
import { PostCard } from '@/entities/post';

export async function MainPage() {
  const posts = await postRepository.getAll();

  return (
    <div className="mx-auto max-w-2xl py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">블로그</h1>
        <Button asChild>
          <Link href="/post/new">새 글 작성</Link>
        </Button>
      </div>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">아직 게시글이 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
