"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "red" | "blue" | "yellow" | "black" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "black",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 0, y: 0 }}
      className={cn(
        // Base styles - Mondrian aesthetic: no rounded corners, bold borders
        "inline-flex items-center justify-center font-black uppercase tracking-wide transition-all border-[3px] border-black",
        // Shadow on hover
        "hover:shadow-[4px_4px_0_0_#000]",
        // Variants - pure Mondrian colors
        {
          "bg-[#FF0000] text-white": variant === "red",
          "bg-[#0000FF] text-white": variant === "blue",
          "bg-[#FFDE00] text-black": variant === "yellow",
          "bg-black text-white": variant === "black",
          "bg-white text-black": variant === "white",
        },
        // Sizes
        {
          "px-4 py-2 text-xs": size === "sm",
          "px-6 py-3 text-sm": size === "md",
          "px-8 py-4 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
