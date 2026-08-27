import Hero from "../components/Hero";
import CentralSequence from "../components/CentralSequence";
import PostActionSequence from "../components/PostActionSequence";
import OperationalJourneySection from "../components/OperationalJourney/OperationalJourneySection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />

      <CentralSequence />

      <PostActionSequence />

      <OperationalJourneySection />

      <CTASection />
    </>
  );
}
