import React from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-button transition-all inline-flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
    outline: "border border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600 bg-white",
    ghost: "text-slate-600 hover:text-orange-600 hover:bg-orange-50"
  };
  return <button className={cn(baseStyle, variants[variant], className)} {...props}>{children}</button>;
};

export default Button;
