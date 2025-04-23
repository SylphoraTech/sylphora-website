import React from "react";
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
import Disclaimer from "./pages/companypages/disclaimer";

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <Router>
        <Navbar />

        {/* Routes for the application */}
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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
