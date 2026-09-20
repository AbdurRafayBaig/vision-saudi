"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

interface Trigger {
  label: string;
  variant?: "primary" | "outline" | "ghost" | "ivory" | "emerald" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

/**
 * The enquiry modal and the buttons that open it, as one client leaf.
 *
 * Sections used to carry "use client" themselves purely because a button
 * inside them needed useState for the modal. That shipped the whole section —
 * its markup, its icons, its copy — to the browser as client JavaScript. This
 * keeps the interactive part interactive and lets everything around it render
 * on the server.
 */
export function EnquiryButtons({
  triggers,
  defaultIntent,
  className = "",
}: {
  triggers: Trigger[];
  defaultIntent?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={className}>
        {triggers.map((t) => (
          <Button
            key={t.label}
            variant={t.variant}
            size={t.size}
            showArrow={t.showArrow}
            className={t.className}
            onClick={() => setOpen(true)}
          >
            {t.label}
          </Button>
        ))}
      </div>
      <ContactFormModal isOpen={open} onClose={() => setOpen(false)} defaultIntent={defaultIntent} />
    </>
  );
}
