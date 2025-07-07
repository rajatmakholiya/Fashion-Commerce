"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CartItem, Product } from "./types";
import productsdata from "./data/products";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import ProductGrid from "./components/ProductGrid";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import CategoryFilter from "./components/CategoryFilter";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [email, setEmail] = useState("");

  const categories = ["all", ...Array.from(new Set(productsdata.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "all" ? productsdata : productsdata.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-[#070b13] text-white" : "bg-white text-gray-900"}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection=""
        navItems={[
          { name: "Home", href: "#hero" },
          { name: "Featured", href: "#featured" },
          { name: "Products", href: "#products" },
          { name: "Contact", href: "#contact" },
        ]}
        cartQuantity={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(true)}
        onFilterToggle={() => setIsFilterOpen(true)}
      />

      <HeroSection darkMode={darkMode} />

      <FeaturedSection
        darkMode={darkMode}
        onSelectCategory={(category) => {
          setSelectedCategory(category);
          document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <ProductGrid
        darkMode={darkMode}
        products={filteredProducts}
        selectedCategory={selectedCategory}
        categories={categories}
        onCategoryChange={(category) => setSelectedCategory(category)}
        onAddToCart={handleAddToCart}
        onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
        isFilterOpen={isFilterOpen}
      />

      <NewsletterSection
        darkMode={darkMode}
        email={email}
        onEmailChange={setEmail}
        onSubscribe={handleSubscribe}
      />

      <Footer
        darkMode={darkMode}
        email={email}
        onEmailChange={setEmail}
        onSubscribe={handleSubscribe}
      />

      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-md bg-white dark:bg-[#070b13] overflow-y-auto">
              <CartModal
                darkMode={darkMode}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
                onCheckout={() => setIsCartOpen(false)}
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-start">
            <div className="w-full max-w-xs bg-white dark:bg-[#070b13] overflow-y-auto p-6">
              <CategoryFilter
                darkMode={darkMode}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => {
                  setSelectedCategory(category);
                  setIsFilterOpen(false);
                }}
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
