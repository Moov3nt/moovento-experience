import type { Metadata } from "next";

import AmbitiPropagation from "./AmbitiPropagation";

export const metadata: Metadata = {
  title: "Ambiti",
  description:
    "REVEALUE rende leggibili le relazioni nei sistemi complessi e collega decisioni, azioni e risultati.",
  alternates: {
    canonical: "/ambiti",
  },
};

export default function AmbitiPage() {
  return <AmbitiPropagation />;
}
