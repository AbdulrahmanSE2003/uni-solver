import { useState, useEffect } from 'react';
import { FileText, Loader2, Trash2, Upload } from "lucide-react";
import { useSolve } from "@/app/_context/SolveCTX";

const loadingSteps = [
    "Uploading your assignment...",
    "Scanning document structure...",
    "Analyzing questions with AI...",
    "Thinking like a top-tier student...",
    "Formatting the final solution...",
    "Almost there, just a few more seconds..."
];

function Uploader() {
    const { file, setFile, handleSolve, setSolution, loading, solution } = useSolve();
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (loading) {
            setStepIndex(0);
            interval = setInterval(() => {
                setStepIndex((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
            }, 3500);
        }
        return () => clearInterval(interval);
    }, [loading]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setSolution(null);
        }
    };

    return (
        <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
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
                            <button onClick={() => setFile(null)} className="p-2 cursor-pointer hover:bg-red-50 text-red-500 rounded-lg transition-colors">
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

                {/* Loading State الجديد */}
                {loading && (
                    <div className="flex flex-col items-center mt-8 space-y-4">
                        <div className="relative flex items-center justify-center">
                            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-20"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-slate-800 font-bold text-lg animate-pulse transition-all duration-500">
                                {loadingSteps[stepIndex]}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Uploader;