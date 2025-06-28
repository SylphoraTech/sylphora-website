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
    : "flex items-center space-x-4";

  const linkClasses = isMobile
    ? "block w-full px-3 py-2 text-base font-medium rounded-md"
    : "px-3 py-2 text-sm font-medium rounded-md";

  const commonStyles =
    "text-gray-700 dark:text-gray-200 hover:bg-black-100 dark:hover:bg-black-800 focus:outline-none focus:ring-2 focus:ring-primary/40 hover:scale-105 transform transition-all duration-200";

  return (
    <nav className={containerClasses} role="navigation" aria-label="Main navigation">
      {mainNavItems.map(({ name, path, icon: Icon }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            `${linkClasses} ${commonStyles} ${isActive ? "bg-black-200 dark:bg-blacl-700" : ""}`
          }
          // aria-current will be set automatically by NavLink when active
        >
          <div className="flex items-center gap-2">
            <Icon size={16} />
            {name}
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
