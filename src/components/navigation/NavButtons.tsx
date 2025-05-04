import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavButtonsProps {
  isMobile?: boolean;
}

export function NavButtons({ isMobile = false }: NavButtonsProps) {
  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Collaboration", path: "/collaboration" },
    { name: "Contact", path: "/contact" },
  ];

  const baseStyles = isMobile
    ? "block w-full px-3 py-2 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    : "px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors";

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-1' : 'flex items-center space-x-4'}`}>
      {mainNavItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`${baseStyles} hover:scale-105 transform transition-all duration-200`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
