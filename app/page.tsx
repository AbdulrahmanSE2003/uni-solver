
import { auth } from "@/auth";
import CardsSection from "./_components/CardsSection";
import Hero from "./_components/Hero";
import Mockup from "./_components/Mockup";
import StartSection from "./_components/StartSection";
import AuthSection from "./_components/AuthSection";




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