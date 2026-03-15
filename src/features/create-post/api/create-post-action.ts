'use server';

import { revalidatePath } from 'next/cache';
import { postRepository } from '@/shared/api';

export async function createPostAction(formData: FormData) {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  if (!title?.trim() || !body?.trim()) {
    return { error: '제목과 본문을 모두 입력해주세요.' };
  }

  await postRepository.create({ title: title.trim(), body: body.trim() });
  revalidatePath('/');
  return { success: true };
}
