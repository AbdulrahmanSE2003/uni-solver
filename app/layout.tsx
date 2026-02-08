import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SolveCtxProvider from "@/app/_context/SolveCTX";
import Navbar from "@/app/_components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "UniSolved | Your AI Academic Assistant",
    description: "Upload your university assignments and get instant, accurate solutions powered by Google Gemini AI. Solving PDFs has never been easier.",
    keywords: ["AI Assignment Solver", "Gemini AI", "University Help", "PDF Solver"],
    icons: {
        icon: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <SolveCtxProvider>
                    <Navbar />
                    <main className="min-h-screen bg-brand-bg pt-24 text-brand-text p-4">
                        {children}
                    </main>
                </SolveCtxProvider>
            </body>
        </html>
    );
}