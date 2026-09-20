import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site-config";

/**
 * Phone-only bar pinned to the bottom of the screen. On mobile the three things
 * a visitor actually wants — message, call, enquire — were otherwise a scroll
 * away at the foot of a long page. Hidden from sm upwards, where the floating
 * WhatsApp button and the header CTA already cover it.
 */
export function MobileActionBar() {
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-xs font-semibold transition-colors";

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-[#0A0D0C]/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] sm:hidden"
    >
      <a
        href={whatsappUrl("Hello Vision Saudi, I'd like to discuss setting up in Saudi Arabia.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-[#25D366] hover:bg-white/5`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a href={`tel:${SITE.phoneE164}`} className={`${item} text-[#D8CCB8] hover:bg-white/5`}>
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call
      </a>
      <Link href="/contact" className={`${item} text-[#10E784] hover:bg-white/5`}>
        <Send className="h-5 w-5" aria-hidden="true" />
        Enquire
      </Link>
    </nav>
  );
}
