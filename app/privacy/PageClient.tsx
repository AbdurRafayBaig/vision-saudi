import React from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SITE, mailtoUrl } from "@/lib/site-config";

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0D0C] text-white overflow-x-hidden min-h-screen">
      {/* Hero Header */}
      <PageHero
        type="type-d"
        category="GOVERNANCE & PRIVACY"
        title="Privacy Policy"
        subtitle="How Vision Saudi protects confidential client disclosures and personal data in accordance with KSA laws."
      />

      {/* Content */}
      <section className="py-[var(--space-section-lg)] bg-[#0A0D0C]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-[#A39B8B]">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 font-light text-sm leading-relaxed shadow-2xl">
            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                1. Data Protection Commitment
              </h2>
              <p>
                Vision Saudi (&ldquo;Vision Saudi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting confidential personal and commercial data submitted through our digital platform in accordance with the Kingdom of Saudi Arabia Personal Data Protection Law (PDPL).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                2. Information Collection & Usage
              </h2>
              <p>
                We collect information provided directly by clients when requesting strategic advisory, business setup evaluation, real estate briefs, Premium Residency assessments, or partnership applications. Collected data is strictly utilized to evaluate commercial requirements, facilitate ministry filings, and activate ecosystem services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                3. Cookies &amp; Analytics
              </h2>
              <p className="mb-3">
                This site sets no advertising or tracking cookies. On your first visit you are asked whether to allow analytics; nothing is loaded until you accept, and declining leaves the site fully usable.
              </p>
              <p className="mb-3">
                If you accept, Google Analytics is loaded and records pages viewed, approximate location by country, device type and whether you opened the enquiry form, downloaded the guide or used the WhatsApp or telephone links. It does not receive your name, email or telephone number.
              </p>
              <p>
                Your choice is stored in your own browser, not on our servers. Clearing your browser data resets it and you will be asked again.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                4. Who Else Sees Your Data
              </h2>
              <p className="mb-3">
                An enquiry is delivered to our team by email and recorded in a private spreadsheet so that it cannot be lost. Both run on Google Workspace. Email delivery uses Resend, and the site is hosted on Vercel, whose server logs include IP addresses for security and abuse prevention.
              </p>
              <p>
                We do not sell personal data and we do not share it for marketing. Where an engagement requires it, details are shared with the Saudi authority handling your filing, or with a named partner firm, and only to the extent that filing requires.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                5. How Long We Keep It
              </h2>
              <p className="mb-3">
                Enquiries that do not lead to an engagement are kept for 24 months, so that we can pick up a conversation you return to, and then deleted. Records belonging to an active or completed engagement are kept for as long as Saudi commercial and tax law requires us to keep them.
              </p>
              <p>
                Analytics data is retained by Google for 14 months.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                6. Your Rights Under the PDPL
              </h2>
              <p className="mb-3">
                Under the Personal Data Protection Law you may ask what we hold about you, ask for it to be corrected, ask for it to be deleted, withdraw a consent you gave, and ask for a copy of what you provided. Exercising any of these costs nothing and will not affect how we deal with you.
              </p>
              <p>
                Write to <a href={mailtoUrl()} className="text-[#10E784] underline underline-offset-2">{SITE.email}</a> and we will respond within 30 days. If you are not satisfied with our response you may complain to the Saudi Data &amp; Artificial Intelligence Authority (SDAIA).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-white font-bold mb-3">
                7. Regulatory Disclaimers &amp; Ministry Policy
              </h2>
              <p>
                Vision Saudi provides corporate advisory, ecosystem integration, and post-establishment facilitation. Official Ministry of Investment (MISA) licenses, Commercial Registrations (CR), and regulatory permits remain subject to official Kingdom of Saudi Arabia ministry policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
