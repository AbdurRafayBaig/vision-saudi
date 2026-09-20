"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactFormModal } from "@/components/forms/ContactFormModal";
import { VisionSaudiLogo } from "@/components/ui/VisionSaudiLogo";
import { translator } from "@/lib/messages";

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
    ],
  },
  { name: t("nav.realEstate"), href: "/services/real-estate" },
  { name: t("nav.about"), href: "/about" },
  { name: t("nav.contact"), href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
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

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setServicesDropdownOpen(false), 150);
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
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`whitespace-nowrap inline-flex items-center gap-1 text-[13px] xl:text-[14px] font-medium py-1.5 transition-colors duration-300 ${
                        isActive
                          ? "text-[#10E784] font-semibold"
                          : "text-white/85 hover:text-[#10E784]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`h-3.5 w-3.5 text-[#10E784] transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>

                    <div className={`absolute top-full start-0 w-72 pt-3 transition-all duration-300 ${
                      servicesDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
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
                  className={`whitespace-nowrap inline-flex items-center gap-1.5 text-[13px] xl:text-[14px] font-medium py-1.5 transition-colors duration-300 ${
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
            <Button
              variant="emerald"
              size="sm"
              onClick={() => setContactModalOpen(true)}
            >
              Make the First Move
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#10E784] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — Dark Luxury Takeover */}
      <div
        className={`fixed inset-0 z-50 bg-[#0A0D0C] text-white flex flex-col transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div onClick={() => setMobileMenuOpen(false)}>
            <VisionSaudiLogo variant="white" size="md" />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#B9B3A8] hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-10 flex flex-col gap-2 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3.5 text-2xl font-display font-medium text-white hover:text-[#10E784] transition-colors"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="ps-4 pb-2 flex flex-col gap-1 border-s-2 border-[#10E784]/40 ms-1">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex min-h-[44px] items-center text-sm text-[#B9B3A8] hover:text-white transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-white/10 bg-[#101312]">
          <Button
            variant="emerald"
            size="md"
            onClick={() => {
              setMobileMenuOpen(false);
              setContactModalOpen(true);
            }}
            className="w-full"
          >
            Make the First Move
          </Button>
          <p className="text-center text-xs text-[#B9B3A8] mt-4 font-mono">
            Riyadh · Jeddah · Kingdom of Saudi Arabia
          </p>
        </div>
      </div>

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}

