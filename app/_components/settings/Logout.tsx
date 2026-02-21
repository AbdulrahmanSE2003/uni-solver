"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut({ callbackUrl: "/" });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 p-6">
      <h2 className="text-lg font-medium text-red-600 dark:text-red-400 mb-1">
        Danger Zone
      </h2>
      <p className="text-sm text-red-500/80 mb-4">
        Once you log out, you will need to sign in again to access your
        projects.
      </p>

      <button
        onClick={handleSignOut}
        disabled={loading}
        className={`flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer text-sm font-medium transition-all shadow-sm shadow-red-500/20 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <LogOut size={16} className={loading ? "animate-pulse" : ""} />
        {loading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};

export default Logout;
