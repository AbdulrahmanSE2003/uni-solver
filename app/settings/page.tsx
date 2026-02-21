import ApiKey from "../_components/settings/ApiKey";
import Logout from "../_components/settings/Logout";

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
        <ApiKey />

        {/* Danger Zone */}
        <Logout />
      </div>
    </div>
  );
}
