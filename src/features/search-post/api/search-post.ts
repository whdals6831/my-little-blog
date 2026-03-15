import { postRepository } from '@/shared/api';

export function searchPosts(query: string) {
  return postRepository.search(query);
}
