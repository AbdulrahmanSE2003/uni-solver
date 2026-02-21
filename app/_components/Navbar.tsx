"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react"; // ضيفنا Menu و X
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "home", to: "/" },
  { label: "dashboard", to: "/solve" },
  { label: "settings", to: "/settings" },
];

const Navbar = ({ children }: { children?: ReactNode }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // حالة القائمة في الموبايل

  return (
    <header className="w-[95%] mx-auto mt-2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative bg-brand-bg/80 backdrop-blur-xl border border-white/20 dark:border-zinc-800 shadow-2xl rounded-full p-2 px-4 md:px-6 flex justify-between items-center gap-2"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-brand-blue rounded-full p-2 shadow-blue-500/20 shadow-lg">
            <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className="font-bold text-sm md:text-base hidden sm:block tracking-tighter">
            UniSolver
          </span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-900/50 p-0.5 px-0 rounded-full border border-zinc-200/50 dark:border-zinc-800">
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className={`px-4 py-1.5 rounded-full text-xs lg:text-sm capitalize transition-all relative ${
                    isActive
                      ? "text-brand-blue font-bold"
                      : "text-slate-500 hover:text-brand-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm -z-10"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions (Theme & Mobile Toggle) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {children}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute w-[95%] top-18 left-1/2 -translate-x-1/2 right-0 bg-brand-bg/95 backdrop-blur-2xl border border-white/20 dark:border-zinc-800 rounded-3xl p-4 shadow-3xl md:hidden flex flex-col gap-2"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className={`p-4 rounded-2xl text-center capitalize font-medium ${
                  pathname === link.to
                    ? "bg-brand-blue text-white"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
