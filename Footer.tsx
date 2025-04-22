import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8 flex justify-between items-center">
      {/* Footer content */}
      <div className="text-center">
        <p className="text-sm">© 2025 Sylphora. All rights reserved.</p>
      </div>

      {/* Help Button (with React Router Link) */}
      <Link
        to="/help" // Link to the Help page
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors duration-300"
      >
        Help
      </Link>
    </footer>
  );
}
