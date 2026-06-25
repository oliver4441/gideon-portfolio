"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setShowTooltip(true), 3000);
      const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [visible]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 shadow-xl max-w-[220px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-dark-700 border border-dark-600 rounded-full flex items-center justify-center"
              aria-label="Dismiss"
            >
              <X size={10} className="text-dark-300" />
            </button>
            <p className="text-xs text-dark-200 leading-relaxed">
              Hi! Want to chat? Hit me up on WhatsApp at{" "}
              <span className="text-green-400 font-medium">0768 213 649</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      {visible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          href="https://wa.me/254768213649?text=Hi%20Gideon!%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="text-white" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </motion.a>
      )}
    </div>
  );
}
