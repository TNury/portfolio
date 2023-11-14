import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';

import { Footer } from '@portfolio/components/layout/Footer';

import '@portfolio/styles/globals.css';

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
      <body className={GeistMono.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
