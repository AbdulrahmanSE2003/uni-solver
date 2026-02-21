import CardsSection from "./_components/HomePage/CardsSection";
import Hero from "./_components/HomePage/Hero";
import Mockup from "./_components/HomePage/Mockup";
import StartSection from "./_components/HomePage/StartSection";

export default async function UniSolved() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Mockup Section */}
      <Mockup />

      {/* Cards Section */}
      <CardsSection />

      {/* Start Section */}
      <StartSection />
    </div>
  );
}
