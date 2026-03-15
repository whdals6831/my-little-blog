'use client';

import { useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/shared/ui/shadcn/input';

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const urlQuery = searchParams.get('q') ?? '';
  const [pending, setPending] = useState<string | null>(null);

  // pending이 URL에 반영되면 클리어
  if (pending !== null && pending === urlQuery) {
    setPending(null);
  }

  const displayValue = pending ?? urlQuery;

  function handleChange(newValue: string) {
    setPending(newValue);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (newValue.trim()) {
        params.set('q', newValue);
      } else {
        params.delete('q');
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    }, 300);
  }

  return (
    <Input
      type="search"
      placeholder="게시글 검색..."
      value={displayValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
