"use client";

import { motion } from "framer-motion";
import { Filter, Moon, ShoppingCart, Sun } from "lucide-react";
import { buttonVariants } from "../lib/variant";

interface NavItem {
  name: string;
  href: string;
}

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  activeSection: string;
  navItems: NavItem[];
  cartQuantity: number;
  onCartToggle: () => void;
  onFilterToggle: () => void;
}

const Header = ({
  darkMode,
  setDarkMode,
  activeSection,
  navItems,
  cartQuantity,
  onCartToggle,
  onFilterToggle,
}: HeaderProps) => {
  const handleScroll = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        const offset = 30;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 border-b shadow-sm ${darkMode ? "bg-[#13141d] border-[#282b33]" : "bg-white border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center space-x-1.5 mr-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <div className="w-3 h-3 bg-teal-400 rounded-full" />
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
          </div>
          <h1 className="text-2xl hidden sm:block font-extralight tracking-wider">
            MODERN <span className="font-bold ml-1">COLLECTIONS</span>
          </h1>
          <div className="hidden md:block h-6 w-px bg-gray-300 mx-4" />
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href.substring(1))}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1) ? "text-amber-500" : darkMode ? "" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={onCartToggle}
            className="relative p-2"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartQuantity}
              </span>
            )}
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={onFilterToggle}
            className="md:hidden p-2"
          >
            <Filter className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
