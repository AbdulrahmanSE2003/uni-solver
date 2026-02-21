import Header from "@/app/_components/Header";
import Result from "@/app/_components/solvePage/Result";
import { auth } from "@/auth";
import { SolveData } from "../_components/solvePage/SolveData";

const Page = async () => {
  const session = await auth();
  const userName = session?.user?.name || "";

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <Header />

      <SolveData name={userName} />

      <Result />
    </div>
  );
};

export default Page;
