// File: components/ui/Lamp/LampContainer.tsx
"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type LampContainerProps = {
  children: React.ReactNode;
  className?: string;
  lampColor?: string;
};

const LampContainer = ({
  children,
  className,
  lampColor = "#22d3ee",
}: LampContainerProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-xl p-6",
        className
      )}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0.4, scale: 0.8 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle at center, ${lampColor}, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default LampContainer;
