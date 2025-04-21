import React from "react";
import { Link } from "react-router-dom";


const HelpButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link
        to="/help"
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full shadow-lg transition-colors duration-300 flex items-center space-x-2"
      >
        
        <span>Help</span>
      </Link>
    </div>
  );
};

export default HelpButton;
