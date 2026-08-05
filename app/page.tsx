import Manifesto from "../components/Manifesto";
import Hero from "../components/Hero";
import InsightSection from "../components/InsightSection";
import PlatformSection from "../components/PlatformSection";
import OperationalJourneySection from "../components/OperationalJourney/OperationalJourneySection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <Manifesto />

      <InsightSection />

      <PlatformSection />

      <OperationalJourneySection />

      <CTASection />
    </>
  );
}
