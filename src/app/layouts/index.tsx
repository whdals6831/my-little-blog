import type { Metadata } from 'next';
import { geistSans } from '@/app/fonts';
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
      <body className={`${geistSans.variable} flex flex-col antialiased`}>
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
