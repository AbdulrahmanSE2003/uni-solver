"use client";

import { EyeIcon, Key, Save } from "lucide-react";
import Input from "../Input";
import { useSolve } from "@/app/_context/SolveCTX";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { encryptData } from "@/lib/encryption";
import { decryptData } from "@/lib/encryption";

const ApiKey = () => {
  const { API_KEY, setAPI_KEY } = useSolve();
  const [showKey, setShowKey] = useState(false);
  const [apiInput, setApiInput] = useState(API_KEY);

  useEffect(() => {
    const savedEncryptedKey = localStorage.getItem("user_gemini_key");
    if (savedEncryptedKey) {
      const originalKey = decryptData(savedEncryptedKey);
      setAPI_KEY(originalKey);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setApiInput(originalKey);
    }
  }, []);

  const handleApiKey = (key: string) => {
    const encrypted = encryptData(key);
    localStorage.setItem("user_gemini_key", encrypted);
    setAPI_KEY(key);
    toast.success("API Key stored securely.");
  };

  return (
    <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
      <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
        <Key size={18} className="text-brand-blue" /> API Configuration
      </h2>

      <div className="space-y-4">
        {/* API Key Field */}
        <div className="space-y-4 relative">
          <label className="text-sm font-medium text-gray-700 dark:text-zinc-300">
            Gemini API Key
          </label>
          <Input
            type={showKey ? "text" : "password"}
            placeholder="Enter your API key..."
            value={apiInput}
            onChange={(e) => setApiInput(e.target.value)}
          />
          <EyeIcon
            onClick={() => setShowKey((prev) => !prev)}
            className={`absolute right-2 bottom-6 size-5 cursor-pointer`}
          />
        </div>
        <button
          onClick={() => handleApiKey(apiInput)}
          className="mt-2 flex items-center justify-center gap-2 w-full sm:w-fit px-4 py-2 cursor-pointer bg-brand-blue hover:bg-blue-800 text-white rounded-md text-sm font-medium transition-colors"
        >
          <Save size={16} /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default ApiKey;
