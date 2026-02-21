type InputProps = {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type = "text", value, onChange, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      value={value || ""}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-sm"
    />
  );
};

export default Input;
