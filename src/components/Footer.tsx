// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import FollowUs from "./FollowUs";

export function Footer() {
  return (
    <>
      {/* Decorative line above footer */}
      <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

      <footer className="bg-black text-white py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 relative m-0">
        {/* CIN */}
        <div className="text-center md:text-left leading-tight">
          <p className="text-sm mb-0">CIN-U70200MH2025PTC441646</p>
        </div>

        {/* Follow Us */}
        <FollowUs />

        {/* Copyright */}
        <div className="text-center md:text-left leading-tight">
          <p className="text-sm mb-0">© 2025 Sylphora. All rights reserved.</p>
        </div>

        {/* Help Button */}
        <Link
          to="/help"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full transition-colors duration-300"
        >
          Help
        </Link>
      </footer>
    </>
  );
}
