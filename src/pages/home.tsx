
"use client";
import React from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/Lamp/LampContainer";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CoreValuesDemo } from "@/components/cards/CoreValuesDemo";

const Home: React.FC = () => {
  const words = [{ text: "Our" }, { text: "Core" }, { text: "Values" }];

  return (
    <div className="flex flex-col items-center w-full bg-black text-white">
      {/* Header Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-semibold z-20"
        >
          Welcome To Sylphora
        </motion.h1>
        <SparklesPreview />
      </div>

      {/* Typewriter and Core Values Section */}
      <div className="w-full flex flex-col items-center justify-center px-4 text-center">
        <TypewriterEffect words={words} />
        <CoreValuesDemo />
      </div>

      {/* Cards Section with Lamp Effect */}
      <LampContainer>
        <section className="min-h-screen w-full max-w-7xl px-4 z-50 relative flex flex-col justify-center items-center text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Academic Research and Product Development
            </h2>
            <p className="mt-2 text-lg text-gray-300 max-w-3xl">
              Bridging Innovation and Impact Through Research-Driven Solutions.
            </p>
          </div>
          <CardList />
        </section>
      </LampContainer>
    </div>
  );
};

export default Home;
