"use client";

import React from 'react';
import { Download, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type resultProps = {
    sol: string | null
}

const Result = ({ sol }: resultProps) => {

    const downloadDocx = async () => {
        if (!sol) return;

        // تنظيف أي رغي AI لو فلت من البرومبت
        const lines = sol.split('\n').filter(line =>
            !line.toLowerCase().includes("as an academic tutor") &&
            !line.toLowerCase().includes("here are the solutions")
        );

        const doc = new Document({
            sections: [{
                children: lines.map(line => {
                    const isHeading = line.startsWith('#');
                    const cleanLine = line.replace(/[#*]/g, '').trim();
                    if (!cleanLine) return new Paragraph({ text: "" }); // سطر فاضي للمسافات

                    return new Paragraph({
                        children: [
                            new TextRun({
                                text: cleanLine,
                                bold: isHeading,
                                size: isHeading ? 30 : 24,
                                font: "Calibri"
                            }),
                        ],
                        spacing: { line: 380, before: 150, after: 150 },
                    });
                }),
            }],
        });

        const blob = await Packer.toBlob(doc);
        saveAs(blob, "Assignment_Solution.docx");
    };

    if (!sol) return null;

    return (
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
                    <h2 className="text-2xl font-bold text-slate-900">Final Solution</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {/* زرار جوجل دوكس */}
                    <button
                        onClick={() => window.open('https://docs.google.com/document/u/0/?showSpecs=true', '_blank')}
                        className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-all font-medium border border-slate-200 shadow-sm text-sm"
                    >
                        <ExternalLink className="w-4 h-4 text-blue-500" />
                        Open Google Docs
                    </button>

                    {/* زرار التحميل */}
                    <button
                        onClick={downloadDocx}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all font-medium shadow-md shadow-blue-100 text-sm"
                    >
                        <Download className="w-4 h-4" />
                        Download DOCX
                    </button>
                </div>
            </div>

            <div className="prose prose-blue max-w-none text-slate-700 font-medium">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {sol}
                </ReactMarkdown>
            </div>
        </motion.section>
    );
};

export default Result;