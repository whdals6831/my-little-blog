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

  async update(
    id: string,
    input: { title: string; body: string },
  ): Promise<Post | null> {
    const post = this.posts.find((p) => p.id === id);
    if (!post) return null;

    post.title = input.title;
    post.body = input.body;
    post.updatedAt = new Date();
    return post;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.posts.splice(index, 1);
    return true;
  }

  async search(query: string): Promise<Post[]> {
    const q = query.toLowerCase();
    return [...this.posts]
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.body.toLowerCase().includes(q),
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}
