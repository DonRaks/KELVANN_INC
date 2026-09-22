"use client";

import React from "react";
import Link from "next/link";
import { Building2, Layers, CheckCircle2, Clock, ArrowUpRight, GitFork } from "lucide-react";

export default function GroupEcosystem() {
  return (
    <section className="bg-[#f0f5fa] py-20 lg:py-28 border-y border-slate-200">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#00a6e0] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <GitFork className="h-3.5 w-3.5" />
            <span>Group Structure &amp; Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#142B4D] tracking-tight">
            THE KELVANN ECOSYSTEM
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            A structured parent holding model designed for disciplined enterprise governance, cross-sector capability building, and scalable future acquisitions.
          </p>
        </div>

        {/* Ecosystem Tree / Architecture Layout */}
        <div className="max-w-4xl mx-auto">
          {/* 1. Parent Node */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-[#142B4D] text-white p-6 rounded-2xl shadow-xl border border-[#00a6e0]/30 text-center relative z-10">
              <div className="inline-block px-2.5 py-0.5 rounded bg-[#00a6e0] text-[10px] font-black uppercase tracking-widest text-white mb-2">
                Parent Corporation
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                KELVANN GROUP OF COMPANIES
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Strategic Stewardship • Capital Allocation • Governance
              </p>
            </div>

            {/* Connecting Vertical Stem */}
            <div className="h-10 w-0.5 bg-gradient-to-b from-[#142B4D] to-[#00a6e0]" />
          </div>

          {/* 2. Branching Grid */}
          <div className="relative pt-2">
            {/* Horizontal Branch Bar */}
            <div className="hidden sm:block absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#00a6e0]/40" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Active Branch: Kelvann Krystal */}
              <div className="relative bg-white p-7 rounded-2xl border-2 border-[#00a6e0] shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      ACTIVE SUBSIDIARY
                    </span>
                    <span className="text-xs font-bold text-slate-400">Node 01</span>
                  </div>

                  <h4 className="text-xl font-black text-[#142B4D] group-hover:text-[#00a6e0] transition-colors">
                    Kelvann Krystal Limited
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The core operating subsidiary of the Group, delivering focused industrial and commercial solutions with uncompromising quality standards.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/companies/kelvann-krystal"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00a6e0] hover:text-[#142B4D] transition-colors"
                  >
                    <span>View Subsidiary Profile</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <span className="text-[11px] font-semibold text-slate-400">Established</span>
                </div>
              </div>

              {/* Planned Branches: Expansion Nodes */}
              <div className="relative bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-dashed border-slate-300 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      PLANNED EXPANSION
                    </span>
                    <span className="text-xs font-bold text-slate-400">Node 02–04</span>
                  </div>

                  <h4 className="text-xl font-black text-slate-700">
                    Future Subsidiaries
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Strategic verticals currently undergoing feasibility assessments across energy, infrastructure, and technology sectors.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 italic">
                    Expansion Roadmap Under Governance
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
