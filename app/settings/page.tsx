import React from "react";
import { Settings, Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        {/* Icon Container */}
        <div className="relative inline-block">
          <div className="bg-blue-50 p-6 rounded-2xl">
            <Settings className="w-16 h-16 text-blue-600 rotate-30" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-amber-100 p-2 rounded-lg border-2 border-white">
            <Construction className="w-6 h-6 text-amber-600" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 text-lg font-medium">Coming Soon!</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            We're currently working on that feature. Stay tuned!
          </p>
        </div>

        {/* Progress Bar (Visual Only) */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full w-2/3 rounded-full animate-pulse" />
        </div>

        {/* Back Button */}
        <div className="pt-4">
          <Link
            href="/solve"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Solver
          </Link>
        </div>
      </div>

      {/* Footer Branding */}
      <p className="mt-8 text-slate-400 text-sm font-medium">Uni-Solver v2.0</p>
    </div>
  );
};

export default SettingsPage;
