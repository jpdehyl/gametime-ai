"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center font-medium transition-all rounded-lg",
        // Variants
        {
          "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-border": variant === "secondary",
        },
        // Sizes
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
