import React from "react";

interface CardItemProps {
  title: string;
  description: string[];
}

const CardItem: React.FC<CardItemProps> = ({ title, description }) => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-gray-700">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="mt-4">
        {description.map((point, index) => (
          <li key={index} className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-green-400 mr-2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardItem;
