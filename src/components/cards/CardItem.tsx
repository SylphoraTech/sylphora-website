import React from "react";

interface CardItemProps {
  title: string;
  description: string[];
}

const CardItem: React.FC<CardItemProps> = ({ title, description }) => {
  return (
    <div className="p-4 sm:p-6 text-left">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{title}</h3>
      <ul className="list-disc pl-4 sm:pl-5 ml-0 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">

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