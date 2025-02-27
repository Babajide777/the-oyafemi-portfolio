'use client';
import { Cormorant_SC, Outfit } from 'next/font/google';
import { productSans, switzer } from '@/utils/fonts';

const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantSC.className} ${outfit.className} ${productSans.variable} ${switzer.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
