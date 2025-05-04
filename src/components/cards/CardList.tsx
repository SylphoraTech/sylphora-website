import React from "react";
import CardItem from "./CardItem";
import { motion } from "framer-motion";

const CardList: React.FC = () => {
  const cards = [
    {
      title: "Focus Areas",
      description: [
        "Artificial Intelligence (AI)",
        "Data Science",
        "Software Development",
        "Emerging IT Solutions",
      ],
    },
    {
      title: "Objective",
      description: [
        "Bridge the gap between academic research and industry applications.",
        "Provide technical expertise to support research-driven projects.",
        "Facilitate software development aligned with market needs.",
        "Deliver valuable market insights to enhance research impact.",
      ],
    },
    {
      title: "Benefits",
      description: [
        "Transform research ideas into market-ready products.",
        "Enhance commercialization of academic research.",
        "Strengthen the university's role in applied technological advancements.",
      ],
    },
    {
      title: "Partnership Opportunities",
      description: [
        "Open to collaboration with academic institutions.",
        "Explore joint development opportunities with researchers.",
        "Ensure innovation thrives in both academia and industry.",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto px-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="h-full"
          >
            <CardItem title={card.title} description={card.description} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardList;