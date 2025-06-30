import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavButtons } from "./NavButtons";

export function Navbar() {
  // Force dark mode once on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-1">
            <img src="/assets/logo.jpg" alt="Logo" className="h-12 w-auto rounded" />
            <span className="text-white">Sylphora</span>
          </Link>

          <div className="flex items-center space-x-4">
            <NavButtons />
            {/* Removed toggle button since dark mode is enforced */}
          </div>
        </div>
      </div>
    </header>
  );
}
