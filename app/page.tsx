"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Download, Loader2, Sparkles, Trash2 } from "lucide-react";
import jsPDF from "jspdf";
import Header from "@/app/_components/Header";

export default function UniSolved() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [solution, setSolution] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setSolution(null);
        }
    };

    const handleSolve = async () => {
        if (!file) return;
        setLoading(true);
        setSolution(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/solve", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (data.solution) {
                setSolution(data.solution);
            } else {
                alert(data.error || "Something went wrong!");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    const downloadPDF = () => {
        if (!solution) return;
        const doc = new jsPDF();
        const splitText = doc.splitTextToSize(solution, 180);
        doc.setFontSize(16);
        doc.text("UniSolved - Assignment Solution", 15, 20);
        doc.setFontSize(12);
        doc.text(splitText, 15, 30);
        doc.save("Solution.pdf");
    };

    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <Header/>

                {/* Upload Section */}

                {/* Results Section */}
                <AnimatePresence>
                    {solution && (
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <Sparkles className="text-green-600 w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">AI Solution</h2>
                                </div>
                                <button
                                    onClick={downloadPDF}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all font-medium"
                                >
                                    <Download className="w-4 h-4" /> Download Result
                                </button>
                            </div>

                            <div className="prose prose-slate max-w-none">
                                <div className="text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                                    {solution}
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}