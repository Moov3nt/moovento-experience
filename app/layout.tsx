import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundField from "../components/BackgroundField";
import SceneProvider from "../components/Scene/SceneProvider";

import SiteHeader from "../components/SiteHeader"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moovento.it"),
  title: "Moovento",
  description: "Making the Invisible Valuable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-black text-white">
        <SceneProvider>
          <BackgroundField />

          <div className="relative z-20">
           <SiteHeader />
          </div>

          <main className="relative z-10">
            {children}
          </main>
        </SceneProvider>
      </body>
    </html>
  );
}