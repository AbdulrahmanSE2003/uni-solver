"use client";
import InputRows from "./InputRows";
import Uploader from "./Uploader";

type solveDataProps = {
  name?: string;
};

export const SolveData = ({ name = "" }: solveDataProps) => {
  return (
    <section className="bg-white dark:bg-brand-bg rounded-3xl p-8 shadow-sm border border-zinc-300 dark:border-zinc-800 space-y-6">
      {/* Inputs Row */}
      <InputRows name={name} />

      {/* Upload Section */}
      <Uploader />
    </section>
  );
};
