"use client";

import { useEffect } from "react";

// Catches errors thrown in the root layout itself, so it must render its own <html>/<body>.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0D0C",
          color: "#FFFFFF",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "36rem" }}>
          <h1 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>
            Vision Saudi is temporarily unavailable.
          </h1>
          <p style={{ color: "#94A3B8", fontWeight: 300, lineHeight: 1.7, marginBottom: "2rem" }}>
            An unexpected error prevented the site from loading. Please try again in a moment.
          </p>
          <button
            onClick={reset}
            style={{
              background: "linear-gradient(90deg, #34D399 0%, #10E784 40%, #059669 100%)",
              color: "#0A0D0C",
              fontWeight: 700,
              border: "none",
              borderRadius: "0.75rem",
              padding: "0.875rem 1.75rem",
              fontSize: "0.9375rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
