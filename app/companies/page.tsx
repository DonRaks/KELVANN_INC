"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyShowcase from "@/components/CompanyShowcase";
import GroupEcosystem from "@/components/GroupEcosystem";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

/**
 * -----------------------------------------------------------------------------
 * CompaniesPage Component
 * -----------------------------------------------------------------------------
 * Displays the comprehensive corporate subsidiaries directory and holding structure
 * for Kelvann Group of Companies Nigeria Limited.
 *
 * Page Architecture & Section Hierarchy:
 * 1. Global Navigation Bar (`<Navbar currentPath="/companies" />`).
 * 2. Hero Section: Introduces corporate holding portfolio and subsidiary roadmap.
 * 3. Interactive Showcase (`<CompanyShowcase />`): Horizontal scroll of companies.
 * 4. Subsidiary Spotlight: Dedicated feature module for flagship entity (Kelvann Krystal).
 * 5. Holding Ecosystem (`<GroupEcosystem />`): Structural breakdown of governance.
 * 6. Global Site Footer (`<Footer />`).
 */
export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. Header Navigation                                                    */}
      {/* ----------------------------------------------------------------------- */}
      <Navbar currentPath="/companies" />

      {/* ----------------------------------------------------------------------- */}
      {/* 2. Hero Section: Portfolio & Roadmap Overview                           */}
      {/* ----------------------------------------------------------------------- */}
      <section className="relative bg-[#061b31] text-white py-16 lg:py-24 overflow-hidden">
        {/* Subtle decorative radial gradient accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,166,224,0.2),transparent)]" />

        <div className="site-container relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-[#00a6e0] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#00a6e0]">Our Companies &amp; Ecosystem</span>
          </div>

          {/* Hero Typography Block */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a6e0]/20 text-[#00a6e0] border border-[#00a6e0]/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Subsidiaries &amp; Roadmap</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              OUR SUBSIDIARIES
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover how Kelvann Group scales capabilities across strategic sectors through dedicated operating subsidiaries, spearheaded by our premier company, Kelvann Krystal Limited.
            </p>
          </div>
        </div>
      </section>


      {/* 3. The Signature Company Showcase (Horizontal Scroll) */}
      <CompanyShowcase />

      {/* 4. Kelvann Krystal Feature Spotlight */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="site-container">
          <div className="rounded-3xl bg-gradient-to-br from-[#061b31] to-[#142B4D] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a6e0]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Flagship Operating Subsidiary</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  KELVANN KRYSTAL LIMITED
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  As the primary active subsidiary of Kelvann Group, Kelvann Krystal Limited leads specialized commercial execution with exceptional operational rigour and compliance.
                </p>

                <div className="pt-2">
                  <Link
                    href="/companies/kelvann-krystal"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all"
                  >
                    <span>VIEW DEDICATED SUBSIDIARY PROFILE</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#00a6e0]/40 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                    alt="Kelvann Krystal Limited Flagship"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#00a6e0] bg-black/60 px-2.5 py-1 rounded">
                      ESTABLISHED SUBSIDIARY
                    </span>
                    <p className="text-white font-bold text-sm mt-1">
                      Kelvann Krystal Limited • Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Holding Ecosystem & Structure */}
      <GroupEcosystem />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
