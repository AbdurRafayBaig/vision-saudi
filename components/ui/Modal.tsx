"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0E1210] border border-slate-200 dark:border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl z-10 my-8 overflow-hidden text-slate-900 dark:text-white transition-colors duration-300"
          >
            {/* Subtle Ambient Glows */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-[#10E784]/10 blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/10">
              {title && (
                <div>
                  <div className="text-[10px] font-mono text-[#10E784] uppercase tracking-widest font-bold mb-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10E784]" />
                    <span>VISION SAUDI ADVISORY · RIYADH HQ</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                    {title}
                  </h3>
                </div>
              )}
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-900 dark:text-[#B9B3A8] dark:hover:text-[#10E784] p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none ml-auto border border-slate-200 dark:border-white/10"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative z-10">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
