"use client";

import { LogOut, Key, Hash, Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-brand-text">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400">
          Manage your API configurations and account.
        </p>
      </div>

      <div className="grid gap-6">
        {/* API Configuration Card */}
        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Key size={18} className="text-brand-blue" /> API Configuration
          </h2>

          <div className="space-y-4">
            {/* API Key Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                Gemini API Key
              </label>
              <input
                type="password"
                placeholder="Enter your API key"
                className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-sm"
              />
            </div>

            {/* ID Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                Project ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="uni-solver-123"
                  className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-sm"
                />
                <Hash
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={14}
                />
              </div>
            </div>

            <button className="mt-2 flex items-center justify-center gap-2 w-full sm:w-fit px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
              <Save size={16} /> Save Changes
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 p-6">
          <h2 className="text-lg font-medium text-red-600 dark:text-red-400 mb-1">
            Danger Zone
          </h2>
          <p className="text-sm text-red-500/80 mb-4">
            Once you log out, you will need to sign in again to access your
            projects.
          </p>

          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm shadow-red-500/20">
            <LogOut size={16} /> Logout from UniSolver
          </button>
        </div>
      </div>
    </div>
  );
}
