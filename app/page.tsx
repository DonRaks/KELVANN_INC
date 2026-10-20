"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyShowcase from "@/components/CompanyShowcase";
import GroupEcosystem from "@/components/GroupEcosystem";
import WorksParallaxShowcase from "@/components/WorksParallaxShowcase";
import {
  Sparkles,
  ArrowRight,
  Shield,
  TrendingUp,
  Building,
  Globe2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. STICKY ENHANCED NAVBAR WITH OFFICIAL LOGO & ROUTING */}
      <Navbar currentPath="/" />

      {/* 2. HERO SECTION */}
      <section className="hero-wrapper relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center text-center px-4 py-24">
        <div className="hero-network-overlay" />

        <div className="site-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A3E0] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Parent Corporate Enterprise</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black uppercase text-white leading-[1.08] tracking-tight drop-shadow-md">
            BUILDING THE FUTURE<br />OF INDUSTRY
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-xl font-normal text-white/95 leading-relaxed">
            The Corporate Home of Kelvann Group&apos;s Diverse Subsidiaries • Construction, Oil &amp; Gas, Procurement, Solar Lighting &amp; Global Standards
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/companies"
              className="inline-flex items-center gap-3 rounded-xl bg-[#00A3E0] hover:bg-[#0090c4] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:shadow-[#00A3E0]/40 transition-all active:scale-95 cursor-pointer group"
            >
              <span>EXPLORE OUR BUSINESSES</span>
              <span aria-hidden="true" className="text-base font-bold transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="#works-portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all active:scale-95"
            >
              <span>EXPLORE VERIFIED WORKS</span>
              <span className="text-[#00A3E0]">↓</span>
            </a>

            
          </div>
        </div>
      </section>

      {/* 3. GROUP INTRODUCTION (ONE GROUP. A GROWING VISION.) */}
      <section className="bg-white py-20 lg:py-24 border-b border-slate-100">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00a6e0]">
                <span>About Kelvann Group</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#142B4D] tracking-tight leading-[1.15]">
                ONE GROUP.<br />
                <span className="text-[#00a6e0]">A GROWING VISION.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Kelvann Group of Companies Nigeria Limited serves as the parent corporate organization, providing strategic leadership, long-term stewardship, and governance across diverse operational initiatives.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Structured for sustainable scalability, the Group advances through dedicated subsidiaries—anchored by our premier operating company, <strong>Kelvann Krystal Limited</strong>—while preparing systematic expansion into future high-impact sectors.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#142B4D]">01</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Active Subsidiary</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#00a6e0]">3+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Expansion Verticals</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a6e0] hover:text-[#142B4D] transition-colors"
                >
                  <span>Learn More About Our Leadership &amp; Vision</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-3">
                <Shield className="h-8 w-8 text-[#00a6e0]" />
                <h3 className="text-base font-black text-[#142B4D]">Strategic Governance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Disciplined parent company oversight ensuring operational integrity, compliance, and enterprise resilience.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-3">
                <TrendingUp className="h-8 w-8 text-[#00a6e0]" />
                <h3 className="text-base font-black text-[#142B4D]">Scalable Expansion</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategic growth blueprints positioned to capture emerging industrial and commercial opportunities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-3">
                <Building className="h-8 w-8 text-[#00a6e0]" />
                <h3 className="text-base font-black text-[#142B4D]">Operating Excellence</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivering high-caliber execution through specialized, mission-aligned subsidiary companies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-3">
                <Globe2 className="h-8 w-8 text-[#00a6e0]" />
                <h3 className="text-base font-black text-[#142B4D]">Sustainable Impact</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Creating enduring value for clients, stakeholders, and communities across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR COMPANIES — HORIZONTAL SHOWCASE CAROUSEL (GSAP SCROLLTRIGGER) */}
      <CompanyShowcase />

      {/* 5. KELVANN GROUP VERIFIED WORKS & INFRASTRUCTURE SITES (GSAP PARALLAX SHOWCASE) */}
      <WorksParallaxShowcase />

      {/* 6. GROUP FUTURE & CORPORATE ECOSYSTEM */}
      <GroupEcosystem />

      {/* 7. CHAIRMAN'S MESSAGE */}
      <section className="bg-white py-20 lg:py-24 border-b border-slate-200">
        <div className="site-container max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
              Corporate Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#142B4D] tracking-tight">
              CHAIRMAN&apos;S MESSAGE
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#f0f5fa] border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm">
            {/* Portrait Image */}
            <div className="h-32 w-32 shrink-0 rounded-2xl overflow-hidden shadow-md bg-slate-200 border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
                alt="Chairman Portrait"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Quote */}
            <div className="flex-1 flex items-start gap-4">
              <span className="quote-symbol select-none hidden sm:inline-block">&ldquo;</span>

              <div className="space-y-4">
                <p className="text-sm sm:text-base italic text-[#475569] leading-relaxed">
                  &ldquo;Our commitment remains the foundation of Kelvann Group&apos;s success. Through sustainable practices, innovative solutions, and a dedicated team, we continue to create value for our stakeholders and contribute to a brighter future.&rdquo;
                </p>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-sm font-bold text-[#142B4D]">
                    Chairman of the Board
                  </div>
                  <div className="text-xs text-[#00a6e0] font-semibold">
                    Kelvann Group of Companies Nigeria Limited
                  </div>
                </div>
              </div>

              <span className="quote-symbol hidden lg:inline-block select-none self-end">&rdquo;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS & UPDATES */}
      <section className="bg-[#f0f5fa] py-20 lg:py-24">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
              Corporate Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase text-[#142B4D] tracking-tight">
              LATEST NEWS &amp; UPDATES
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Recent corporate developments, initiatives, and strategic updates from across the Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News 1 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    CORPORATE
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Group Advances Strategic Governance Framework for Group Operations
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    The parent organization strengthens oversight systems, setting unified compliance standards.
                  </p>
                </div>
                <Link
                  href="/about-us"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>READ BRIEFING</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* News 2 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">
                    SUBSIDIARY
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Krystal Limited Scales High-Standard Commercial Execution
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    Core operating arm continues to strengthen execution excellence within its operational sectors.
                  </p>
                </div>
                <Link
                  href="/companies/kelvann-krystal"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>EXPLORE SUBSIDIARY</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* News 3 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    EXPANSION
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Group Initiates Feasibility Roadmaps for Sector Growth
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    Corporate development team conducts detailed market assessments for upcoming enterprise verticals.
                  </p>
                </div>
                <Link
                  href="/companies"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>VIEW ROADMAP</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* News 4 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    PARTNERSHIPS
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Group Reaffirms Commitment to Sustainable Industry Stewardship
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    The Group fosters strategic stakeholder relationships aimed at creating long-term value.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>CONNECT WITH US</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 9. SHARED REUSABLE FOOTER */}
      <Footer />
    </main>
  );
}