import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavButtons } from "./NavButtons";

export function Navbar() {
  // Force dark mode once on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center space-x-1">
            <img src="/assets/logo.jpg" alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto rounded" />
            <span className="text-white text-sm sm:text-base md:text-lg">Sylphora</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon when menu is closed */}
            <svg 
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Icon when menu is open */}
            <svg 
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavButtons />
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-black shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavButtons isMobile={true} />
        </div>
      </div>
    </header>
  );
}
