"use client";
import { useState } from "react";
import {
  Key,
  MousePointerClick,
  Settings,
  ExternalLink,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Get Your Key",
    description:
      "Visit Google AI Studio and create a free Gemini API Key. It's the engine that powers UniSolver.",
    icon: <Key className="text-brand-blue" size={32} strokeWidth={1.5} />,
    link: "https://aistudio.google.com/app/apikey",
    linkText: "Open Google AI Studio",
  },
  {
    title: "Open Settings",
    description:
      "Navigate to the settings tab in your dashboard and look for the 'API Configuration' section.",
    icon: <Settings className="text-brand-blue" size={32} strokeWidth={1.5} />,
  },
  {
    title: "Save & Secure",
    description:
      "Paste your key, hit save, and you're ready! We encrypt it locally so it never leaves your browser.",
    icon: (
      <MousePointerClick
        className="text-brand-blue"
        size={32}
        strokeWidth={1.5}
      />
    ),
  },
];

const ApiGuideModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const next = () =>
    currentStep < steps.length - 1 && setCurrentStep((s) => s + 1);
  const prev = () => currentStep > 0 && setCurrentStep((s) => s - 1);

  return (
    <div className="fixed inset-0 z-25 flex items-center justify-center p-4">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-md bg-brand-bg border border-zinc-200 dark:border-zinc-800 rounded-[40px] shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-12">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? "w-8 bg-brand-blue" : "w-2 bg-zinc-200 dark:bg-zinc-800"}`}
              />
            ))}
          </div>

          {/* Carousel Body */}
          <div className="relative min-h-70 flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="mb-6 mx-auto bg-brand-blue/15 rounded-[24px] p-6 w-fit">
                  {steps[currentStep].icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-text leading-tight">
                  {steps[currentStep].title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 px-4">
                  {steps[currentStep].description}
                </p>

                {steps[currentStep].link && (
                  <a
                    href={steps[currentStep].link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm bg-brand-blue/10 px-4 py-2 rounded-full hover:bg-brand-blue/20 transition-all"
                  >
                    {steps[currentStep].linkText} <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Footer */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              onClick={prev}
              disabled={currentStep === 0}
              className={`p-3 rounded-2xl border border-zinc-200  dark:border-zinc-800 transition-all ${currentStep === 0 ? "cursor-not-allowed bg-zinc-200/20 pointer-events-none" : "hover:bg-zinc-50 dark:hover:bg-zinc-800"}`}
            >
              <ChevronLeft size={20} />
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={onClose}
                className="flex-1 bg-brand-blue text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/25"
              >
                Got it! <CheckCircle2 size={18} />
              </button>
            ) : (
              <button
                onClick={next}
                className="flex-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Next Step <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApiGuideModal;
