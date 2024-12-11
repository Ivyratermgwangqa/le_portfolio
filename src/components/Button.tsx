// src/components/Button.tsx
"use client"; // Explicitly mark this as a Client Component

import React from "react";


interface ButtonProps {

  text: React.ReactNode;

  variant: string;

  size: string;

  className?: string;

  onClick?: () => void;

}


const Button: React.FC<ButtonProps> = ({ text, variant, size, className, onClick }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded";
  const variantStyle = variant === "outline" ? "border border-gray-300 text-gray-700" : "bg-blue-500 text-white";
  const sizeStyle = size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2 text-sm";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
