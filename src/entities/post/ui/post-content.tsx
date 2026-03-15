import type { Post } from '../model/types';

interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time className="mt-2 block text-sm text-muted-foreground">
          {post.createdAt.toLocaleString('ko-KR')}
        </time>
      </header>
      <div className="whitespace-pre-wrap leading-relaxed">{post.body}</div>
    </article>
  );
}
