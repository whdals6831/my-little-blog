# My Little Blog

## 환경 구성

```shell
# React + Typescript + Tailwind (default)
npx create-next-app@latest .

npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss
```

<br/>

## 규칙

- path 입력 시 하위경로는 상관없는데, `../fonts` 같이 상위경로로 가는건 금지
  - `@/*`를 사용하여 경로 입력
- 컴포넌트의 인자값인 프로퍼티의 네이밍은 특별한 경우가 아니면 `Props`로 통일

  ```tsx
  interface Props {
    value: string;
    onClick: () => void;
  }

  export function MyButton() {
    // content
  }
  ```

- `enum`형태의 데이터 타입은 `type`으로 표현하고 나머지 객체의 데이터 타입은 `interface` 지향

  ```tsx
  type State = 'success' | 'fail';

  interface Car {
    speed: number;
    brand: string;
  }
  ```

<br/>

## 확장 프로그램

- Tailwind CSS Intellisense
- Tailwind CSS Highlight Intellisense
