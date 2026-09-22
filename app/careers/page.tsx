"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle2,
  Send,
  Mail,
  Phone,
} from "lucide-react";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "General Inquiries",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. Navbar */}
      <Navbar currentPath="/careers" />

      {/* 2. Hero Section */}
      <section className="relative bg-[#061b31] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,166,224,0.2),transparent)]" />

        <div className="site-container relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-[#00a6e0] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#00a6e0]">Careers &amp; Opportunities</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a6e0]/20 text-[#00a6e0] border border-[#00a6e0]/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Talent &amp; Culture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              JOIN KELVANN GROUP
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Build your career with a forward-thinking corporate group committed to operational excellence, continuous learning, and scalable industry impact.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Build With Us */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
              Our People Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#142B4D] tracking-tight">
              WHY WORK AT KELVANN GROUP
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We empower professionals with meaningful responsibility, career acceleration, and a culture of integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shadow-md">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-[#142B4D]">Accelerated Career Growth</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Work across dynamic corporate initiatives and expanding subsidiaries with clear pathways for leadership and functional advancement.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shadow-md">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-[#142B4D]">Excellence &amp; Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Join a values-driven organization that upholds the highest ethical standards, governance rigor, and operational quality.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shadow-md">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-[#142B4D]">Collaborative Ecosystem</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Collaborate with dedicated teams and industry experts across our parent holding and subsidiary operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Talent Inquiries & Application Form */}
      <section className="py-20 lg:py-24 bg-[#f0f5fa]">
        <div className="site-container max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
                Talent Pool Submission
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#142B4D]">
                SUBMIT YOUR CREDENTIALS
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Interested in future opportunities across Kelvann Group or our operating subsidiaries? Submit your profile to our human capital team.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900">Application Received</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for your interest in Kelvann Group. Our talent acquisition team has received your information and will reach out when matching opportunities arise.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Okon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                      Area of Expertise / Sector
                    </label>
                    <select
                      value={formData.expertise}
                      onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                    >
                      <option value="Operations & Project Management">Operations &amp; Project Management</option>
                      <option value="Engineering & Infrastructure">Engineering &amp; Infrastructure</option>
                      <option value="Finance & Accounting">Finance &amp; Accounting</option>
                      <option value="Corporate Governance & Legal">Corporate Governance &amp; Legal</option>
                      <option value="Technology & Systems">Technology &amp; Systems</option>
                      <option value="General Inquiries">General / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                    Cover Note / Experience Summary
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly about your professional background and areas of interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <span>SUBMIT CANDIDACY</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
