import { notFound } from 'next/navigation';
import Link from 'next/link';
import { postRepository } from '@/shared/api';
import { PostContent } from '@/entities/post';

interface PostDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const post = await postRepository.getById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← 목록으로
      </Link>
      <PostContent post={post} />
    </div>
  );
}
