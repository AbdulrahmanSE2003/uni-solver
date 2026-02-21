"use client";
import { Key, MousePointerClick, Settings, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Get Your Key",
    description: "Visit Google AI Studio and create a free Gemini API Key.",
    icon: <Key className="text-brand-blue" size={24} />,
    link: "https://aistudio.google.com/app/apikey",
    linkText: "Get API Key",
  },
  {
    title: "Open Settings",
    description:
      "Go to UniSolver settings and find the API Configuration section.",
    icon: <Settings className="text-brand-blue" size={24} />,
  },
  {
    title: "Save & Secure",
    description:
      "Paste your key, hit save, and we'll encrypt it locally for you.",
    icon: <MousePointerClick className="text-brand-blue" size={24} />,
  },
];

const SetupGuide = () => {
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
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl shadow-brand-blue/5"
          >
            {/* Step Number */}
            <span className="absolute -top-4 -left-4 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </span>

            <div className="mb-6 bg-brand-blue/10 dark:bg-brand-blue/20 w-fit p-4 rounded-2xl">
              {step.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-brand-text">
              {step.title}
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              {step.description}
            </p>

            {step.link && (
              <a
                href={step.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:underline"
              >
                {step.linkText} <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Security Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center"
      >
        <p className="text-xs text-slate-500 dark:text-zinc-400">
          🔒 <strong>Privacy Note:</strong> Your API key is encrypted and stored{" "}
          <b>only</b> on your browser. We never see it or store it on our
          servers.
        </p>
      </motion.div>
    </section>
  );
};

export default SetupGuide;
