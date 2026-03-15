import { Button } from '@/shared/ui/shadcn/button';
import Link from 'next/link';

export function MainPage() {
  return (
    <>
      <div>캬캬캬!</div>
      <Button asChild>
        <Link href={'/post'}>글로 이동</Link>
      </Button>
    </>
  );
}
