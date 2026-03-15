import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/shared/ui/shadcn/card';
import type { Post } from '../model/types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`} className="block">
      <Card className="transition-colors hover:border-foreground/20">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            {post.createdAt.toLocaleString('ko-KR')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {post.body}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
