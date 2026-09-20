"use client";

import React, { useEffect, useRef } from "react";
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const titleId = React.useId();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      triggerRef.current = document.activeElement;
      dialogRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#0E1210] border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl z-10 my-8 overflow-hidden text-white transition-colors duration-300 focus:outline-none"
          >
            {/* Subtle Ambient Glows */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-[#10E784]/5 blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              {title && (
                <div>
                  <div className="text-[10px] text-[#10E784] uppercase tracking-widest font-bold mb-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10E784]" />
                    <span>VISION SAUDI ADVISORY · RIYADH HQ</span>
                  </div>
                  <h3 id={titleId} className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {title}
                  </h3>
                </div>
              )}
              <button
                onClick={onClose}
                className="text-[#B9B3A8] hover:text-[#10E784] p-2.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none ml-auto border border-white/10"
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
