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
    <div className="inline-flex items-center gap-3 mb-4">
      <span
        className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full font-bold bg-[#10E784]/15 text-[#059669] dark:text-[#10E784] border border-[#10E784]/40 shadow-sm"
      >
        VISION SAUDI / {number}
      </span>
      {title && (
        <span
          className="text-xs uppercase tracking-widest font-semibold text-[#A39B8B]"
        >
          {title}
        </span>
      )}
    </div>
  );
};
