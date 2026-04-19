"use client";

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold transition-colors duration-300",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === 'primary' && "bg-white text-royal border-2 border-royal hover:bg-royal hover:text-white shadow-sm focus:ring-royal",
        variant === 'secondary' && "bg-royal text-white border-2 border-royal hover:bg-royal-dark hover:border-royal-dark focus:ring-royal shadow-sm",
        variant === 'outline' && "border-2 border-gold text-gold hover:bg-gold hover:text-white focus:ring-gold",
        className
      )}
      {...props}
    />
  );
}
