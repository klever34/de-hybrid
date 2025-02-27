import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BaseLayout from "@components/BaseLayout";
import { AppContextProvider } from "@context/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
    <html lang="en" className={poppins.className}>
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
