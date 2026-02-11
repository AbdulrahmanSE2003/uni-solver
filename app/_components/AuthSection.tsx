import { auth, signIn } from "@/auth";
import DynamicButton from "./DynamicButton";
import { LogIn } from "lucide-react";
import Image from "next/image";

export default async function AuthSection() {
  const session = await auth();

  if (!session) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <DynamicButton
          type="submit"
          className="p-2 px-4 text-xs"
          aria-label="Sign in with Google"
        >
          <LogIn className="w-4 h-4" />
        </DynamicButton>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src={session.user?.image || "/avatar.png"}
        alt="Profile"
        className="w-8 h-8 rounded-full border border-brand-blue"
      />
    </div>
  );
}
