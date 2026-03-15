import { notFound } from 'next/navigation';
import Link from 'next/link';
import { postRepository } from '@/shared/api';
import { EditPostForm } from '@/features/edit-post';

interface PostEditPageProps {
  params: Promise<{ id: string }>;
}

export async function PostEditPage({ params }: PostEditPageProps) {
  const { id } = await params;
  const post = await postRepository.getById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl py-10">
      <Link
        href={`/post/${id}`}
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← 돌아가기
      </Link>
      <h1 className="mb-6 text-2xl font-bold">게시글 수정</h1>
      <EditPostForm post={{ id: post.id, title: post.title, body: post.body }} />
    </div>
  );
}
