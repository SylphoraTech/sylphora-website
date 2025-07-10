// src/components/FollowUs.tsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { IconBaseProps } from "react-icons/lib";

const socialLinks: Array<{
  name: string;
  icon: IconType;
  url: string;
  color: string;
  ariaLabel: string;
}> = [
  
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://x.com/SylphoraPvt",
    color: "hover:bg-sky-500",
    ariaLabel: "Follow us on Twitter",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/sylphora.official?igsh=ZzNkMGNrMjdha25o",
    color: "hover:bg-pink-600",
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/105755694",
    color: "hover:bg-blue-700",
    ariaLabel: "Follow us on LinkedIn",
  },
];

export default function FollowUs() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {socialLinks.map((social) => {
        const IconComponent = social.icon as React.ComponentType<IconBaseProps>;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className={`
              w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg
              bg-gray-800 text-gray-400
              ${social.color} hover:text-white
              transform transition-all duration-200
              hover:scale-110 hover:rotate-3
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-400
            `}
          >
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        );
      })}
    </div>
  );
}
