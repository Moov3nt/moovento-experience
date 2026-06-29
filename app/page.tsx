import Manifesto from "../components/Manifesto";
import VisualEngine from "../components/VisualEngine/VisualEngine";
import Hero from "../components/Hero";
import PlatformSection from "../components/PlatformSection";
import InsightSection from "../components/InsightSection";
import DecisionEngineSection from "../components/DecisionEngineSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <Manifesto />

      <PlatformSection />

      <InsightSection />

      <DecisionEngineSection />

      <CTASection />
    </>
  );
}