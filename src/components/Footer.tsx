import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 relative">

      {/* Vertical Brand Name */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-left">
        <p className="text-2xl font-bold tracking-widest text-white opacity-20 select-none">
          Sylphora
        </p>
      </div>

      {/* CIN */}
      <div className="text-center md:text-left leading-tight">
        <p className="text-sm mb-0">CIN-U70200MH2025PTC441646</p>
      </div>

      {/* Copyright */}
      <div className="text-center md:text-left leading-tight">
        <p className="text-sm mb-0">© 2025 Sylphora. All rights reserved.</p>
      </div>

      {/* Help Button */}
      <Link
        to="/help"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors duration-300"
      >
        Help
      </Link>
    </footer>
  );
}
