// utils/fonts.ts
import localFont from 'next/font/local';

// Product Sans
export const productSans = localFont({
  src: [
    {
      path: '../public/Product_Sans/fonts/ProductSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-product-sans'
});

// Switzer
export const switzer = localFont({
  src: [
    {
      path: '../public/Switzer_Complete/Fonts/WEB/fonts/Switzer-Regular.woff',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-switzer'
});
