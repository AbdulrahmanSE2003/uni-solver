type InputProps = {
  type?: string;
  placeholder: string;
};

const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-sm"
    />
  );
};

export default Input;
