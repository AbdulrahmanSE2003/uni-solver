import type { Metadata } from "next";
import { Inter } from "next/font/google"; // غيرنا الفونت لـ Inter عشان احترافي أكتر
import "./globals.css";
import SolveCtxProvider from "@/app/_context/SolveCTX";

// إعداد الفونت
const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

// تظبيط الـ Metadata بشكل جذاب
export const metadata: Metadata = {
    title: "UniSolved | Your AI Academic Assistant",
    description: "Upload your university assignments and get instant, accurate solutions powered by Google Gemini AI. Solving PDFs has never been easier.",
    keywords: ["AI Assignment Solver", "Gemini AI", "University Help", "PDF Solver"],
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
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        <SolveCtxProvider>
            {children}
        </SolveCtxProvider>
        </body>
        </html>
    );
}