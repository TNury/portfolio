import type { Metadata } from 'next';

import '@portfolio/styles/globals.css';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Yuri Souza',
  description: 'This is my personal website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
}
