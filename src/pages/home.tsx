"use client";
import React, { useEffect, useState } from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/lamp/LampContainer";
import { StickyScrollRevealDemo } from "@/components/core/StickyScrollRevealDemo";
import { MapPinIcon } from '@heroicons/react/20/solid'; // Location Pin Icon

const Home: React.FC = () => {
  const [companyAddress, setCompanyAddress] = useState<string>("");

  useEffect(() => {
    const fetchCompanyAddress = async () => {
      try {
        // Fetching company address from the public folder
        const response = await fetch("/companyAddress.json");
        if (!response.ok) {
          throw new Error("Failed to fetch company address");
        }

        const data = await response.json();
        setCompanyAddress(data.address);
      } catch (error) {
        console.error("Error fetching company address:", error);
        setCompanyAddress("Failed to load company address.");
      }
    };

    fetchCompanyAddress();
  }, []);

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
            <a href="/about-us" className="hover:underline">About</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms and Conditions</a>
            <a href="/disclaimer" className="hover:underline">Legal Disclaimer</a>
            <a href="/gdpr" className="hover:underline">GDPR-compliance</a>
            <a href="/dmca" className="hover:underline">DMCA</a>
          </div>

          {/* Company Address with Location Icon */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
            <div className="flex items-center space-x-2">
              {/* MapPinIcon as Location Icon */}
              <MapPinIcon className="h-5 w-5 text-white" />
              <p>{companyAddress || "Loading company address..."}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
