import type { Metadata } from "next";

import VisionEssay from "./VisionEssay";

export const metadata: Metadata = {
  title: "Visione",
  description:
    "REVEALUE legge come evolvono le relazioni tra persone, servizi, infrastrutture, eventi e mobilità, trasformando la comprensione in azione responsabile.",
  alternates: {
    canonical: "/visione",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/visione",
    siteName: "REVEALUE",
    title: "Visione",
    description:
      "REVEALUE legge come evolvono le relazioni tra persone, servizi, infrastrutture, eventi e mobilità, trasformando la comprensione in azione responsabile.",
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
    title: "Visione",
    description:
      "REVEALUE legge come evolvono le relazioni tra persone, servizi, infrastrutture, eventi e mobilità, trasformando la comprensione in azione responsabile.",
    images: {
      url: "/revealue-social.png",
      alt: "REVEALUE — Event Intelligence",
    },
  },
};
export default function VisionPage() {
  return <VisionEssay />;
}
