"use client";
import React from "react";

const LampContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-20">
      {/* Lamp Effect Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-lampStart to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default LampContainer;
