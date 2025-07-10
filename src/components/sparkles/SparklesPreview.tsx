"use client";
import React from "react";
import { SparklesCore } from "@/components/sparkles";

export function SparklesPreview() {
  const [particleDensity, setParticleDensity] = React.useState(2200);
  
  React.useEffect(() => {
    const handleResize = () => {
      setParticleDensity(window.innerWidth < 640 ? 1400 : 2200);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="w-full max-w-7xl h-32 sm:h-40 relative mt-2 sm:mt-4">
      {/* Wide Indigo Line */}
      <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-3xl sm:max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-3xl sm:max-w-5xl h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Wide Sky Line */}
      <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-xl sm:max-w-2xl h-[5px] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
      <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-xl sm:max-w-2xl h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={1}
        particleDensity={particleDensity}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Mask overlay */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
}
