# CLAUDE.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

No test runner is configured yet.

## Architecture

Next.js 16 + React 19 blog app using **Feature-Sliced Design (FSD)**.

### Data layer

- 서버 없이 mock 데이터로 동작. 나중에 API로 쉽게 교체 가능한 구조.
- `shared/api/` — 데이터 접근 함수 (repository 패턴). mock 구현체를 export하되, 인터페이스를 분리하여 추후 fetch 기반으로 교체 가능하게 설계.
- `shared/api/mock/` — mock 데이터 및 mock repository 구현체.

### Domain

- **사용자 프로필**: 블로그 소유자의 프로필 정보 (이름, 소개, 아바타 등).
- **게시글 (Post)**: CRUD (추가, 수정, 삭제) 지원. 각 게시글은 제목, 본문, 작성일, 수정일 등을 포함.

### App Router conventions

- `app/` 라우트 파일(`page.tsx`, `layout.tsx`)은 thin re-export만 한다. 로직과 UI는 views 레이어에 둔다.
- `params`, `searchParams` 등 Next.js가 page에 주입하는 props는 views 컴포넌트가 직접 받아서 처리한다. `app/page.tsx`에서 풀어서 넘기지 않는다.
  ```ts
  // app/post/[id]/page.tsx — 이렇게
  export { PostDetailPage as default } from '@/views/post-detail';

  // views/post-detail — params를 직접 받음
  export async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) { ... }
  ```

### Key conventions

- Barrel 파일(`index.ts`)은 slice root에만 둔다 (예: `entities/post/index.ts`). 세그먼트 폴더(`ui/`, `api/`, `model/`)에는 barrel 파일을 만들지 않고, slice root에서 실제 파일 경로로 직접 re-export한다.
- Use `@/` path alias (maps to `src/`).
- Styling: `cn()` from `@/shared/lib/utils` for conditional class merging.
