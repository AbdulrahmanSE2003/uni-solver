"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react"; // pnpm add lucide-react

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const options = [
    { value: "light", icon: <Sun size={12} /> },
    { value: "dark", icon: <Moon size={12} /> },
    { value: "system", icon: <Monitor size={12} /> },
  ];

  return (
    <div className="flex items-center rounded-xl border border-zinc-300 dark:border-zinc-800 bg-brand-bg dark:bg-zinc-900/50 w-fit">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`p-1.5 rounded-xl transition-all ${
            theme === opt.value
              ? "bg-white dark:bg-zinc-800 text-brand-blue shadow-sm border border-gray-200 dark:border-zinc-700"
              : "text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-300"
          }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
