"use client";
import React, { useState } from "react";
import { SparklesPreview } from "@/components/sparkles/SparklesPreview";
import CardList from "@/components/cards/CardList";
import { motion } from "framer-motion";
import LampContainer from "@/components/ui/Lamp/LampContainer";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CoreValuesDemo } from "@/components/cards/CoreValuesDemo";


const loadingStates = [
   { text: "Humi", link: "" },                
  { text: "Project 440", link: "" },
  { text: "AI Control", link: "" },
  { text: "Resume builder", link: "" },
  { text: "Local Model Launcher", link: "" },
];



const Home: React.FC = () => {
  const words = [{ text: "Our" }, { text: "Core" }, { text: "Values" }];
  const [showOffers, setShowOffers] = useState(false);

const handleClick = () => {
  setShowOffers(true); // Show buttons directly on click
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

        
{/* Always show this main button */}
<button
  onClick={handleClick}
  className="relative group mt-20 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-lg rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:scale-105 animate-pulse"
>
  <span className="relative z-10">Explore Our Products</span>
  <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-all duration-300 rounded-full" />
</button>

{/* Show offer buttons after click */}
{showOffers && (
  <div className="mt-10 flex flex-row flex-wrap gap-4 justify-center">
    {loadingStates.map((item, index) => (
      <button
        key={index}
        type="button"
         onClick={() => {
          if (item.link) {
            window.open(item.link, "_blank");
          } else {
            console.log(`${item.text} clicked`);
          }
        }}
        className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
      >
        {item.text}
      </button>
    ))}
  </div>
)}




      </div> {/* <-- This closes the header section div */}

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
