import type { Post } from '@/entities/post';
import type { PostRepository } from '../post-repository';
import { seedPosts } from './mock-posts';

export class MockPostRepository implements PostRepository {
  private posts: Post[] = [...seedPosts];

  async getAll(): Promise<Post[]> {
    return [...this.posts].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }

  async getById(id: string): Promise<Post | null> {
    return this.posts.find((p) => p.id === id) ?? null;
  }

  async create(input: { title: string; body: string }): Promise<Post> {
    const now = new Date();
    const post: Post = {
      id: crypto.randomUUID(),
      title: input.title,
      body: input.body,
      createdAt: now,
      updatedAt: now,
    };
    this.posts.push(post);
    return post;
  }
}
