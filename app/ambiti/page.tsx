import AmbitiHero from "@/components/AmbitiHero";
import ApplicationGrid from "@/components/ApplicationGrid";
import ImpactSection from "@/components/ImpactSection";
import MethodSection from "@/components/MethodSection";
import AmbitiCTA from "@/components/AmbitiCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambiti",
  description:
    "Il metodo Moovento rende leggibili le relazioni nei sistemi complessi: turismo, territori, mobilità, eventi, infrastrutture e servizi.",
};

export default function AmbitiPage() {
  return (
    <>
      <AmbitiHero />

      <ApplicationGrid />

      <ImpactSection />

      <MethodSection />

      <AmbitiCTA />
    </>
  );
}