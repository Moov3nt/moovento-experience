import type { Metadata } from "next";

import EmergenceFoundation from "./EmergenceFoundation";

export const metadata: Metadata = {
  title: "Perché esistiamo",
  description:
    "REVEALUE nasce per comprendere relazioni, dipendenze e influenze, trasformando ciò che accade in decisioni responsabili, azioni coordinate e apprendimento.",
  alternates: {
    canonical: "/perche-esistiamo",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/perche-esistiamo",
    siteName: "REVEALUE",
    title: "Perché esistiamo",
    description:
      "REVEALUE nasce per comprendere relazioni, dipendenze e influenze, trasformando ciò che accade in decisioni responsabili, azioni coordinate e apprendimento.",
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
    title: "Perché esistiamo",
    description:
      "REVEALUE nasce per comprendere relazioni, dipendenze e influenze, trasformando ciò che accade in decisioni responsabili, azioni coordinate e apprendimento.",
    images: {
      url: "/revealue-social.png",
      alt: "REVEALUE — Event Intelligence",
    },
  },
};
export default function WhyPage() {
  return <EmergenceFoundation />;
}
