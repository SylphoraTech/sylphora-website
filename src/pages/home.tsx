"use client";
import React from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/lamp/LampContainer";
import { StickyScrollRevealDemo } from "@/components/core/StickyScrollRevealDemo";
import { MapPinIcon } from '@heroicons/react/20/solid'; // Import MapPinIcon

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

      {/* Core Values Section - Sticky Scroll Reveal */}
      <section className="w-full max-w-6xl px-4 z-50 relative py-12">
        <h2 className="text-3xl font-bold underline decoration-4 underline-offset-4 text-left mb-6">
          Our Core Values
        </h2>
        <StickyScrollRevealDemo />
      </section>

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

      {/* Quick Links and Company Address */}
      <div className="w-full max-w-7xl px-4 pt-10 pb-4 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-12">

         {/* Quick Links */}
<div className="flex flex-col space-y-2">
  <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
    <a href="/about-us" className="hover:underline">About</a>
    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
    <a href="/terms" className="hover:underline">Terms and Conditions</a>
    <a href="/disclaimer" className="hover:underline">Legal Disclaimer</a>
    <a href="/gdpr" className="hover:underline">GDPR-compliance</a>
    <a href="/dmca" className="hover:underline">DMCA</a>
  </div>
</div>


          {/* Company Address with Location Icon */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold text-white mb-2">Company</h2>
            <div className="flex items-center space-x-2">
             
              <p>
                #204 Sapphire Chambers,<br />
                First Floor, Desk #167,<br />
                Baner Road, Baner,<br />
                Pune 411045
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
