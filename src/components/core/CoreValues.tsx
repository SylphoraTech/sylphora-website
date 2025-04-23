import React from "react";

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

const CoreValues: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto text-left">
      {coreValues.map((value, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg bg-gray-800 shadow-lg ${
            index === coreValues.length - 1 ? "mb-20" : ""
          }`}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            {value.title}
          </h3>
          <p className="text-gray-300">{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
