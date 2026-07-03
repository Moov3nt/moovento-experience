import SceneOne from "./SceneOne";
import SceneTwo from "./SceneTwo";
import SceneThree from "./SceneThree";
import SceneFour from "./SceneFour";
import SceneFive from "./SceneFive";
import FinalCTA from "./FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perché esistiamo",
  description:
    "Moovento nasce per leggere la complessità attraverso relazioni, dipendenze e influenze, trasformando la comprensione dei sistemi in capacità di agire.",
};
export default function WhyPage() {
  return (
    <main className="bg-[#0D0F10] text-white">
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <SceneFour />
      <SceneFive />
      <FinalCTA />
    </main>
  );
}