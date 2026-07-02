import Hero from "./Hero";
import Problem from "./Problem";
import Paradigm from "./Paradigm";
import Approach from "./Approach";
import Future from "./Future";
import VisionCTA from "./VisionCTA";

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