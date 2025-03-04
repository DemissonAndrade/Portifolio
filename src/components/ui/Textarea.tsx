import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string; // Use 'string' em vez de 'String'
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`
          flex min-h-[100px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white 
          placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          disabled:cursor-not-allowed disabled:opacity-50 ${className}
        `}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;