import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, url: "https://facebook.com", color: "bg-blue-600", hover: "hover:bg-blue-700" },
  { icon: FaTwitter, url: "https://twitter.com", color: "bg-sky-500", hover: "hover:bg-sky-600" },
  { icon: FaInstagram, url: "https://instagram.com", color: "bg-pink-500", hover: "hover:bg-pink-600" },
  { icon: FaLinkedinIn, url: "https://linkedin.com", color: "bg-blue-800", hover: "hover:bg-blue-900" },
];

const FollowUs = () => {
  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map(({ icon: Icon, url, color, hover }, index) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <div
            className={`w-14 h-14 ${color} ${hover} rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:scale-110 shadow-md`}
          >
            
          
          </div>
        </a>
      ))}
    </div>
  );
};

export default FollowUs;
