import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundField from "../components/BackgroundField";
import SceneProvider from "../components/Scene/SceneProvider";

import SiteHeader from "../components/SiteHeader"
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moovento.it"),

  title: {
    default: "Moovento | Rendere visibile il valore invisibile",
    template: "%s | Moovento",
  },

  description:
    "Moovento comprende le relazioni che muovono sistemi complessi per supportare decisioni più consapevoli, sostenibili e resilienti.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Moovento",
    title: "Moovento | Rendere visibile il valore invisibile",
    description:
      "Comprendiamo le relazioni che muovono sistemi complessi e rendiamo visibile il valore invisibile.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Moovento — Rendere visibile il valore invisibile",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moovento | Rendere visibile il valore invisibile",
    description:
      "Comprendiamo le relazioni che muovono sistemi complessi e rendiamo visibile il valore invisibile.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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

        <Analytics />
      </body>
    </html>
  );
}