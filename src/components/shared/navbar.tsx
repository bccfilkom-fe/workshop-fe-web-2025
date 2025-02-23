import { Menu, X } from "lucide-react";

import BCC from "../../assets/BCC.svg";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { NavLinks } from "../../data/navlink";
import { useScroll } from "../../hooks/useScroll";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useToggleMenu } from "../../hooks/useToggleMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isOpen: menuOpen, toggleMenu } = useToggleMenu(isOpen, setIsOpen);

  const { isScrolled } = useScroll();
  const { darkMode, setDarkMode } = useTheme();
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-blue-400 dark:bg-blue-950"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="w-full flex justify-between items-center md:w-auto">
            <div className="flex items-center">
              <img src={BCC} alt="Logo" className="h-8" />
            </div>

            <Button
              onClick={toggleMenu}
              className="text-white focus:outline-none md:hidden"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          <div className="hidden md:flex space-x-4">
            {NavLinks.map((link: any) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                    : "text-white hover:text-blue-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              className="px-4 py-2 rounded transition duration-300 
                     bg-gray-800 text-white hover:bg-gray-700 
                     dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 dark:hover:text-gray-800"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 mt-2">
              {NavLinks.map((link: any) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-lg transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                      : "text-white hover:text-blue-200"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
