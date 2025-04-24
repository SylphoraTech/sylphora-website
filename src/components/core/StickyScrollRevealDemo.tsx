"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

// Sticky scroll content array
const content = [
  {
    title: "🌟 Innovation & Excellence",
    description:
      "We push boundaries with AI-driven automation, blockchain security, and SaaS-based solutions, ensuring businesses stay ahead in the digital era.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-medium p-8 text-center">
        🌟 Innovation & Excellence
      </div>
    ),
  },
  {
    title: "🤝 Integrity & Transparency",
    description:
      "Ethical and responsible tech development is at our core. We ensure trust, security, and transparency in everything we build—whether it’s a blockchain ledger or a cloud application.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 text-white text-lg font-medium p-8 text-center">
        🤝 Integrity & Transparency
      </div>
    ),
  },
  {
    title: "👥 Customer-Centric Approach",
    description:
      "Our priority is to understand, adapt, and deliver tailored solutions that maximize efficiency, productivity, and business growth.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-400 text-white text-lg font-medium p-8 text-center">
        👥 Customer-Centric Approach
      </div>
    ),
  },
  {
    title: "🚀 Collaboration & Teamwork",
    description:
      "We foster a culture where developers, engineers, and innovators work together to create groundbreaking solutions in AI, SaaS, and blockchain technology.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pink-500 to-red-500 text-white text-lg font-medium p-8 text-center">
        🚀 Collaboration & Teamwork
      </div>
    ),
  },
  {
    title: "🌍 Sustainability & Responsibility",
    description:
      "We design solutions that are energy-efficient, scalable, and environmentally responsible, ensuring long-term sustainable growth.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-lime-500 text-white text-lg font-medium p-8 text-center">
        🌍 Sustainability & Responsibility
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-5 overflow-y-auto pb-20"> {/* Allow scrolling and extra space */}
      <StickyScroll content={content} />
    </div>
  );
}
