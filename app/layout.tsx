"use client";

import "./globals.css";
import BaseLayout from "@components/BaseLayout";
import { AppContextProvider } from "@context/AppContext";
import { GoogleAnalytics } from "nextjs-google-analytics";

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
        <GoogleAnalytics trackPageViews />
      </body>
    </html>
  );
}
