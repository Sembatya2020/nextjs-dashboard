
import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "The official Next.js Learn Dashboard built with App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
