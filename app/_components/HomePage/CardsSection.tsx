"use client";
import { Edit, File, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <Edit stroke="#155dff" />,
    heading: "AI Human-like Writing",
    paragraph:
      "Our advanced engine generates natural phrasing that bypasses basic detection while maintaining your unique academic voice.",
  },
  {
    icon: <File stroke="#155dff" />,
    heading: "Direct DOCX Export",
    paragraph:
      "Convert your AI-assisted work into professionally formatted Word documents ready for immediate submission to your portal.",
  },
  {
    icon: <ShieldCheckIcon stroke="#155dff" />,
    heading: "Privacy First",
    paragraph:
      "End-to-end encryption for every project. Your data is never shared with third parties or used for training external models.",
  },
];

const CardsSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-brand-text mb-4">
          How to Setup Your <span className="text-brand-blue">API Key</span>
        </h2>
        <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Follow these simple steps to power up UniSolver with your own Gemini
          engine. It&apos;s free, secure, and takes less than a minute.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl shadow-brand-blue/5"
          >
            <div className="mb-6 bg-brand-blue/10 dark:bg-brand-blue/20 w-fit p-4 rounded-2xl">
              {card.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-brand-text">
              {card.heading}
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              {card.paragraph}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
