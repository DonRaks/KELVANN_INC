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
  Globe2,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kelvann Krystal Limited | Subsidiary of Kelvann Group",
  description:
    "Kelvann Krystal Limited is the active core operating subsidiary of Kelvann Group of Companies Nigeria Limited.",
};

export default function KelvannKrystalPage() {
  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. Global Navbar */}
      <Navbar currentPath="/companies/kelvann-krystal" />

      {/* 2. Hero & Breadcrumbs */}
      <section className="relative bg-[#061b31] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,166,224,0.2),transparent)]" />

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

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Active Operating Subsidiary</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              KELVANN KRYSTAL LIMITED
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              The premier subsidiary within the Kelvann Group of Companies Nigeria Limited corporate ecosystem, focused on operational excellence, quality management, and sustainable industry development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all"
              >
                <span>Inquire with Subsidiary Desk</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/companies"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10 transition-all"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Companies Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Role within Group */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#00a6e0]">
                <Building2 className="h-4 w-4" />
                <span>Corporate Profile</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#142B4D] tracking-tight leading-snug">
                Driving Excellence as Kelvann Group&apos;s Core Operational Arm
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As the flagship operating subsidiary of Kelvann Group, Kelvann Krystal Limited embodies the group’s values of integrity, quality, and forward-thinking industry practices. Backed by corporate group governance, the company executes projects with precision and high standard adherence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-[#f0f5fa] border border-slate-200">
                  <ShieldCheck className="h-6 w-6 text-[#00a6e0] mb-2" />
                  <h3 className="text-sm font-bold text-[#142B4D]">Corporate Governance</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Fully aligned with Kelvann Group compliance and sustainability standards.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#f0f5fa] border border-slate-200">
                  <Award className="h-6 w-6 text-[#00a6e0] mb-2" />
                  <h3 className="text-sm font-bold text-[#142B4D]">Quality Standards</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Dedicated to dependable execution across every operational engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Kelvann Krystal Limited Operations"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b31]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-[#00a6e0]">
                  Operating Subsidiary
                </div>
                <div className="text-lg font-black mt-1">
                  Kelvann Krystal Limited • Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Integration with Parent Group */}
      <section className="py-16 bg-[#f0f5fa] border-y border-slate-200">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#142B4D]">
              Part of the Kelvann Group Ecosystem
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kelvann Krystal Limited collaborates synergistically within the broader group structure, benefiting from unified strategic leadership, financial strength, and continuous capability enhancement.
            </p>
            <div className="pt-4">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a6e0] hover:text-[#142B4D]"
              >
                <span>View Full Group Expansion Portfolio</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact-subsidiary" className="py-16 lg:py-24 bg-white">
        <div className="site-container max-w-4xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#142B4D] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Connect with Kelvann Krystal Limited
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                For commercial inquiries, project partnerships, and operational consultations.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00a6e0] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Registered Address</div>
                    <div>Kelvann Group Of Companies Nigeria Limited</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00a6e0] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Contact Line</div>
                    <div>+234 811 701 3599</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#00a6e0] hover:underline"
                >
                  ➔ Go to Central Inquiries Desk
                </Link>
                <Link
                  href="/"
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
