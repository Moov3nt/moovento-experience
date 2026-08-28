import type { Metadata } from "next";

import AmbitiPropagation from "./AmbitiPropagation";

export const metadata: Metadata = {
  title: "Ambiti",
  description:
    "REVEALUE rende leggibili le relazioni nei sistemi complessi e collega decisioni, azioni e risultati.",
  alternates: {
    canonical: "/ambiti",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/ambiti",
    siteName: "REVEALUE",
    title: "Ambiti",
    description:
      "REVEALUE rende leggibili le relazioni nei sistemi complessi e collega decisioni, azioni e risultati.",
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
    title: "Ambiti",
    description:
      "REVEALUE rende leggibili le relazioni nei sistemi complessi e collega decisioni, azioni e risultati.",
    images: {
      url: "/revealue-social.png",
      alt: "REVEALUE — Event Intelligence",
    },
  },
};

export default function AmbitiPage() {
  return <AmbitiPropagation />;
}
