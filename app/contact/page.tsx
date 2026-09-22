"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Corporate Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. Navbar */}
      <Navbar currentPath="/contact" />

      {/* 2. Hero Section */}
      <section className="relative bg-[#061b31] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(0,166,224,0.2),transparent)]" />

        <div className="site-container relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-6">
            <Link href="/" className="hover:text-[#00a6e0] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#00a6e0]">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a6e0]/20 text-[#00a6e0] border border-[#00a6e0]/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              CONTACT KELVANN GROUP
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect with our corporate executive office for partnerships, commercial inquiries, subsidiary consultations, and stakeholder engagements.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Contact Information & Message Form */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Channels & Registered Address */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
                  Corporate Office
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#142B4D]">
                  HOW TO REACH US
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our corporate communications team is available to assist with inquiries across the parent holding and operating companies.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#142B4D]">Registered Headquarters</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      Kelvann Group Of Companies Nigeria Limited<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#142B4D]">Telephone Line</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      +234 811 701 3599
                    </p>
                    <span className="text-[11px] text-slate-400">Monday – Friday, 8:00 AM – 5:00 PM WAT</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shrink-0 shadow-md">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#142B4D]">Subsidiary Inquiries</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Direct inquiries for <strong>Kelvann Krystal Limited</strong> are routed through our central executive desk.
                    </p>
                    <Link
                      href="/companies/kelvann-krystal"
                      className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#00a6e0] hover:underline"
                    >
                      <span>Explore Kelvann Krystal Profile</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#f0f5fa] border border-slate-200 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#142B4D] mb-2">
                  SEND AN INQUIRY
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-8">
                  Please complete the form below and an executive representative will respond promptly.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-900">Message Sent Successfully</h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto">
                      Thank you for contacting Kelvann Group. Your inquiry has been dispatched to the appropriate department.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+234 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                          Inquiry Department
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                        >
                          <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                          <option value="Kelvann Krystal Commercial Partnership">Kelvann Krystal Commercial Partnership</option>
                          <option value="Investor & Stakeholder Relations">Investor &amp; Stakeholder Relations</option>
                          <option value="Procurement & Vendor Services">Procurement &amp; Vendor Services</option>
                          <option value="Media & Press">Media &amp; Press</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                        Message / Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all active:scale-95 cursor-pointer"
                    >
                      <span>TRANSMIT INQUIRY</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}
