import React from "react";
import { motion } from "framer-motion";

interface CardItemProps {
  title: string;
  description: string[];
}

const CardItem: React.FC<CardItemProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-xl shadow-xl border border-gray-800 backdrop-blur-sm
        hover:border-gray-700 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent 
        bg-gradient-to-r from-blue-400 to-purple-400">{title}</h3>
      
      <ul className="space-y-3 relative z-10">
        {description.map((point, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {point}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl 
        group-hover:bg-blue-500/20 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl 
        group-hover:bg-purple-500/20 transition-all duration-500" />
    </motion.div>
  );
};

export default CardItem;
