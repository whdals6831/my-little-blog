import type { Post } from '@/entities/post';

export interface PostRepository {
  getAll(): Promise<Post[]>;
  getById(id: string): Promise<Post | null>;
  create(input: { title: string; body: string }): Promise<Post>;
  update(id: string, input: { title: string; body: string }): Promise<Post | null>;
  delete(id: string): Promise<boolean>;
}
