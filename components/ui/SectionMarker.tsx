import React from "react";

interface SectionMarkerProps {
  number: string;
  title?: string;
  light?: boolean;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({
  number,
  title,
}) => {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="text-xs font-mono tracking-widest uppercase font-bold text-[#059669] dark:text-[#10E784]">
        VISION SAUDI / {number}
      </span>
      {title && (
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-[#A39B8B]">
          · {title}
        </span>
      )}
    </div>
  );
};
