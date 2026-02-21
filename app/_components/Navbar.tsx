"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "home", to: "/" },
  { label: "dashboard", to: "/solve" },
  { label: "settings", to: "/settings" },
];

type navbarProps = {
  children: ReactNode;
};

const Navbar = ({ children }: navbarProps) => {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      className="fixed top-6 left-1/2 h-14 min-w-100 bg-brand-bg backdrop-blur-md border border-white dark:border-zinc-700 shadow-2xl shadow-brand-blue/10 text-brand-text rounded-full p-2 px-6 flex justify-between items-center gap-8 z-50"
    >
      {/* Logo */}
      <div className="flex justify-center items-center gap-2">
        <div className="bg-brand-blue rounded-lg shadow-lg p-2">
          <Sparkles className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-sm tracking-tight text-brand-text">
          UniSolver
        </span>
      </div>

      {/* Links */}
      <ul className="flex justify-center items-center grow font-medium gap-1">
        {links.map((link, i) => {
          const isActive = pathname === link.to;

          return (
            <li key={i}>
              <Link
                href={link.to}
                className={`relative px-4 py-1.5 rounded-full text-sm capitalize transition-all duration-300 ${
                  isActive
                    ? "text-brand-blue font-bold"
                    : "text-slate-500 hover:text-brand-blue opacity-80 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Theme Toggle */}
      <ThemeToggle />

      <div>{children}</div>
    </motion.nav>
  );
};

export default Navbar;
