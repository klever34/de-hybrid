import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@components/BaseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "De-Hybrid",
  description: "Buy audios and books online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="w-screen h-screen bg-black">
          <BaseLayout>{children}</BaseLayout>
        </main>
      </body>
    </html>
  );
}
