'use server';

import { revalidatePath } from 'next/cache';
import { postRepository } from '@/shared/api';

export async function editPostAction(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  if (!title?.trim() || !body?.trim()) {
    return { error: '제목과 본문을 모두 입력해주세요.' };
  }

  const updated = await postRepository.update(id, {
    title: title.trim(),
    body: body.trim(),
  });

  if (!updated) {
    return { error: '게시글을 찾을 수 없습니다.' };
  }

  revalidatePath('/');
  revalidatePath(`/post/${id}`);
  return { success: true };
}
