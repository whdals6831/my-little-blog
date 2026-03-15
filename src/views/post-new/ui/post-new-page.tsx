import { CreatePostForm } from '@/features/create-post';

export function PostNewPage() {
  return (
    <div className="mx-auto max-w-2xl py-10">
      <h1 className="mb-8 text-2xl font-bold">새 글 작성</h1>
      <CreatePostForm />
    </div>
  );
}
