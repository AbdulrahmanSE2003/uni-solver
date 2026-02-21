import DynamicButton from "../DynamicButton";

export default function StartSection() {
  return (
    <section className="bg-brand-blue-2 dark:bg-zinc-950 dark:border dark:border-zinc-800 rounded-[40px] mx-12 p-8  flex flex-col justify-center items-center space-y-4">
      <h2 className="text-3xl md:text-5xl text-center font-black text-white relative z-10 leading-tight">
        Ready to Transform Your <br /> Academic Experience?
      </h2>
      <p className="text-gray-400 text-center text-sm md:text-lg max-w-xl mx-auto relative z-10">
        Join thousands of students who are reclaiming their time and improving
        their grades with UniSolver&apos;s ethical AI tools.
      </p>
      <DynamicButton
        href="solve"
        text="Launch Your Dashboard"
        className="my-4"
      />
    </section>
  );
}
