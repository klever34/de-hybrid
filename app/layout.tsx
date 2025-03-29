import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "@components/BaseLayout";
import { AppContextProvider } from "@context/AppContext";

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
    <html lang="en" className="font-[Poppins]">
      <body>
        <main className="w-screen h-screen bg-black">
          <AppContextProvider>
            <BaseLayout>{children}</BaseLayout>
          </AppContextProvider>
        </main>
      </body>
    </html>
  );
}
