"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
}

export function MagicCard({ children, className }: MagicCardProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden", className)}>
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, #9E7AFF, #FE8BBB, #9E7AFF)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      />

      {/* Card background (padding of 2px inside the border) */}
      <div className="absolute inset-[2px] bg-background rounded-xl z-10" />

      {/* Card content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
