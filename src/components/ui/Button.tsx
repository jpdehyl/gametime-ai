"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

type ButtonBaseProps = {
  variant?: "default" | "secondary";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  HTMLMotionProps<"button"> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  HTMLMotionProps<"a"> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    as: Tag = "button",
    variant = "default",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
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
  );

  if (Tag === "a") {
    const { as: _, variant: _v, size: _s, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...anchorProps}
      >
        {children}
      </motion.a>
    );
  }

  const { as: _, variant: _v, size: _s, ...buttonProps } = props as ButtonAsButton;
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
