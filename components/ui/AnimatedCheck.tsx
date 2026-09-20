/** Success checkmark that draws itself: the circle traces first, then the tick. */
export function AnimatedCheck({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      role="img"
      aria-label="Success"
      className="animated-check text-[#10E784]"
    >
      <circle cx="26" cy="26" r="24" fill="rgba(16,231,132,0.12)" stroke="currentColor" strokeWidth="2" className="animated-check__circle" />
      <path d="M15 27 l7 7 l15 -16" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="animated-check__tick" />
    </svg>
  );
}
