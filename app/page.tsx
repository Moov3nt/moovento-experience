import Manifesto from "../components/Manifesto";
import Hero from "../components/Hero";
import PlatformSection from "../components/PlatformSection";
import InsightSection from "../components/InsightSection";
import OperationalJourneySection from "../components/OperationalJourney/OperationalJourneySection";
import DecisionEngineSection from "../components/DecisionEngineSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <Manifesto />

      <PlatformSection />

      <InsightSection />

      <OperationalJourneySection />

      <DecisionEngineSection />

      <CTASection />
    </>
  );
}
