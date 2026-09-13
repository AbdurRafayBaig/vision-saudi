import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-xs font-sans font-medium text-slate-700 dark:text-[#D8CCB8] mb-2">
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full bg-white dark:bg-[#101312] border ${
            error ? "border-red-500" : "border-slate-200 dark:border-white/15 focus:border-[#10E784]"
          } text-slate-900 dark:text-white px-5 py-3.5 text-sm focus:outline-none transition-all rounded-2xl placeholder-slate-400 dark:placeholder-[#7A7A72] ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-xs font-sans font-medium text-slate-700 dark:text-[#D8CCB8] mb-2">
          {label}
        </label>
        <select
          ref={ref}
          className={`w-full bg-white dark:bg-[#101312] border ${
            error ? "border-red-500" : "border-slate-200 dark:border-white/15 focus:border-[#10E784]"
          } text-slate-900 dark:text-white px-5 py-3.5 text-sm focus:outline-none transition-all rounded-2xl ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#101312] text-slate-900 dark:text-white">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block text-xs font-sans font-medium text-slate-700 dark:text-[#D8CCB8] mb-2">
          {label}
        </label>
        <textarea
          ref={ref}
          className={`w-full bg-white dark:bg-[#101312] border ${
            error ? "border-red-500" : "border-slate-200 dark:border-white/15 focus:border-[#10E784]"
          } text-slate-900 dark:text-white px-5 py-3.5 text-sm focus:outline-none transition-all rounded-2xl placeholder-slate-400 dark:placeholder-[#7A7A72] ${className}`}
          rows={4}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

