"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { NextStepCTA } from "@/components/ui/NextStepCTA";
import { MASTER_INSIGHTS } from "@/data/insights";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { ContactFormModal } from "@/components/forms/ContactFormModal";

export default function InsightsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Derived, so a new article's category appears as a filter and a filter can
  // never offer a category that no article has.
  const categories = ["All", ...new Set(MASTER_INSIGHTS.map((a) => a.category))];

  const featuredArticle = MASTER_INSIGHTS[0];
  const remainingArticles = MASTER_INSIGHTS.slice(1);

  const filteredArticles = selectedCategory === "All"
    ? remainingArticles
    : remainingArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen transition-colors duration-300">
      {/* Hero Section — Type C Editorial Publication */}
      <PageHero
        type="type-c"
        category="MARKET INTELLIGENCE & EDITORIAL"
        title="Perspective on the Kingdom's transformation."
        subtitle="Strategic analysis on Saudi market entry, foreign investment regulations, real estate advisory, and Vision 2030 commercial frameworks."
        imageSrc="/images/insights-header.webp"
        imageAlt="Saudi Intelligence & Research Analysis"
        primaryCtaLabel="Subscribe to Insights"
        onPrimaryCtaClick={() => setModalOpen(true)}
        customVisual={
          <div className="bg-white/[0.03] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-6 backdrop-blur-2xl relative group hover-green-box transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10E784] to-transparent opacity-80" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs text-[#D8CCB8] uppercase tracking-wider">EDITORIAL PUBLICATION</span>
              <span className="text-xs font-bold text-[#10E784] px-3.5 py-1 bg-[#10E784]/15 border border-[#10E784]/30 rounded-full font-mono">STRATEGIC RESEARCH</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white/[0.03] border-l-4 border-[#10E784] rounded-2xl">
                <span className="text-xs text-[#10E784] uppercase font-bold block mb-1">LEAD ANALYSIS</span>
                <div className="text-xs font-bold text-white leading-snug">ISIC 4 Foreign Ownership & MISA License Regulations</div>
              </div>

              <div className="p-4 bg-white/[0.03] border-l-4 border-[#10E784] rounded-2xl">
                <span className="text-xs text-[#10E784] uppercase font-bold block mb-1">REAL ESTATE BRIEF</span>
                <div className="text-xs font-bold text-white leading-snug">Riyadh Commercial Office Yields & REGA Rules</div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#B9B3A8] font-light flex items-center justify-between border-t border-white/10">
              <span>Quarterly Advisory Journal</span>
              <BookOpen className="h-4 w-4 text-[#10E784]" />
            </div>
          </div>
        }
      />

      {/* Featured Lead Article */}
      {featuredArticle && (
        <section className="py-[var(--space-section)] bg-[#101312] border-b border-white/10 transition-colors duration-300">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <div className="p-8 sm:p-12 bg-white/[0.03] border border-white/10 rounded-3xl shadow-xl relative overflow-hidden group hover:border-[#10E784]/60 transition-all duration-300 backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#10E784] tracking-widest uppercase px-3.5 py-1 bg-[#10E784]/10 border border-[#10E784]/30 rounded-full">
                      FEATURED ANALYSIS
                    </span>
                    <span className="text-xs font-medium text-[#B9B3A8] inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#10E784]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4 leading-tight group-hover:text-[#10E784] transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-[#B9B3A8] text-base leading-relaxed font-light mb-8 max-w-xl">
                    {featuredArticle.excerpt}
                  </p>

                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 py-3 -my-3 text-xs font-bold uppercase tracking-wider text-[#10E784] hover:gap-3 transition-all duration-300"
                  >
                    <span>Read Strategic Analysis</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                    <Image
                      src="/images/corporateBusinessServices.webp"
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Editorial Article List & Category Filter */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#10E784] text-xs font-bold tracking-widest mb-3 uppercase">
                PUBLICATION LIBRARY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Strategic publications.
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 min-h-[44px] text-xs font-mono font-semibold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#10E784] text-slate-950 shadow-md font-bold"
                      : "bg-white/[0.04] text-[#B9B3A8] border border-white/10 hover:border-[#10E784]/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, idx) => (
              <Reveal delay={idx * 0.1} key={article.id} y={20} className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#10E784]/60 transition-all duration-300 shadow-lg group backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#10E784] uppercase tracking-wider px-3.5 py-1 bg-[#10E784]/10 border border-[#10E784]/30 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs font-medium text-[#B9B3A8] inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#10E784]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-white font-bold mb-3 group-hover:text-[#10E784] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[#B9B3A8] text-sm font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-[#10E784] group-hover:text-white transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <NextStepCTA
        eyebrow="Market Intelligence"
        headline="Request custom strategic research for your KSA entry."
        subtext="Our strategy team provides bespoke market analysis, ISIC 4 activity audits, and regulatory feasibility reports tailored to your enterprise."
        primaryCtaText="Make the First Move"
        onPrimaryCtaClick={() => setModalOpen(true)}
      />

      <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

