"use client";
import { useEffect } from "react";
import { useSolve } from "../../_context/SolveCTX";

type InputRowsProps = {
  name: string;
};

const InputRows = ({ name }: InputRowsProps) => {
  const { student, setStudent, id, setId } = useSolve();
  useEffect(() => {
    setStudent(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2 text-brand-text">
        <label className="text-sm font-bold text-slate-700 dark:text-zinc-200 ml-2">
          Student Name
        </label>
        <input
          type="text"
          placeholder="Ahmed Ali"
          value={student}
          onChange={(e) => setStudent(e.target.value)}
          className="w-full p-4 bg-brand-bg border border-brand-blue/30 rounded-2xl focus:ring-1 focus:ring-brand-blue outline-none transition-all"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 dark:text-zinc-200 ml-2">
          Student ID
        </label>
        <input
          type="text"
          placeholder="2620500"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-4 bg-brand-bg border border-brand-blue/30 rounded-2xl focus:ring-1 focus:ring-brand-blue outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default InputRows;
