import { notFound } from 'next/navigation';
import Link from 'next/link';
import { postRepository } from '@/shared/api';
import { PostContent } from '@/entities/post';
import { DeletePostButton } from '@/features/delete-post';
import { buttonVariants } from '@/shared/ui/shadcn/button';

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
        className="text-muted-foreground hover:text-foreground mb-6 inline-block text-sm"
      >
        ← 목록으로
      </Link>
      <PostContent post={post} />
      <div className="mt-6 flex gap-2">
        <Link
          href={`/post/${id}/edit`}
          className={buttonVariants({ variant: 'secondary' })}
        >
          수정
        </Link>
        <DeletePostButton postId={id} />
      </div>
    </div>
  );
}
