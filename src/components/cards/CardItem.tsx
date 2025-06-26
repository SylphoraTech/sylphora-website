import React from "react";

interface CardItemProps {
  title: string;
  description: string[];
}

const CardItem: React.FC<CardItemProps> = ({ title, description }) => {
  return (
    <div className="p-6 text-left">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
        {description.map((point, index) => (
          <li key={index} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardItem;
