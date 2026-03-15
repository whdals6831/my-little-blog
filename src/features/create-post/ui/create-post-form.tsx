'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/shared/ui/shadcn/button';
import { Input } from '@/shared/ui/shadcn/input';
import { Label } from '@/shared/ui/shadcn/label';
import { Textarea } from '@/shared/ui/shadcn/textarea';
import { createPostAction } from '../api/create-post-action';

export function CreatePostForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const result = await createPostAction(formData);

    if (result.error) {
      setError(result.error);
      setPending(false);
      return;
    }

    router.push('/');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">제목</Label>
        <Input
          id="title"
          name="title"
          placeholder="게시글 제목을 입력하세요"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="body">본문</Label>
        <Textarea
          id="body"
          name="body"
          placeholder="내용을 입력하세요"
          rows={12}
          required
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" disabled={pending}>
        {pending ? '저장 중...' : '저장'}
      </Button>
    </form>
  );
}
