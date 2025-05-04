"use client";
import React, { useEffect, useState } from "react";
import { getBrowser } from "@/utils/browserUtils";

const LampContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [browser, setBrowser] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setBrowser(getBrowser());

    return () => setIsMounted(false);
  }, []);

  // Special styling for browsers
  const getGradientStyle = () => {
    // Base styles
    const baseStyle: React.CSSProperties = {
      transform: "translateX(-50%)",
      opacity: 0.3,
    };

    // Cross-browser gradient implementations
    if (browser === "edge" || browser === "ie") {
      return {
        ...baseStyle,
        background: "radial-gradient(circle, #D1D5DB 0%, transparent 70%)",
        filter: "blur(40px)",
      };
    } else if (browser === "safari") {
      return {
        ...baseStyle,
        background: "-webkit-radial-gradient(circle, #D1D5DB 0%, transparent 70%)",
        WebkitFilter: "blur(40px)",
      };
    } else if (browser === "firefox") {
      return {
        ...baseStyle,
        background: "-moz-radial-gradient(circle, #D1D5DB 0%, transparent 70%)",
        filter: "blur(40px)",
      };
    } else {
      // Chrome and others
      return {
        ...baseStyle,
        background: "radial-gradient(circle, #D1D5DB 0%, transparent 70%)",
        filter: "blur(40px)",
      };
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-20">
      {/* Lamp Effect Background with cross-browser compatible gradients */}
      <div
        className="absolute top-0 left-1/2 w-96 h-96 rounded-full pointer-events-none hardware-accelerated"
        style={getGradientStyle()}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default LampContainer;
