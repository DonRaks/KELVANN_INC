import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  Phone,
  MapPin,
  HardHat,
  Truck,
  Compass,
  Sliders,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kelvann Krystal Limited | Operating Subsidiary of Kelvann Group",
  description:
    "Kelvann Krystal Limited is an operating subsidiary within the Kelvann Group of Companies Nigeria Limited corporate ecosystem.",
};

export default function KelvannKrystalPage() {
  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. Global Navbar tailored for Kelvann Krystal */}
      <Navbar currentPath="/companies/kelvann-krystal" />

      {/* 2. Hero & Breadcrumbs */}
      <section id="overview" className="relative bg-[#061b31] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,166,224,0.25),transparent)]" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-[#00a6e0] transition-colors">
              Kelvann Group
            </Link>
            <span>/</span>
            <Link href="/companies" className="hover:text-[#00a6e0] transition-colors">
              Our Companies
            </Link>
            <span>/</span>
            <span className="text-[#00a6e0]">Kelvann Krystal Limited</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Operating Subsidiary Vertical</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                KELVANN KRYSTAL LIMITED
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Operating within the Kelvann Group of Companies Nigeria Limited corporate ecosystem. Dedicated to operational discipline, high-grade project delivery, and corporate governance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#works-portfolio"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all"
                >
                  <span>Explore Kelvann Group Verified Works</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://wa.me/2348075743205?text=Hello%20Kelvann%20Group%20CEO%2C%20I%20am%20inquiring%20about%20Kelvann%20Krystal%20Limited."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all active:scale-95"
                >
                  <span>WhatsApp Executive Line (08075743205)</span>
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 transition-all"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Return to Group Portal</span>
                </Link>
              </div>
            </div>

            {/* Official Subsidiary Brand Emblem Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center max-w-xs w-full group">
                <div className="mx-auto w-36 h-36 rounded-2xl bg-white p-3 shadow-lg border border-slate-200/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/krystal/logo-transparent.png"
                    alt="Kelvann Krystal Limited Brand"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4 text-sm font-black text-white uppercase tracking-wider">
                  Kelvann Krystal Ltd
                </div>
                <div className="text-[11px] font-bold text-[#00a6e0] mt-0.5">
                  Subsidiary RC Registered
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  Part of Kelvann Group of Companies Nigeria Limited
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Role within Group & Engineering Profile */}
      <section id="about-subsidiary" className="py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00a6e0]">
                <Building2 className="h-4 w-4" />
                <span>Subsidiary Profile &amp; Governance</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#142B4D] tracking-tight leading-snug">
                Operating with Integrity as Kelvann Group&apos;s Subsidiary
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As a designated subsidiary of Kelvann Group of Companies Nigeria Limited, Kelvann Krystal Limited operates under central group governance, financial transparency, and ethical oversight. Our activities align with the overarching parent group vision of industrial excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#f0f5fa] border border-slate-200">
                  <ShieldCheck className="h-6 w-6 text-[#00a6e0] mb-2" />
                  <h3 className="text-sm font-bold text-[#142B4D]">Parent Governance</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Fully backed by parent group compliance, financial strength, and risk mitigation standards.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f0f5fa] border border-slate-200">
                  <Award className="h-6 w-6 text-[#00a6e0] mb-2" />
                  <h3 className="text-sm font-bold text-[#142B4D]">Standard Compliance</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Committed to statutory regulations and federal operating guidelines across all operational activities.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/#works-portfolio"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a6e0] hover:text-[#142B4D] transition-colors"
                >
                  <span>Explore All 13 Verified Operations on Kelvann Group Portal</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right Card Showing Corporate Facility / Brand Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-[#061b31] p-8 text-white">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00a6e0]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase">
                  <span>● Active Vertical</span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white">
                  Kelvann Krystal Limited
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  A registered business arm of Kelvann Group of Companies Nigeria Limited, structured for commercial initiatives, infrastructure support, and operational expansion.
                </p>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-[#00a6e0]">EXECUTIVE CONTACT</div>
                  <div className="text-sm font-bold">Direct Access to Executive Leadership</div>
                  <div className="text-xs text-slate-300">WhatsApp / Call: 08075743205</div>
                </div>

                <a
                  href="https://wa.me/2348075743205?text=Hello%20Executive%20Office%2C%20I%20would%20like%20to%20connect%20with%20Kelvann%20Krystal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#20ba59] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all"
                >
                  <span>Open WhatsApp Direct Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact-subsidiary" className="py-20 lg:py-28 bg-[#f0f5fa] border-t border-slate-200">
        <div className="site-container max-w-4xl">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#061b31] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00a6e0]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a6e0]/15 text-[#00a6e0] text-xs font-bold uppercase tracking-wider mb-3">
                <Phone className="h-3.5 w-3.5" />
                <span>Executive Office Direct Link</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                Engage Executive Leadership
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-xl">
                For commercial inquiries, strategic partnerships, tenders, and operational consultations.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center text-[#00a6e0] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Corporate Headquarters</div>
                    <div className="text-slate-400 mt-0.5">Kelvann Group of Companies Nigeria Limited</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="h-11 w-11 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Direct CEO / WhatsApp</div>
                    <div className="text-slate-400 mt-0.5">08075743205 (+234 807 574 3205)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://wa.me/2348075743205?text=Hello%20CEO%2C%20I%20am%20reaching%20out%20via%20the%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>Chat on WhatsApp (08075743205)</span>
                  <span aria-hidden="true">→</span>
                </a>

                <Link
                  href="/"
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  ← Return to Kelvann Group Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
