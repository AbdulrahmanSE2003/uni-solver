import { Sparkles } from "lucide-react";

function Mockup() {
  return (
    <section className="p-5 py-20 max-w-5xl mx-auto">
      <div className="group relative bg-brand-bg backdrop-blur-sm rounded-[2.5rem] w-full shadow-2xl shadow-brand-blue/15 p-8 border border-white dark:border-zinc-800">
        {/* Decorative Light effect */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full -z-10"></div>

        <div className="code-analysis space-y-6">
          <div className="code-header flex gap-6 items-center">
            {/* Windows Circles */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>

            {/* Skeleton Header */}
            <div className="w-48 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
          </div>

          {/* Separator - thinner and cleaner */}
          <div className="h-px w-full bg-zinc-100  dark:bg-zinc-700"></div>

          <div className="code-body space-y-5">
            {/* Text Skeletons with different widths and delays */}
            <div className="space-y-3">
              <div
                className="w-3/4 animate-pulse h-4 bg-zinc-200  dark:bg-zinc-800 rounded-full"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-1/3 animate-pulse h-4 bg-zinc-200  dark:bg-zinc-800 rounded-full"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-4/6 animate-pulse h-4 bg-zinc-200  dark:bg-zinc-800 rounded-full"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-8/9 animate-pulse h-4 bg-zinc-200  dark:bg-zinc-800 rounded-full"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>

            {/* AI Analysis Zone - More Interactive */}
            <div className="relative overflow-hidden border-2 border-dashed border-brand-blue/20 rounded-4xl p-16 w-full flex flex-col justify-center items-center bg-linear-to-b from-brand-blue/5 to-transparent">
              <div className="relative flex flex-col items-center gap-3">
                <div className="p-3 bg-brand-blue rounded-2xl shadow-lg shadow-brand-blue/40">
                  <Sparkles className="w-6 h-6 text-white animate-spin-slow" />
                </div>
                <span className="capitalize font-bold text-brand-blue tracking-tight">
                  AI Analysis In Progress...
                </span>
                <p className="text-[10px] text-brand-blue/60 font-medium animate-pulse">
                  Scanning PDF for questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mockup;
