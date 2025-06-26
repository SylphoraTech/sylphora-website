"use client";
import React, { useState } from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/Lamp/LampContainer";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CoreValuesDemo } from "@/components/cards/CoreValuesDemo";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader"; // Ensure path is correct

const loadingStates = [
  { text: "Humi" },
  { text: "Project 440" },
  { text: "AI Control" },
  { text: " Resume builder" },
  { text: "Local Model Launcher" },

];

const stepDuration = 1700; // in milliseconds

const Home: React.FC = () => {
  const words = [{ text: "Our" }, { text: "Core" }, { text: "Values" }];
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleClick = () => {
    setShowLoader(true);
    setLoading(true);

    // Calculate total animation time and auto-exit after it completes
    const totalDuration = loadingStates.length * stepDuration;
    setTimeout(() => {
      setLoading(false);
      setShowLoader(false);
    }, totalDuration);
  };

  return (
    <div className="flex flex-col mt-20 items-center w-full bg-black text-white">
      {/* Header Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-4xl mt-20 md:text-5xl lg:text-7xl font-jakarta font-semibold z-20">
            Welcome To Sylphora
          </h1>
        </motion.div>

        {/* Sparkles animation */}
        
        <SparklesPreview />

        {/* Clickable trigger */}
{!showLoader && (
  <button
    onClick={handleClick}
    className="relative group mt-20 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-lg rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:scale-105 animate-pulse"

  >
    <span className="relative z-10">Sylphora Offers You</span>
    <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-all duration-300 rounded-full" />
  </button>
    )}


        {/* Multi-step loader shows on click */}
        {showLoader && (
          <div className="mt-6">
            <Loader
              loadingStates={loadingStates}
              loading={loading}
              duration={2000}
            />
          </div>
        )}
      </div>

      {/* Typewriter and Core Values Section */}
      <div className="w-full flex flex-col items-center mt-20 justify-center px-4 text-center">
        <TypewriterEffect words={words} />
        <CoreValuesDemo />
      </div>

      {/* Cards Section with Lamp Effect */}
      <LampContainer>
        <section className="min-h-screen w-full max-w-7xl mx-auto px-4 z-50 flex flex-col justify-center items-center text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Academic Research and Product Development
            </h2>
            <p className="mt-2 text-lg text-gray-300">
              Bridging Innovation and Impact Through Research-Driven Solutions.
            </p>
          </div>
          <div className="w-full">
            <CardList />
          </div>
           
        </section>
      </LampContainer>
    </div>
  );
};

export default Home;
