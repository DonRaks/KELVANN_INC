import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  TrendingUp,
  Building,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kelvann Group Of Companies Nigeria Limited",
  description:
    "Learn about Kelvann Group of Companies Nigeria Limited, our corporate leadership, strategic vision, governance, and chairman's message.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. Navbar */}
      <Navbar currentPath="/about-us" />

      {/* 2. Page Hero */}
      <section className="relative bg-[#061b31] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,166,224,0.2),transparent)]" />

        <div className="site-container relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-[#00a6e0] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#00a6e0]">About Us &amp; Leadership</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a6e0]/20 text-[#00a6e0] border border-[#00a6e0]/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Corporate Overview</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              ABOUT KELVANN GROUP
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Kelvann Group of Companies Nigeria Limited is an ambitious, governance-led parent corporate group dedicated to building resilient businesses and driving sustainable industrial growth across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Group Mission & Story */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0]">
                Our Corporate Identity
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#142B4D] tracking-tight leading-[1.15]">
                ONE GROUP.<br />
                <span className="text-[#00a6e0]">A GROWING VISION.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As a structured parent corporate entity, Kelvann Group of Companies Nigeria Limited oversees strategic planning, capital allocation, executive leadership, and compliance frameworks for all constituent operations.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe that long-term enterprise value is built upon disciplined corporate governance, uncompromising quality benchmarks, and the continuous development of high-impact subsidiaries that solve real industrial needs.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/companies"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all"
                >
                  <span>Explore Our Subsidiaries</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f0f5fa] hover:bg-slate-200 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#142B4D] border border-slate-200 transition-all"
                >
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00a6e0] uppercase">
                  <Target className="h-4 w-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-base font-black text-[#142B4D]">Building Sustainable Value</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To establish and scale high-standard operating companies that contribute meaningfully to economic development, industry innovation, and community prosperity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00a6e0] uppercase">
                  <Award className="h-4 w-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-base font-black text-[#142B4D]">Excellence Across Sectors</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To become a premier multi-sector conglomerate recognized for corporate integrity, operational reliability, and future-forward leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Governance Pillars */}
      <section className="py-20 bg-[#f0f5fa] border-b border-slate-200">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
              Foundational Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#142B4D] tracking-tight">
              OUR CORE PILLARS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              The corporate bedrock guiding every investment, decision, and subsidiary initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <Shield className="h-8 w-8 text-[#00a6e0]" />
              <h3 className="text-base font-black text-[#142B4D]">Strategic Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disciplined parent oversight ensuring strict regulatory compliance, ethical stewardship, and accountability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <TrendingUp className="h-8 w-8 text-[#00a6e0]" />
              <h3 className="text-base font-black text-[#142B4D]">Scalable Expansion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured expansion frameworks positioned to enter and develop emerging industrial verticals methodically.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <Building className="h-8 w-8 text-[#00a6e0]" />
              <h3 className="text-base font-black text-[#142B4D]">Operating Excellence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empowering operating subsidiaries like Kelvann Krystal Limited to maintain the highest quality execution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <Globe2 className="h-8 w-8 text-[#00a6e0]" />
              <h3 className="text-base font-black text-[#142B4D]">Sustainable Impact</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fostering long-term relationships with clients, partners, and community stakeholders for lasting progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Chairman's Message */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
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
            <div className="h-36 w-36 shrink-0 rounded-2xl overflow-hidden shadow-md bg-slate-200 border-2 border-white">
            
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

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
