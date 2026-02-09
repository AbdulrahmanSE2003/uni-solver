import { auth, signIn, signOut } from "@/auth";
import DynamicButton from "./DynamicButton";
import { LogIn, LogOut } from "lucide-react";

export default async function AuthSection() {
    const session = await auth();

    if (!session) {
        return (
            <form action={async () => { "use server"; await signIn("google"); }}>
                <DynamicButton type="submit" className="p-2 px-4 text-xs">
                    <LogIn className="w-4 h-4" />
                </DynamicButton>
            </form>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <img
                src={session.user?.image || ""}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-brand-blue"
            />
        </div>
    );
}