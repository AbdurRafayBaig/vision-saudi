"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Home as HomeIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { VisionSaudiLogo } from "@/components/ui/VisionSaudiLogo";
import { translator } from "@/lib/messages";
import { SearchDialog } from "@/components/layout/SearchDialog";

const t = translator();

const navLinks = [
  { name: t("nav.home"), href: "/" },
  {
    name: t("nav.services"),
    href: "/services",
    dropdown: [
      { name: t("nav.businessSetup"), href: "/services/business-setup" },
      { name: t("nav.corporateServices"), href: "/services/corporate-services" },
      { name: t("nav.technology"), href: "/services/technology-infrastructure" },
      { name: t("nav.commercialRealEstate"), href: "/services/real-estate" },
      { name: t("nav.premiumResidency"), href: "/services/premium-residency" },
      // Track Record sits with the services rather than on its own: it is the
      // evidence for them, and someone reading what you do is exactly who wants
      // to see what you have delivered.
      { name: t("nav.trackRecord"), href: "/experience" },
    ],
  },
  { name: t("nav.realEstate"), href: "/services/real-estate" },
  { name: t("nav.contact"), href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Which dropdown is open, by name. It used to be one boolean, which was fine
  // with a single menu and would have opened both once a second was added.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Which group is expanded in the phone menu. Its children used to be printed
  // open all the time, so tapping "Services" revealed nothing — they were
  // already there, and the menu was a wall of links before you touched it.
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest("input, textarea, [contenteditable]");
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0A0D0C]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl text-white"
            : "bg-[#0A0D0C]/35 backdrop-blur-md border-b border-white/10 py-4 text-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Vision Saudi Official Logo */}
          <div className="shrink-0">
            <VisionSaudiLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-7 shrink-0">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : (pathname === link.href || pathname?.startsWith(link.href + "/"));

              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(link.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`whitespace-nowrap inline-flex min-h-[44px] items-center gap-1 text-[13px] xl:text-[14px] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-[#10E784] font-semibold"
                          : "text-white/85 hover:text-[#10E784]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`h-3.5 w-3.5 text-[#10E784] transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} />
                    </Link>

                    <div className={`absolute top-full start-0 w-72 pt-3 transition-all duration-300 ${
                      openDropdown === link.name ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}>
                      <div className="bg-[#101312]/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl p-2">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex min-h-[44px] items-center px-4 py-3 text-xs text-[#94A3B8] hover:text-[#10E784] hover:bg-white/[0.05] transition-colors rounded-xl font-medium"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap inline-flex min-h-[44px] items-center gap-1.5 text-[13px] xl:text-[14px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#10E784] font-semibold"
                      : "text-white/85 hover:text-[#10E784]"
                  }`}
                >
                  {link.name === "Home" && <HomeIcon className="h-3.5 w-3.5 text-[#10E784]" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Professional Executive CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label={`${t("search.label")} (Ctrl K)`}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-[#94A3B8] transition-colors hover:border-[#10E784]/50 hover:text-white"
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t("search.label")}</span>
              <kbd className="ms-1 rounded border border-white/15 px-1.5 py-0.5 font-mono text-xs">⌘K</kbd>
            </button>
            <Button
              variant="emerald"
              size="sm"
              className="min-h-[44px]"
              onClick={() => setContactModalOpen(true)}
            >
              Make the First Move
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label={t("search.label")}
            className="lg:hidden flex min-h-[44px] min-w-[44px] items-center justify-center text-white transition-colors hover:text-[#10E784]"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex min-h-[44px] min-w-[44px] items-center justify-center text-white hover:text-[#10E784] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* A panel under the header, not a full-screen takeover. Covering the
          whole display for six links reads as an app someone is trapped in;
          this keeps the page visible behind it and closes by tapping away. */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-30 bg-[#0A0D0C]/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* inert while closed: the panel stays mounted so it can animate, and
          pointer-events stops the mouse, but every link inside it would
          otherwise stay in the tab order and in the accessibility tree. */}
      <div
        inert={!mobileMenuOpen}
        className={`fixed start-0 end-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        style={{ top: `calc(${isScrolled ? "4.25rem" : "5rem"} + env(safe-area-inset-top, 0px))` }}
      >
        <div className="mx-3 overflow-hidden rounded-2xl border border-white/12 bg-[#0E1211] shadow-2xl">
          <nav className="max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain p-2">
            {navLinks.map((link) => {
              const expanded = openGroup === link.name;
              return (
                <div key={link.name} className="border-b border-white/[0.06] last:border-b-0">
                  <div className="flex items-stretch">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex min-h-[52px] flex-1 items-center rounded-xl px-3 text-base font-semibold text-white transition-colors hover:bg-white/[0.06]"
                    >
                      {link.name}
                    </Link>

                    {link.dropdown && (
                      // A separate control, so the row can both navigate and
                      // expand without one stealing the other's taps.
                      <button
                        type="button"
                        onClick={() => setOpenGroup(expanded ? null : link.name)}
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Hide" : "Show"} ${link.name}`}
                        className="flex min-h-[52px] min-w-[52px] items-center justify-center rounded-xl text-[#94A3B8] transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        <ChevronDown
                          className={`h-4.5 w-4.5 transition-transform duration-300 ${expanded ? "rotate-180 text-[#10E784]" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {link.dropdown && (
                    <div
                      className={`grid transition-all duration-300 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="ms-3 mb-2 flex flex-col border-s border-[#10E784]/30 ps-3">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              tabIndex={expanded ? undefined : -1}
                              className="flex min-h-[44px] items-center rounded-lg px-2 text-sm text-[#B9B3A8] transition-colors hover:bg-white/[0.06] hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="border-t border-white/10 bg-[#121716] p-3">
            <Button
              variant="emerald"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                setContactModalOpen(true);
              }}
              className="w-full min-h-[48px]"
            >
              Make the First Move
            </Button>
          </div>
        </div>
      </div>

      {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}

