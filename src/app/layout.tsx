import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';

import { Footer } from '@portfolio/components/layout/Footer';
import { Header } from '@portfolio/components/layout/header/Header';

import { cn } from '@portfolio/lib/lib';

import { staticRootHeaderData } from '@portfolio/static-data/staticData';

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
    <html lang='pt-br'>
      <head>
        <link rel='icon' href='/assets/media/ico/favicon.ico' sizes='512x512' />
      </head>
      <body className={cn(GeistMono.className, 'bg-background')}>
        <Header links={staticRootHeaderData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
