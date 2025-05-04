import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavButtons } from "./NavButtons";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/assets/logo.jpg" 
              alt="Sylphora Logo" 
              className="h-8 w-auto rounded transform transition hover:scale-105"
            />
            <span className="text-xl font-bold text-black dark:text-white">
              Sylphora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavButtons />
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full transition-all duration-200 
                bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 
                dark:hover:bg-gray-600 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-gray-500"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <span className="text-lg">🌞</span>
              ) : (
                <span className="text-lg">🌙</span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-black 
              dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black 
          shadow-lg border-t dark:border-gray-800">
          <NavButtons isMobile={true} />
          <button
            onClick={toggleDarkMode}
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium
              text-gray-700 dark:text-gray-200 hover:bg-gray-100 
              dark:hover:bg-gray-800 transition-colors"
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
