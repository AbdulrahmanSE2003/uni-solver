import { LogOut } from "lucide-react";

const Logout = () => {
  return (
    <div className="rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 p-6">
      <h2 className="text-lg font-medium text-red-600 dark:text-red-400 mb-1">
        Danger Zone
      </h2>
      <p className="text-sm text-red-500/80 mb-4">
        Once you log out, you will need to sign in again to access your
        projects.
      </p>

      <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer text-sm font-medium transition-colors shadow-sm shadow-red-500/20">
        <LogOut size={16} /> Logout from UniSolver
      </button>
    </div>
  );
};

export default Logout;
