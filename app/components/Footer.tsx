"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "../lib/variant";

interface FooterProps {
  darkMode: boolean;
  onSubscribe: (e: React.FormEvent) => void;
  email: string;
  onEmailChange: (email: string) => void;
}

const Footer = ({ darkMode, onSubscribe, email, onEmailChange }: FooterProps) => (
  <footer className={`border-t ${darkMode ? "bg-[#13141d] border-[#282b33]" : "bg-white border-gray-200"}`}>
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center space-x-1.5 mb-3">
          <div className="w-2 h-2 bg-amber-500 rounded-full" />
          <div className="w-2 h-2 bg-teal-400 rounded-full" />
          <div className="w-2 h-2 bg-purple-500 rounded-full" />
        </div>
        <h2 className="text-2xl font-extralight tracking-wider mb-4">
          MODERN <span className="font-bold ml-1">COLLECTIONS</span>
        </h2>
        <p className="text-gray-500 text-center md:text-left mb-6 max-w-xs">
          Elevate your wardrobe with our curated collection of timeless pieces. Quality, style, and comfort come together in our carefully crafted designs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:gap-12">
        <div>
          <h3 className="text-sm font-semibold mb-6">Customer Service</h3>
          <ul className="space-y-5">
            {["Contact Us", "Shipping Information", "Returns & Exchanges", "Order Tracking", "FAQ"].map((item) => (
              <li key={item}>
                <motion.a whileHover={{ x: 5 }} href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-6">Company</h3>
          <ul className="space-y-5">
            {["About Us", "Careers", "Sustainability", "Press", "Blog"].map((item) => (
              <li key={item}>
                <motion.a whileHover={{ x: 5 }} href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-[#1c1e26] border-[#282b33] border" : "bg-gray-100"}`}>
        <h3 className="text-sm font-semibold mb-5">Stay Connected</h3>
        <p className="text-gray-500 mb-4">
          Subscribe to receive exclusive offers, early access to new arrivals, and personalized recommendations.
        </p>
        <form onSubmit={onSubscribe} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
            placeholder="Enter your email address"
            className={`px-4 py-3 border rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              darkMode ? "bg-[#1c1e26] border-[#282b33]" : "bg-white border-gray-300"
            }`}
          />
          <motion.button
            type="submit"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            disabled={!email}
            className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors"
          >
            Subscribe Now
          </motion.button>
        </form>
      </div>
    </div>

    <div className={`mt-12 pt-8 border-t ${darkMode ? "border-[#282b33]" : "border-gray-200"}`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Modern Collections. All rights reserved.
        </p>
        <div className="flex space-x-8">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <motion.a key={item} whileHover={{ y: -5 }} href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
