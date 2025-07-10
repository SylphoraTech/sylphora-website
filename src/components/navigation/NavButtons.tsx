import { NavLink } from "react-router-dom";
import { Home, Info, Users, Mail } from "lucide-react";

interface NavButtonsProps {
  isMobile?: boolean;
}

const mainNavItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about-us", icon: Info },
  { name: "Collaboration", path: "/collaboration", icon: Users },
  { name: "Contact", path: "/contact", icon: Mail },
];

export function NavButtons({ isMobile = false }: NavButtonsProps) {
  const containerClasses = isMobile
    ? "flex flex-col space-y-1"
    : "flex items-center space-x-2 sm:space-x-4";

  const linkClasses = isMobile
    ? "block w-full px-3 py-2.5 text-base font-medium rounded-md"
    : "px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md";

  const commonStyles =
    "text-gray-300 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:scale-105 transform transition-all duration-200";

  return (
    <nav className={containerClasses} role="navigation" aria-label="Main navigation">
      {mainNavItems.map(({ name, path, icon: Icon }) => (
        <NavLink
          key={name}
          to={path}
          onClick={() => isMobile && window.scrollTo(0, 0)}
          className={({ isActive }) =>
            `${linkClasses} ${commonStyles} ${isActive ? "bg-gray-900 dark:bg-gray-700 text-white" : ""}`
          }
          // aria-current will be set automatically by NavLink when active
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <Icon size={isMobile ? 18 : 14} className="hidden sm:inline" />
            {name}
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
