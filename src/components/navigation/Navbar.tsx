import React, { useEffect, useState } from "react";
import { NavButtons } from "./NavButtons";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load from localStorage on first render
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // Apply dark mode on mount if stored
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black text-black dark:text-white shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img src="/assets/logo.jpg" alt="Sylphora Logo" className="h-8 w-auto rounded" />
        <div className="text-xl font-bold">Sylphora</div>
      </div>

      {/* Navigation */}
      <div className="flex items-center space-x-2">
        <NavButtons />
        <button
          onClick={toggleDarkMode}
          className="ml-2 p-2 rounded-full transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <span className="text-lg">🌞</span> : <span className="text-lg">🌙</span>}
        </button>
      </div>
    </header>
  );
}
