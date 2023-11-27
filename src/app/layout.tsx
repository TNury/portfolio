import type { Metadata } from 'next';
import Script from 'next/script';

import { GeistMono } from 'geist/font/mono';

import { Footer } from '@portfolio/components/layout/Footer';
import { Header } from '@portfolio/components/layout/header/Header';

import { cn } from '@portfolio/lib/lib';

import { staticHeaderData } from '@portfolio/static-data/staticData';

import '@portfolio/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yuri-souza.stellarwind.com.br/'),
  title: 'Yuri Souza.',
  description:
    'Olá, meu nome é Yuri Souza. Sou um Desenvolvedor de Software apaixonado por criar experiências digitais envolventes e funcionais.',
  openGraph: {
    type: 'website',
    title: 'Yuri Souza.',
    description:
      'Olá, meu nome é Yuri Souza. Sou um Desenvolvedor de Software apaixonado por criar experiências digitais envolventes e funcionais.',
    siteName: 'Yuri Souza.',
    locale: 'pt_BR',
    url: 'https:/yuri-souza.stellarwind.com.br/',
    images: [
      {
        url: '/assets/media/jpg/og_media.jpg',
        width: 1200,
        height: 630,
        alt: 'Yuri Souza',
      },
    ],
  },
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
        <Script
          id='ms_clarity'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jx59j6sdh8");`,
          }}
        />
      </head>
      <body className={cn(GeistMono.className, 'bg-background')}>
        <Header links={staticHeaderData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
