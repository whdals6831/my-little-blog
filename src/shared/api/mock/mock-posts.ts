import type { Post } from '@/entities/post';

export const seedPosts: Post[] = [
  {
    id: '1',
    title: 'Next.js 16에서 달라진 점',
    body: 'Next.js 16은 React 19를 기본으로 사용하며, async params와 같은 새로운 패턴을 도입했습니다. 서버 컴포넌트가 기본이 되면서 데이터 페칭 방식도 크게 변화했습니다.',
    createdAt: new Date('2026-03-10T09:24:17'),
    updatedAt: new Date('2026-03-10T11:05:42'),
  },
  {
    id: '2',
    title: 'Feature-Sliced Design 적용기',
    body: 'FSD는 프론트엔드 프로젝트를 레이어(app, views, features, entities, shared)로 나누어 관리하는 아키텍처입니다. 의존성 방향이 명확해지고, 기능 단위로 코드를 찾기 쉬워집니다.',
    createdAt: new Date('2026-03-12T15:37:03'),
    updatedAt: new Date('2026-03-12T15:37:03'),
  },
  {
    id: '3',
    title: 'shadcn/ui 컴포넌트 커스터마이징',
    body: 'shadcn/ui는 복사해서 사용하는 컴포넌트 라이브러리입니다. Tailwind CSS와 Radix UI 기반으로, 프로젝트에 맞게 자유롭게 수정할 수 있다는 것이 가장 큰 장점입니다.',
    createdAt: new Date('2026-03-14T22:48:51'),
    updatedAt: new Date('2026-03-15T08:12:30'),
  },
];
