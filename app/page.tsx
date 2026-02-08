"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Download, Loader2, Sparkles, Trash2 } from "lucide-react";
import jsPDF from "jspdf";

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
                <header className="text-center mb-12">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-200"
                    >
                        <Sparkles className="text-white w-8 h-8" />
                    </motion.div>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Uni<span className="text-blue-600">Solved</span>
                    </h1>
                    <p className="text-slate-500 mt-2 text-lg">Upload your PDF and let AI handle the rest.</p>
                </header>

                {/* Upload Section */}
                <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12">
                        {!file ? (
                            <label className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-12 h-12 text-slate-400 group-hover:text-blue-500 transition-colors mb-4" />
                                    <p className="mb-2 text-sm text-slate-700 font-semibold">Click to upload or drag and drop</p>
                                    <p className="text-xs text-slate-500">Assignment PDF (Max 10MB)</p>
                                </div>
                                <input type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                            </label>
                        ) : (
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl w-full border border-slate-200">
                                    <FileText className="text-blue-600 w-8 h-8" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="font-medium text-slate-900 truncate">{file.name}</p>
                                        <p className="text-sm text-slate-500">{(file.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                    <button onClick={() => setFile(null)} className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                {!loading && !solution && (
                                    <button
                                        onClick={handleSolve}
                                        className="mt-8 w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
                                    >
                                        Generate Solution
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Loading State */}
                        {loading && (
                            <div className="flex flex-col items-center mt-8">
                                <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
                                <p className="text-slate-600 animate-pulse font-medium">Analyzing your assignment...</p>
                            </div>
                        )}
                    </div>
                </section>

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