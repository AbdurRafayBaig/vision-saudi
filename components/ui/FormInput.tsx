import React from "react";

// 16px on a phone, 14px from sm up. iOS Safari zooms the whole page into any
// field whose text is smaller than 16px the moment it is focused, and does not
// zoom back out — so tapping "Full Name" left the visitor panning around a
// magnified form. Every control here shares this for that reason.
const FIELD_TEXT = "text-base sm:text-sm";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    return (
      <div className="w-full">
        <label htmlFor={inputId} className="block text-xs font-sans font-medium text-[#D8CCB8] mb-2">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full bg-[#101312] border ${
            error ? "border-red-500" : "border-white/15 focus:border-[#10E784]"
          } text-white px-5 py-3.5 ${FIELD_TEXT} focus:outline-none transition-all rounded-2xl placeholder-[#76839A] ${className}`}
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
  ({ label, options, error, id, className = "", ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    return (
      <div className="w-full">
        <label htmlFor={selectId} className="block text-xs font-sans font-medium text-[#D8CCB8] mb-2">
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`w-full bg-[#101312] border ${
            error ? "border-red-500" : "border-white/15 focus:border-[#10E784]"
          } text-white px-5 py-3.5 ${FIELD_TEXT} focus:outline-none transition-all rounded-2xl ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#101312] text-white">
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
  ({ label, error, id, className = "", ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    return (
      <div className="w-full">
        <label htmlFor={textareaId} className="block text-xs font-sans font-medium text-[#D8CCB8] mb-2">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full bg-[#101312] border ${
            error ? "border-red-500" : "border-white/15 focus:border-[#10E784]"
          } text-white px-5 py-3.5 ${FIELD_TEXT} focus:outline-none transition-all rounded-2xl placeholder-[#76839A] ${className}`}
          rows={4}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

