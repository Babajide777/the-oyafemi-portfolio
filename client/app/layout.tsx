import { Cormorant_SC, Outfit } from "next/font/google";
import { productSans, switzer } from "@/utils/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Layout from "./Components/Layout";

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantSC.className} ${outfit.className} ${productSans.variable} ${switzer.variable}`}
      >
        <AppRouterCacheProvider>
          <Layout title="Your Title" darkMode={false}>
            {children}
          </Layout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
