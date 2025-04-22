import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/navigation";
import { Footer } from "@/components/Footer";
import Home from "./pages/home";
import Help from "./pages/Help";

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
