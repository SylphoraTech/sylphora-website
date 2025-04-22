// src/components/ui/lamp/LampContainer.tsx
import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

type LampContainerProps = {
  children: ReactNode;
};

export function LampContainer({ children }: LampContainerProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black"
      )}
    >
      <div className="relative z-10 w-full max-w-7xl px-5">{children}</div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 transform rounded-full bg-sky-500/10 blur-[120px] w-[500px] h-[500px]" />
      </div>
    </div>
  );
}
