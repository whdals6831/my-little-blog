import type { Metadata } from 'next';
import '@/app/styles';

export const metadata: Metadata = {
  title: '나작블',
  description: '나만의 작은 블로그',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col antialiased">
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
