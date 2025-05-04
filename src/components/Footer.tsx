// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import FollowUs from "./FollowUs";

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black to-gray-900">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <address className="text-gray-400 not-italic text-sm leading-relaxed">
                #204 Sapphire Chambers,
                <br />
                First Floor, Desk #167,
                <br />
                Baner Road, Baner,
                <br />
                Pune 411045
              </address>
            </div>
            <div className="text-sm text-gray-400">
              <p>CIN-U70200MH2025PTC441646</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/collaboration"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Collaboration
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/help"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies Policy
              </Link>
              <Link
                to="/disclaimer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Legal Disclaimer
              </Link>
              <Link
                to="/gdpr"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GDPR
              </Link>
              <Link
                to="/dmca"
                className="text-gray-400 hover:text-white transition-colors"
              >
                DMCA Policy
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <FollowUs />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sylphora Technologies Private Limited.
              All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
