"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "../lib/variant";

interface NewsletterSectionProps {
  darkMode: boolean;
  email: string;
  onEmailChange: (email: string) => void;
  onSubscribe: (e: React.FormEvent) => void;
}

const NewsletterSection = ({ darkMode, email, onEmailChange, onSubscribe }: NewsletterSectionProps) => (
  <section id="contact" className={`py-24 bg-gradient-to-br ${darkMode ? "from-amber-900 to-teal-900" : "from-amber-500 to-teal-500"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-px w-12 bg-white/30" />
            <span className="text-sm uppercase tracking-widest text-white/90 font-medium">Join Our Community</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get exclusive access to new arrivals, special offers, and styling tips from our expert team.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={onSubscribe} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              required
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <motion.button
              type="submit"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              disabled={!email}
              className={`px-8 py-4 rounded-lg shadow-lg transition-colors ${darkMode ? "bg-[#1c1e26] border border-[#282b33]" : "bg-white text-amber-500 hover:bg-gray-100"}`}
            >
              Subscribe Now
            </motion.button>
          </form>
          <p className="text-white/60 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default NewsletterSection;
