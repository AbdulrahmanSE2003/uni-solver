"use client";

import { ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { useSolve } from "@/app/_context/SolveCTX";
import { toast } from "sonner";

const Result = () => {
  const { solution } = useSolve();

  const downloadDocx = async () => {
    if (!solution) return;

    const lines = solution
      .split("\n")
      .filter(
        (line) =>
          !line.toLowerCase().includes("as an academic tutor") &&
          !line.toLowerCase().includes("here are the solutions"),
      );

    const doc = new Document({
      sections: [
        {
          children: lines.map((line) => {
            const isHeading = line.startsWith("#");
            const cleanLine = line.replace(/[#*]/g, "").trim();
            if (!cleanLine) return new Paragraph({ text: "" });

            return new Paragraph({
              children: [
                new TextRun({
                  text: cleanLine,
                  bold: isHeading,
                  size: isHeading ? 30 : 24,
                  font: "Calibri",
                }),
              ],
              spacing: { line: 380, before: 150, after: 150 },
            });
          }),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "UniSolver_Solution.docx");
  };

  if (!solution) return null;

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-6 bg-slate-900 rounded-3xl shadow-2xl p-6 border border-slate-800 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Status Info */}
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-500/20 rounded-2xl border border-green-500/30">
            <CheckCircle2 className="text-green-400 w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Solution Generated!</h2>
            <p className="text-slate-400 text-sm">
              Your file is ready to be exported.
            </p>
          </div>
        </div>

        {/* Actions Group */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Google Docs */}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/document/u/0/?showSpecs=true",
                "_blank",
              )
            }
            className="flex-1 md:flex-none cursor-pointer inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 rounded-2xl transition-all font-medium border border-slate-700 text-sm"
          >
            <ExternalLink className="w-4 h-4 text-blue-400" />
            Google Docs
          </button>

          {/* DOCX Download */}
          <button
            onClick={downloadDocx}
            className="flex-1 md:flex-none cursor-pointer inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all font-medium shadow-lg shadow-blue-900/20 text-sm"
          >
            <FileText className="w-4 h-4" />
            Download DOCX
          </button>
        </div>
      </div>

      {/* نوت بسيطة لو عايز يتأكد من حاجة */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex justify-center">
        <button
          onClick={() => toast.warning("Preview functionality coming soon!")}
          className="text-xs text-slate-500 cursor-pointer hover:text-slate-300 transition-colors underline underline-offset-4"
        >
          Show Quick Preview
        </button>
      </div>
    </motion.section>
  );
};

export default Result;
