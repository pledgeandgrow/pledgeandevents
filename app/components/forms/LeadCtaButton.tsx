"use client";
import React, { useState } from "react";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";

interface LeadCtaButtonProps {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  text?: string;
}

const LeadCtaButton: React.FC<LeadCtaButtonProps> = ({ 
  onClick, 
  size = "md", 
  variant = "primary",
  text = "Demander un devis"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Size classes
  const sizeClasses = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2.5 px-6 text-base",
    lg: "py-3 px-8 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30 text-white border-transparent",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
    outline: "bg-transparent hover:bg-gray-800/30 text-gray-200 border border-gray-600 hover:border-cyan-400"
  };
  
  return (
    <button
      className={`flex items-center gap-2 ${sizeClasses[size]} ${variantClasses[variant]} rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 font-medium hover:scale-105`}
      onClick={onClick}
      aria-label="Demander un devis ou un contact"
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        {variant === "primary" ? (
          <FaArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
        ) : (
          <FaPaperPlane className={`transition-transform duration-300 ${isHovered ? 'translate-y-[-2px] translate-x-[2px]' : ''}`} />
        )}
      </span>
      <span>{text}</span>
    </button>
  );
};

export default LeadCtaButton;
