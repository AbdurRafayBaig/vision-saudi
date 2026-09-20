"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpenDefault = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const panelId = React.useId();

  return (
    <div className="border-b border-white/10 py-4 transition-colors hover:border-[#10E784]/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 focus:outline-none group text-white font-display font-bold hover:text-[#10E784] transition-colors"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-base sm:text-lg pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#10E784] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* The answer stays in the DOM so it is crawlable; the panel animates its
          height in CSS (see .accordion-panel) and hides itself from assistive
          tech while collapsed. */}
      <div id={panelId} className="accordion-panel" data-open={isOpen}>
        <div>
          <p className="pt-2 pb-4 text-[#D8CCB8] text-sm sm:text-base leading-relaxed font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
