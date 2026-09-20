import Image from "next/image";

// Official logos, sourced from each organisation's own website. Official marks are
// drawn for light backgrounds and must not be recoloured, so they sit on white tiles.
const PARTNERS: { name: string; logo?: string; width: number }[] = [
  { name: "Riyadh Region Municipality", logo: "/images/partners/riyadh-municipality.svg", width: 150 },
  { name: "Ministry of Transport and Logistic Services", logo: "/images/partners/mot.svg", width: 150 },
  { name: "SLNEE", width: 120 },
  { name: "Ministry of Foreign Affairs", logo: "/images/partners/mofa.svg", width: 150 },
  { name: "Ministry of Municipalities and Housing", logo: "/images/partners/momah.svg", width: 150 },
];

// Bodies Vision Saudi works with on a client's behalf. These are NOT partnerships,
// so they are plain text — no emblems, which would imply endorsement.
const AUTHORITIES: { name: string; role: string }[] = [
  { name: "MISA", role: "Foreign investment licensing" },
  { name: "Ministry of Commerce", role: "Commercial Registration" },
  { name: "ZATCA", role: "Tax, VAT & e-invoicing" },
  { name: "Qiwa", role: "Labour & workforce" },
  { name: "GOSI", role: "Social insurance" },
  { name: "Saudi Business Center", role: "Business registration" },
  { name: "Invest Saudi", role: "Investment promotion" },
  { name: "Digital Government Authority", role: "Digital government services" },
];

function PartnerTile({ partner }: { partner: (typeof PARTNERS)[number] }) {
  return (
    <div className="flex h-20 w-52 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm">
      {partner.logo ? (
        <Image
          src={partner.logo}
          alt={partner.name}
          width={partner.width}
          height={48}
          // Next refuses to run SVGs through the image optimiser, so serve these vector
          // files as-is; they are small and need no resizing.
          unoptimized
          className="h-12 w-auto max-w-full object-contain"
        />
      ) : (
        <span className="font-display text-2xl font-extrabold tracking-[0.2em] text-[#0A0D0C]">{partner.name}</span>
      )}
    </div>
  );
}

export default function StrategicPartnershipsSection() {
  return (
    <section className="bg-slate-900 text-white py-[var(--space-section-lg)] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            Strategic <span className="text-[#10E784]">Partnerships</span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg font-light leading-relaxed">
            Empowering investors through strong local partnerships.
          </p>
        </div>

        {/* Partners — the one moving element in this section */}
        <div className="relative overflow-hidden py-4 mb-20">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />
          <ul className="animate-marquee items-center gap-6">
            {[0, 1, 2].map((copy) =>
              PARTNERS.map((partner) => (
                // Copies exist only to make the loop seamless, so assistive tech reads the list once.
                <li key={`${copy}-${partner.name}`} aria-hidden={copy > 0 ? true : undefined}>
                  <PartnerTile partner={partner} />
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Authorities — static on purpose: one marquee per section is enough motion */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-[#10E784] tracking-[0.25em] uppercase">
            Authorities &amp; platforms we navigate on your behalf
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {AUTHORITIES.map((a) => (
            <li key={a.name} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
              <span className="block text-sm font-bold text-white">{a.name}</span>
              <span className="block text-xs text-[#94A3B8] mt-1">{a.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
