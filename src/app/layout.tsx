import type { Metadata } from 'next';
import { IM_Fell_English, Pirata_One } from 'next/font/google';
import './globals.css';

const geistImFellEnglish = IM_Fell_English({
  weight: '400',
  variable: '--font-im-fell-english',
  subsets: ['latin'],
});

const geistPirataOne = Pirata_One({
  weight: '400',
  variable: '--font-pirata-one',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cinemark',
  description: 'Site voltado para compra de ingresso online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistImFellEnglish.variable} ${geistPirataOne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
