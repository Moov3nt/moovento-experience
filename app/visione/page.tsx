import type { Metadata } from "next";

import VisionEssay from "./VisionEssay";

export const metadata: Metadata = {
  title: "Visione",
  description:
    "REVEALUE legge come evolvono le relazioni tra persone, servizi, infrastrutture, eventi e mobilità, trasformando la comprensione in azione responsabile.",
  alternates: {
    canonical: "/visione",
  },
};
export default function VisionPage() {
  return <VisionEssay />;
}
