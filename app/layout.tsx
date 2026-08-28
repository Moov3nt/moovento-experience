import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundField from "../components/BackgroundField";
import SceneRuntime from "../components/Scene/SceneRuntime";

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
  metadataBase: new URL("https://revealue.it"),
  applicationName: "REVEALUE",

  title: {
    default: "REVEALUE | Event intelligence",
    template: "%s | REVEALUE",
  },

  description:
    "REVEALUE comprende come evolvono i sistemi complessi per trasformare evidenze e relazioni in decisioni responsabili, azioni coordinate e apprendimento.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "REVEALUE",
    title: "REVEALUE | Event intelligence",
    description:
      "Comprendiamo come evolvono i sistemi complessi e trasformiamo le evidenze in decisioni responsabili, azioni coordinate e apprendimento.",
    images: [
      {
        url: "/revealue-social.png",
        width: 1200,
        height: 630,
        alt: "REVEALUE — Event Intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "REVEALUE | Event intelligence",
    description:
      "Comprendiamo come evolvono i sistemi complessi e trasformiamo le evidenze in decisioni responsabili, azioni coordinate e apprendimento.",
    images: {
      url: "/revealue-social.png",
      alt: "REVEALUE — Event Intelligence",
    },
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
        <a
          href="#main-content"
          className="sr-only left-4 top-4 z-[100] rounded-sm bg-[#080a0b] px-4 py-3 text-sm font-medium text-revealue-ivory focus:not-sr-only focus:!fixed focus:outline-2 focus:outline-offset-4 focus:outline-revealue-copper"
        >
          Vai al contenuto principale
        </a>

        <SceneRuntime>
          <BackgroundField />

          <div className="relative z-20">
           <SiteHeader />
          </div>

          <main id="main-content" tabIndex={-1} className="relative z-10">
            {children}
          </main>
        </SceneRuntime>

        <Analytics />
      </body>
    </html>
  );
}
