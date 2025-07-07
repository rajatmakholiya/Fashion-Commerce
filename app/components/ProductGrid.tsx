"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { buttonVariants, container } from "../lib/variant";
import { Product } from "../types";


interface ProductGridProps {
  darkMode: boolean;
  products: Product[];
  selectedCategory: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
  onAddToCart: (product: Product) => void;
  onFilterToggle: () => void;
  isFilterOpen: boolean;
}

const ProductGrid = ({
  darkMode,
  products,
  selectedCategory,
  categories,
  onCategoryChange,
  onAddToCart,
  onFilterToggle,
  isFilterOpen,
}: ProductGridProps) => (
  <section id="products" className={`py-24 ${darkMode ? "bg-[#070b13]" : "bg-white"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-px w-12 bg-amber-500" />
            <span className="text-sm uppercase tracking-widest text-amber-500 font-medium">Shop by Category</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4">Browse Our Collection</h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Discover products tailored to your style. From casual wear to luxury accessories, we have something for everyone.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="w-full">
            <div className="hidden md:flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={() => onCategoryChange(category)}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    selectedCategory === category
                      ? "bg-amber-500 text-white shadow-lg"
                      : darkMode
                      ? "bg-[#1c1e26] border border-[#282b33]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="capitalize">{category}</span>
                </motion.button>
              ))}
            </div>
            <div className="md:hidden flex justify-center mb-6">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                onClick={onFilterToggle}
                className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors"
              >
                {isFilterOpen ? "Close Filter" : selectedCategory === "all" ? "All Products" : selectedCategory}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        key={selectedCategory}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { type: "spring" } } }}
            className={`group relative border rounded-xl shadow-md overflow-hidden ${
              darkMode ? "bg-[#13141d] border-[#282b33]" : "bg-white border-transparent"
            }`}
          >
            <div className="relative h-72 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full px-6 py-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <motion.button
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center shadow-md transition-colors"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </motion.button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <span className="text-lg font-bold text-amber-500">${product.price}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.size && (
                  <span className={`px-3 py-1 text-xs font-medium border rounded-full ${darkMode ? "bg-[#1c1e26] border-[#282b33]" : "bg-gray-100 text-gray-700"}`}>
                    {product.size}
                  </span>
                )}
                {product.color && (
                  <span className={`px-3 py-1 text-xs font-medium border rounded-full ${darkMode ? "bg-[#1c1e26] border-[#282b33]" : "bg-gray-100 text-gray-700"}`}>
                    {product.color}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductGrid;
