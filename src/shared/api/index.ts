import { MockPostRepository } from './mock/mock-post-repository';

export type { PostRepository } from './post-repository';

export const postRepository = new MockPostRepository();
