'use server';

import { redirect } from 'next/navigation';
import { postRepository } from '@/shared/api';

export async function deletePostAction(id: string) {
  await postRepository.delete(id);
  redirect('/');
}
