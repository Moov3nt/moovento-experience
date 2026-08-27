import type { Metadata } from "next";

import EmergenceFoundation from "./EmergenceFoundation";

export const metadata: Metadata = {
  title: "Perché esistiamo",
  description:
    "REVEALUE nasce per comprendere relazioni, dipendenze e influenze, trasformando ciò che accade in decisioni responsabili, azioni coordinate e apprendimento.",
  alternates: {
    canonical: "/perche-esistiamo",
  },
};
export default function WhyPage() {
  return <EmergenceFoundation />;
}
