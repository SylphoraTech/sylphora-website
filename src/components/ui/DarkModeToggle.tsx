import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";  // Ensure proper import here

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full transition-colors bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
     
    </button>
  );
};

export default DarkModeToggle;