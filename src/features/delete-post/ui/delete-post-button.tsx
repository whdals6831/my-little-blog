'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/shadcn/button';
import { deletePostAction } from '../api/delete-post-action';

interface DeletePostButtonProps {
  postId: string;
}

export function DeletePostButton({ postId }: DeletePostButtonProps) {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    setPending(true);
    await deletePostAction(postId);
  }

  return (
    <Button variant="destructive" disabled={pending} onClick={handleClick}>
      {pending ? '삭제 중...' : '삭제'}
    </Button>
  );
}
