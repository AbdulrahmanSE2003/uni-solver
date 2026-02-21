import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SolveCtxProvider from "@/app/_context/SolveCTX";
import Navbar from "@/app/_components/Navbar";
import Footer from "./_components/Footer";
import AuthSection from "./_components/AuthSection";
import { ThemeProvider } from "./_components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// All comments and code are in English as requested
export const metadata: Metadata = {
  title: "UniSolver | AI Academic Assignment Solver & PDF Assistant",
  description:
    "Solve university assignments instantly with UniSolver. Upload PDFs and get accurate solutions powered by Google Gemini AI. The ultimate academic helper.",
  keywords: [
    "AI Assignment Solver",
    "Google Gemini AI",
    "University Homework Help",
    "PDF Solution Generator",
    "Academic AI Assistant",
    "Online Study Tool",
  ],
  authors: [{ name: "Abdulrahman" }],
  openGraph: {
    title: "UniSolver | Your AI Academic Assistant",
    description: "Instant solutions for your university assignments using AI.",
    url: "https://uni-solver.vercel.app/", // Replace with your actual domain
    siteName: "UniSolver",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-brand-bg`}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {" "}
          <SolveCtxProvider>
            <Navbar>
              <AuthSection />
            </Navbar>
            <Toaster richColors />
            <main className="min-h-screen py-24 text-brand-text px-0 max-sm:p-5">
              {children}
            </main>
            <Footer />
          </SolveCtxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
