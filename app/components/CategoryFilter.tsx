"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "../lib/variant";

interface CategoryFilterProps {
  darkMode: boolean;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ darkMode, categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => (
  <div className="space-y-6">
    {categories.map((category) => (
      <motion.div key={category} whileHover={{ x: 5 }}>
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          onClick={() => onCategoryChange(category)}
          className={`w-full text-left px-6 py-3 rounded-lg transition-all ${
            selectedCategory === category
              ? "bg-amber-500 text-white shadow-lg"
              : darkMode
              ? "bg-[#1c1e26] border border-[#282b33]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <span className="capitalize">{category}</span>
        </motion.button>
      </motion.div>
    ))}
  </div>
);

export default CategoryFilter;
