"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const coreValues = [
  {
    title: "🌟 Innovation & Excellence",
    description:
      "We push boundaries with AI-driven automation, blockchain security, and SaaS-based solutions, ensuring businesses stay ahead in the digital era.",
  },
  {
    title: "🤝 Integrity & Transparency",
    description:
      "Ethical and responsible tech development is at our core. We ensure trust, security, and transparency in everything we build—whether it’s a blockchain ledger or a cloud application.",
  },
  {
    title: "👥 Customer-Centric Approach",
    description:
      "Our priority is to understand, adapt, and deliver tailored solutions that maximize efficiency, productivity, and business growth.",
  },
  {
    title: "🚀 Collaboration & Teamwork",
    description:
      "We foster a culture where developers, engineers, and innovators work together to create groundbreaking solutions in AI, SaaS, and blockchain technology.",
  },
  {
    title: "🌍 Sustainability & Responsibility",
    description:
      "We design solutions that are energy-efficient, scalable, and environmentally responsible, ensuring long-term sustainable growth.",
  },
];

export function CoreValuesDemo() {
  return (
    <div className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {coreValues.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center w-full aspect-square"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{value.title}</h3>
          <p className="text-sm md:text-base text-gray-300">{value.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
