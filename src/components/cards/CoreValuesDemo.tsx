"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    title: "Innovation Excellence",
    description:
      "Pioneering cutting-edge solutions through AI-driven automation, advanced blockchain security, and enterprise-grade SaaS platforms to transform business operations.",
    icon: "💡",
  },
  {
    title: "Trust & Integrity",
    description:
      "Upholding the highest standards of ethical technology development with unwavering commitment to security, transparency, and responsible innovation.",
    icon: "🛡️",
  },
  {
    title: "Client Success",
    description:
      "Delivering tailored enterprise solutions that drive operational excellence, maximize efficiency, and accelerate sustainable business growth.",
    icon: "⭐",
  },
  {
    title: "Collaborative Innovation",
    description:
      "Fostering synergistic partnerships between expert developers, engineers, and innovators to create transformative technological solutions.",
    icon: "🤝",
  },
  {
    title: "Sustainable Impact",
    description:
      "Architecting energy-efficient, scalable solutions that prioritize environmental responsibility while ensuring long-term business sustainability.",
    icon: "🌱",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function CoreValuesDemo() {
  return (
    <div className="py-12 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {coreValues.map((value) => (
          <motion.div
            key={value.title}
            variants={item}
            className={cn(
              "relative overflow-hidden rounded-2xl p-8 h-full group",
              "bg-gradient-to-br from-gray-900 to-black border border-gray-800",
              "transition-all duration-300 shadow-md hover:shadow-glow"
            )}
          >
            {/* Light shimmer effect */}
            <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full before:animate-shimmer rounded-2xl" />

            {/* Content */}
            <div className="relative z-10">
              <span className="text-3xl mb-6 block transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </span>
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
