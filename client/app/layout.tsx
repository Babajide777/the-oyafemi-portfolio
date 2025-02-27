'use client';
import { Cormorant_SC, Outfit } from 'next/font/google';

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
      <body className={`${cormorantSC.className} ${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
