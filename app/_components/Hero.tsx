import { ArrowRight, BadgeCheckIcon } from "lucide-react";
import DynamicButton from "./DynamicButton";

const Hero = () => {
  return (
    <section className="flex flex-col bg-brand-bg justify-start items-center p-5  space-y-8 max-w-5xl mx-auto">
      {/* Proof */}
      <div className="bg-brand-blue/10 rounded-full py-2 px-5 border border-brand-blue/50 flex justify-center items-center gap-2">
        <BadgeCheckIcon fill="#155dfc" stroke="#efefef" />
        <span className="uppercase text-sm text-brand-blue font-bold">
          your trusted AI in your career{" "}
        </span>
      </div>

      {/* Intro */}

      <h1 className="font-black text-5xl md:text-7xl capitalize leading-snug text-center text-brand-blue">
        <span className="text-brand-text">Ace Your Assignments </span> <br />
        <span className="bg-linear-to-r from-brand-blue to-brand-blue/20 bg-clip-text text-transparent">
          with Human-AI
        </span>
      </h1>

      {/* Text */}
      <p className="w-3/5 text-center font-medium text-zinc-600">
        The ultimate companion for students. Generate, edit, and export academic
        work with human-like precision. Stay ahead of the curve with UniSolver.
      </p>

      {/* CTA */}
      <DynamicButton href="solve" text="Get Started Free">
        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
      </DynamicButton>
    </section>
  );
};

export default Hero;
