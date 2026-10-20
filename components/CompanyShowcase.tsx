"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Building2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { companies, Company } from "@/data/companies";

export default function CompanyShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "active" | "coming-soon">("all");
  const [activeTab, setActiveTab] = useState<string>("kelvann-krystal");

  const filteredCompanies = companies.filter((company) => {
    if (selectedFilter === "all") return true;
    return company.status === selectedFilter;
  });

  const activeCompany = companies.find((c) => c.id === activeTab) || companies[0];

  return (
    <section id="our-companies" className="bg-[#061b31] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,166,224,0.18),transparent)] pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#00a6e0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-[#00a6e0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00a6e0]/15 border border-[#00a6e0]/30 text-[#00a6e0] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Corporate Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              OUR SUBSIDIARY COMPANIES
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
              The operational arms and strategic expansion verticals driving sustainable value across Kelvann Group.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 self-start lg:self-end">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === "all"
                  ? "bg-[#00a6e0] text-white shadow-lg shadow-[#00a6e0]/30"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              All Verticals ({companies.length})
            </button>
            <button
              onClick={() => setSelectedFilter("active")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === "active"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Active Subsidiary (1)
            </button>
            <button
              onClick={() => setSelectedFilter("coming-soon")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === "coming-soon"
                  ? "bg-white/20 text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Roadmap (3)
            </button>
          </div>
        </div>

        {/* 1. Premier Spotlight Card for Active Subsidiary: Kelvann Krystal Limited */}
        {(selectedFilter === "all" || selectedFilter === "active") && (
          <div className="mb-12">
            <div className="rounded-3xl bg-white text-[#142B4D] p-8 sm:p-12 lg:p-14 shadow-2xl border-2 border-white/20 relative overflow-hidden transition-all duration-500 hover:border-[#00a6e0] hover:shadow-cyan-900/20 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      ACTIVE SUBSIDIARY
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-slate-100 text-[#142B4D]">
                      NO. 01 • CORE ARM
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#142B4D] leading-tight">
                      KELVANN KRYSTAL LIMITED
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-[#00a6e0]">
                      Leading Strategic Operations and Industry Excellence
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    The flagship operating subsidiary of Kelvann Group of Companies Nigeria Limited, dedicated to delivering specialized operations, sustainable value creation, and industry-leading quality benchmarks.
                  </p>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#f0f5fa] text-[#142B4D] border border-slate-200">
                      ✓ Strategic Operational Arm
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#f0f5fa] text-[#142B4D] border border-slate-200">
                      ✓ Quality &amp; Compliance Driven
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#f0f5fa] text-[#142B4D] border border-slate-200">
                      ✓ Sustainable Value Creation
                    </span>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      href="/companies/kelvann-krystal"
                      className="inline-flex items-center gap-2.5 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:shadow-[#00a6e0]/30 transition-all active:scale-95 group/btn"
                    >
                      <span>EXPLORE SUBSIDIARY</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <Link
                      href="/companies/kelvann-krystal#works-portfolio"
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#142B4D] px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border border-slate-200"
                    >
                      <span>VIEW 13 ON-SITE WORKS</span>
                      <span className="text-[#00a6e0]">➔</span>
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group/img">
                    <img
                      src="/works/project-1.jpg"
                      alt="Kelvann Krystal Limited On-site Asphalt Operations"
                      className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    
                    {/* Floating Brand Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md shadow-md border border-white/50">
                      <img
                        src="/krystal/logo-transparent.png"
                        alt="Logo"
                        className="h-6 w-6 object-contain"
                      />
                      <span className="text-[11px] font-black text-[#142B4D] uppercase">
                        Kelvann Krystal
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#00a6e0] bg-black/60 px-2.5 py-1 rounded inline-block">
                        ACTIVE CIVIL OPERATIONS
                      </div>
                      <p className="font-bold text-sm sm:text-base mt-1.5">
                        Mechanized Road Paving &amp; Asphalt Infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Grid of Expansion Verticals */}
        {(selectedFilter === "all" || selectedFilter === "coming-soon") && (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                <span className="text-[#00a6e0]">●</span>
                <span>STRATEGIC EXPANSION ROADMAP</span>
              </h3>
              <span className="text-xs font-semibold text-slate-400">
                Future Verticals Under Governance
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies
                .filter((c) => c.status === "coming-soon")
                .map((vertical) => (
                  <div
                    key={vertical.id}
                    className="rounded-2xl bg-[#0c2847]/80 text-white border border-white/10 backdrop-blur-md p-7 flex flex-col justify-between hover:border-[#00a6e0]/50 hover:bg-[#0c2847] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6">
                        <img
                          src={vertical.image}
                          alt={vertical.name}
                          className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2847] via-transparent to-black/40" />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-black/60 text-white backdrop-blur-sm border border-white/20">
                            NO. {vertical.code}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-slate-200 backdrop-blur-md border border-white/20">
                            <Lock className="h-3 w-3" />
                            COMING SOON
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/15 text-slate-200 backdrop-blur-sm">
                            {vertical.sector}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-xl font-black text-white group-hover:text-[#00a6e0] transition-colors">
                        {vertical.name}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-cyan-400">
                        {vertical.tagline}
                      </p>

                      <p className="mt-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                        {vertical.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {vertical.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/10 text-slate-300"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span className="italic">Expansion Roadmap</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                        In Feasibility
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
