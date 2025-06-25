"use client";

import Layout from "./Components/Layout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout title="Your Title" darkMode={false}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
