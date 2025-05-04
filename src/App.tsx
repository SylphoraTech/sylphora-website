import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/home";
import Help from "./pages/Help";
import AboutUs from "./pages/companypages/AboutUs";
import Contact from "./pages/companypages/Contact";
import DMCA from "./pages/companypages/DMCA";
import GDPR from "./pages/companypages/GDPR";
import Terms from "./pages/companypages/Terms";
import PrivacyPolicy from "./pages/companypages/PrivacyPolicy";
import Cookies from "./pages/companypages/Cookies";
import Disclaimer from "./pages/companypages/disclaimer";
import { applyBrowserFixes } from "./utils/browserUtils";
import Collaboration from "@/pages/companypages/Collaboration";

// App.tsx
function App() {
  useEffect(() => {
    // Apply comprehensive browser fixes
    try {
      applyBrowserFixes();
      
      // Add viewport-height fix for mobile browsers
      const handleResize = () => {
        // Set custom viewport height property for consistent mobile experience
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize);
      };
    } catch (error) {
      console.error("Browser compatibility setup error:", error);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Router>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/collaboration" element={<Collaboration />} />

          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
