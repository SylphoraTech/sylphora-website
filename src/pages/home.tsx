"use client";
import React from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/lamp/LampContainer";
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

      <div className="w-full max-w-7xl px-4 pt-20 pb-4 text-sm text-gray-300">
  <div className="flex flex-col md:flex-row justify-between items-start w-full gap-12">
  {/* Quick Links */}
<div className="flex flex-col md:flex-row w-full gap-2"> {/* Adjust gap to gap-4 */}
  <div className="flex flex-col space-y-2 w-full md:w-1/2">
    <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
    <a href="/about-us" className="hover:underline">About</a>
    <a href="/disclaimer" className="hover:underline">Legal Disclaimer</a>
    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
    <a href="/terms" className="hover:underline">Terms and Conditions</a>
  </div>
  <div className="flex flex-col space-y-2 w-full md:w-1/2 mt-8 md:mt-0">
    <h3 className="text-lg font-semibold text-transparent mb-2">.</h3> {/* for spacing match */}
    <a href="/gdpr" className="hover:underline">GDPR-compliance</a>
    <a href="/dmca" className="hover:underline">DMCA</a>
    <a href="/contact" className="hover:underline">Contact Us</a>
    <a href="/cookies" className="hover:underline">Cookies</a>
  </div>
</div>




    {/* Address */}
    <div className="flex flex-col items-start w-full md:w-1/4 py-6 px-4 bg-black-800 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
      <div className="flex items-start space-x-4">
        <MapPinIcon className="h-8 w-6 text-white" />
        <p className="text-sm text-gray-300 leading-relaxed">
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
