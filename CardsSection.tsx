import React from "react";
import CardItem from "./CardItem";

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
        "Strengthen the university’s role in applied technological advancements.",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CardItem
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
