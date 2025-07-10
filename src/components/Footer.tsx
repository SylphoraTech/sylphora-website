import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FollowUs from "./FollowUs";

export function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-black to-gray-900">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company */}
          <div className="space-y-2">
            <button
              onClick={() => setShowCompany(!showCompany)}
              className="text-base sm:text-lg font-semibold text-white text-left flex justify-between items-center w-full md:block"
              aria-expanded={showCompany || !isMobile}
              aria-controls="company-section"
            >
              Company
              {isMobile && <span className="text-xl">{showCompany ? "−" : "+"}</span>}
            </button>
            {(showCompany || !isMobile) && (
              <div id="company-section" className="space-y-2 text-xs sm:text-sm text-gray-400 transition-all duration-300 ease-in-out pt-1">
                <div className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mt-1 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <address className="not-italic">
                    #204 Sapphire Chambers,<br />
                    First Floor, Desk #167,<br />
                    Baner Road, Baner,<br />
                    Pune 411045
                  </address>
                </div>
                <p className="text-xs sm:text-sm">CIN-U70200MH2025PTC441646</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <button
              onClick={() => setShowNavigation(!showNavigation)}
              className="text-base sm:text-lg font-semibold text-white text-left flex justify-between items-center w-full md:block"
              aria-expanded={showNavigation || !isMobile}
              aria-controls="navigation-section"
            >
              Navigation
              {isMobile && <span className="text-xl">{showNavigation ? "−" : "+"}</span>}
            </button>
            {(showNavigation || !isMobile) && (
              <nav id="navigation-section" className="flex flex-col space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400 transition-all duration-300 ease-in-out pt-1">
                <Link to="/" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Home</Link>
                <Link to="/about-us" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">About Us</Link>
                <Link to="/collaboration" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Collaboration</Link>
                <Link to="/contact" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Contact</Link>
                <Link to="/help" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Help Center</Link>
              </nav>
            )}
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <button
              onClick={() => setShowLegal(!showLegal)}
              className="text-base sm:text-lg font-semibold text-white text-left flex justify-between items-center w-full md:block"
              aria-expanded={showLegal || !isMobile}
              aria-controls="legal-section"
            >
              Legal
              {isMobile && <span className="text-xl">{showLegal ? "−" : "+"}</span>}
            </button>
            {(showLegal || !isMobile) && (
              <nav id="legal-section" className="flex flex-col space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400 transition-all duration-300 ease-in-out pt-1">
                <Link to="/privacy-policy" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Privacy Policy</Link>
                <Link to="/terms" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Terms & Conditions</Link>
                <Link to="/cookies" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Cookies Policy</Link>
                <Link to="/disclaimer" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">Legal Disclaimer</Link>
                <Link to="/gdpr" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">GDPR</Link>
                <Link to="/dmca" onClick={handleLinkClick} className="hover:text-white text-left inline-block focus:outline-none focus:ring-0 focus-visible:ring-0 p-0.5 sm:p-0 m-0">DMCA Policy</Link>
              </nav>
            )}
          </div>

          {/* Social Media */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Connect With Us</h3>
            <FollowUs />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sylphora Technologies Private Limited. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center space-x-2"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4"
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
