"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "../lib/variant";


interface FeaturedSectionProps {
  darkMode: boolean;
  onSelectCategory: (category: string) => void;
}

const collections = [
  {
    name: "Luxury Menswear",
    description: "Elevate your wardrobe with our premium menswear collection. Tailored perfection meets modern sophistication.",
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?w=700&auto=format&fit=crop&q=60",
    gradient: "from-amber-500/20 to-amber-600/20",
    category: "men",
  },
  {
    name: "Exclusive Womenswear",
    description: "Discover the art of elegance with our curated womenswear. Each piece is a blend of comfort and haute couture.",
    image: "https://plus.unsplash.com/premium_photo-1732473760222-389820a18261?w=700&auto=format&fit=crop&q=60",
    gradient: "from-teal-500/20 to-teal-600/20",
    category: "women",
  },
];

const FeaturedSection = ({ darkMode, onSelectCategory }: FeaturedSectionProps) => (
  <section id="featured" className={`py-24 bg-gradient-to-b ${darkMode ? "from-[#070b13] to-[#13141d]" : "from-white to-gray-50"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-px w-12 bg-amber-500" />
            <span className="text-sm uppercase tracking-widest text-amber-500 font-medium">Exclusive Picks</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4">Featured Collections</h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Handpicked items that define our brand aesthetic. Each piece tells a story of craftsmanship and timeless appeal.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {collections.map((collection, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-96 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${collection.gradient} mix-blend-multiply z-10`} />
              <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <h3 className="text-3xl font-bold text-white mb-3">{collection.name}</h3>
                  <p className="text-gray-200 mb-6 max-w-xl">{collection.description}</p>
                  <motion.button
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    onClick={() => onSelectCategory(collection.category)}
                    className={`inline-flex items-center px-6 py-3 rounded-lg shadow-md transition-colors ${
                      darkMode ? "bg-[#1c1e26] border border-[#282b33]" : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    Explore Collection
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedSection;
