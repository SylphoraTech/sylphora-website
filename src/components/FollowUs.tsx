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
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com",
    color: "hover:bg-blue-600",
    ariaLabel: "Follow us on Facebook",
  },
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
    url: "https://www.instagram.com/sylphora_technologies",
    color: "hover:bg-pink-600",
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/sylphora",
    color: "hover:bg-blue-700",
    ariaLabel: "Follow us on LinkedIn",
  },
];

export default function FollowUs() {
  return (
    <div className="flex flex-wrap gap-4">
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
              w-10 h-10 flex items-center justify-center rounded-lg
              bg-gray-800 text-gray-400
              ${social.color} hover:text-white
              transform transition-all duration-200
              hover:scale-110 hover:rotate-3
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-400
            `}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
