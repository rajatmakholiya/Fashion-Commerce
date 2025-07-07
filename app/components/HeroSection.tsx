"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "../lib/variant";

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection = ({ darkMode }: HeroSectionProps) => (
  <section id="hero" className={`relative h-[80vh] overflow-hidden bg-gradient-to-br ${darkMode ? "from-[#070b13] to-[#1c1e26]" : "from-gray-50 to-gray-100"}`}>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-teal-400/20 mix-blend-multiply" />
    <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="h-px w-12 bg-amber-500" />
              <span className="text-sm uppercase tracking-widest text-amber-500 font-medium">New Collection</span>
            </div>
            <h1 className="text-6xl font-black mb-4">
              Elevate Your Style
              <br />
              <span className="text-amber-500">Modern</span> Essentials
            </h1>
            <p className={`text-lg mb-8 ${darkMode ? "" : "text-gray-600"}`}>
              Discover our curated collection of timeless pieces, meticulously crafted for the modern individual. Quality, style, and comfort come together in our latest arrivals.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.a href="#products" whileHover="hover" whileTap="tap" variants={buttonVariants} className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600">
                Explore Collection
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a href="#featured" whileHover="hover" whileTap="tap" variants={buttonVariants} className={`inline-flex items-center px-8 py-4 text-amber-500 rounded-lg shadow-lg border border-amber-500 ${darkMode ? "" : "bg-white hover:bg-amber-50"}`}>
                Featured Items
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
