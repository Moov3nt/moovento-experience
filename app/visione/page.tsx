import Hero from "./Hero";
import Problem from "./Problem";
import Paradigm from "./Paradigm";
import Approach from "./Approach";
import Future from "./Future";
import VisionCTA from "./VisionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visione",
  description:
    "La complessità non è il problema. Moovento legge le relazioni tra persone, servizi, infrastrutture, eventi e mobilità per comprendere come evolvono i sistemi.",
};
export default function VisionPage() {
  return (
    <main className="bg-[#0D0F10] text-white">
      <Hero />
      <Problem />
      <Paradigm />
      <Approach />
      <Future />
      <VisionCTA />

    </main>
  );
}