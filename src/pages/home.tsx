"use client";
import React from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import CoreValues from "@/components/core/CoreValues";
import LampContainer from "@/components/ui/lamp/LampContainer";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full bg-black text-white">
      {/* Header Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-4xl md:text-5xl lg:text-7xl font-semibold z-20"
        >
          Welcome To Sylphora
        </motion.h1>
        <SparklesPreview />
      </div>

      {/* Core Values Section */}
      <section className="min-h-screen w-full max-w-6xl px-4 z-50 relative flex justify-end items-start text-left space-y-7 py-1">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl font-bold underline decoration-4 underline-offset-4 mt-12 mb-6">
            Our Core Values
          </h2>
          <CoreValues />
        </div>
      </section>

      {/* Spacer */}
      <div className="h-32" />

      {/* Cards Section with Lamp Effect */}
      <LampContainer>
        <section className="min-h-screen w-full max-w-7xl px-4 z-50 relative flex flex-col items-center text-center space-y-8">
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

      {/* Vertical Links Section */}
      <div className="w-full max-w-7xl flex justify-start px-4 mt-12">
        <div className="flex flex-col space-y-4 text-left">
        <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
          <Link to="/about-us" className="text-blue-400 hover:underline">
            About
          </Link>
          <Link to="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-blue-400 hover:underline">
            Terms and Conditions
          </Link>
          <Link to="/disclaimer" className="text-blue-400 hover:underline">
            Legal Disclaimer
          </Link>
          <Link to="/gdpr" className="text-blue-400 hover:underline">
            GDPR-compliance
          </Link>
          <Link to="/dmca" className="text-blue-400 hover:underline">
            DMCA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
