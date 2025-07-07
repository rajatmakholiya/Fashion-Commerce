"use client";

import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { CartItem } from "../types";
import { buttonVariants, container } from "../lib/variant";

interface CartModalProps {
  darkMode: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveFromCart: (productId: number) => void;
  onCheckout: () => void;
}

const CartModal = ({
  darkMode,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onCheckout,
}: CartModalProps) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col">
      <header className={`px-6 py-4 border-b ${darkMode ? "border-[#282b33]" : "border-gray-200"}`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <motion.button whileHover="hover" whileTap="tap" variants={buttonVariants} onClick={onClose} className="p-2">
            <X className="w-5 h-5" />
          </motion.button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="w-12 h-12 mb-4" />
            <p>Your cart is empty</p>
            <motion.button whileHover="hover" whileTap="tap" variants={buttonVariants} onClick={onClose} className="mt-4 px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md">
              Continue Shopping
            </motion.button>
          </div>
        ) : (
          <motion.ul initial="hidden" animate="show" variants={container} className="space-y-6">
            {cartItems.map((item) => (
              <motion.li key={item.product.id} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { type: "spring" } } }} className={`flex items-center justify-between p-4 rounded-lg shadow-sm border ${darkMode ? "bg-[#13141d] border-[#282b33]" : "bg-white border-gray-100"}`}>
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{item.product.name}</h3>
                    <p className="text-sm font-bold text-amber-500">${item.product.price}</p>
                    <div className="flex items-center mt-2">
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                        <Minus className="w-3 h-3" />
                      </motion.button>
                      <span className="mx-3 text-sm font-medium">{item.quantity}</span>
                      <motion.button whileTap={{ scale: 0.9 }} onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                        <Plus className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-base font-bold mr-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                  <motion.button whileTap={{ scale: 0.9 }} onClick={() => onRemoveFromCart(item.product.id)} className="p-2 text-gray-400 hover:text-red-500">
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className={`p-6 border-t ${darkMode ? "bg-[#13141d] border-[#282b33]" : "bg-gray-50 border-gray-200"}`}>
          <div className="flex justify-between mb-6">
            <span className="text-lg font-medium">Subtotal</span>
            <span className="text-xl font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-lg font-medium">Shipping</span>
            <span className="text-lg font-bold">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-lg font-medium">Total</span>
            <span className="text-xl font-bold text-amber-500">${total.toFixed(2)}</span>
          </div>
          <motion.button whileHover="hover" whileTap="tap" variants={buttonVariants} onClick={onCheckout} className="w-full px-6 py-4 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600">
            Proceed to Checkout
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default CartModal;
