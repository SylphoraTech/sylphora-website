// src/components/FollowUs.tsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Icon = (IconComponent: any, className: string) => (
  <IconComponent className={className} />
);

export default function FollowUs() {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm font-semibold">Follow Us</span>
      <div className="flex space-x-4 text-white text-lg">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          {Icon(FaFacebookF, "hover:text-blue-600 transition")}
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          {Icon(FaTwitter, "hover:text-blue-400 transition")}
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          {Icon(FaInstagram, "hover:text-pink-500 transition")}
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {Icon(FaLinkedinIn, "hover:text-blue-700 transition")}
        </a>
      </div>
    </div>
  );
}
