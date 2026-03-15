import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/shared/ui/shadcn/card';
import { HighlightText } from '@/shared/ui/highlight-text';
import type { Post } from '../model/types';

interface PostCardProps {
  post: Post;
  highlightQuery?: string;
}

export function PostCard({ post, highlightQuery }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`} className="block">
      <Card className="transition-colors hover:border-foreground/20">
        <CardHeader>
          <CardTitle>
            {highlightQuery ? (
              <HighlightText text={post.title} query={highlightQuery} />
            ) : (
              post.title
            )}
          </CardTitle>
          <CardDescription>
            {post.createdAt.toLocaleString('ko-KR')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {highlightQuery ? (
              <HighlightText text={post.body} query={highlightQuery} />
            ) : (
              post.body
            )}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
