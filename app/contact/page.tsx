"use client";

import React, { useState, useMemo } from "react";
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
  ArrowRight,
  MessageCircle,
} from "lucide-react";

/**
 * -----------------------------------------------------------------------------
 * Type Definitions
 * -----------------------------------------------------------------------------
 */
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface TargetMailboxes {
  primary: string;
  cc: string;
}

/**
 * Default initial form values.
 */
const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "General Corporate Inquiry (Kelvanngroup@gmail.com)",
  message: "",
};

/**
 * Corporate email addresses used across the contact portal.
 */
const CORPORATE_MAILBOXES = {
  GROUP: "Kelvanngroup@gmail.com",
  KRYSTAL: "Kelvannkrystal@gmail.com",
  CEO_WHATSAPP_NUMBER: "2348075743205",
} as const;

/**
 * -----------------------------------------------------------------------------
 * ContactPage Component
 * -----------------------------------------------------------------------------
 * Implements the public-facing contact experience for Kelvann Group of Companies.
 *
 * Technical Highlights:
 * 1. Asynchronous dispatch to the internal Next.js API (`/api/contact`).
 * 2. Dynamic mailbox determination based on user inquiry topic (Krystal vs Group).
 * 3. Fallback channels: Direct WhatsApp CEO escalation link and desktop `mailto:` URL.
 * 4. Optimistic UI with loading state animations and comprehensive validation.
 */
export default function ContactPage() {
  /** Form submission state management */
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  /** Resolved recipient state returned by server */
  const [targetEmails, setTargetEmails] = useState<TargetMailboxes>({
    primary: CORPORATE_MAILBOXES.GROUP,
    cc: CORPORATE_MAILBOXES.KRYSTAL,
  });

  /**
   * Evaluates current subject selection in real-time to compute dynamic recipient preview.
   * This gives the user immediate visual feedback of which inbox receives their inquiry.
   */
  const { dynamicPrimaryEmail, dynamicCcEmail } = useMemo(() => {
    const isKrystal =
      formData.subject.toLowerCase().includes("krystal") ||
      formData.subject.toLowerCase().includes("commercial partnership");

    return {
      dynamicPrimaryEmail: isKrystal
        ? CORPORATE_MAILBOXES.KRYSTAL
        : CORPORATE_MAILBOXES.GROUP,
      dynamicCcEmail: isKrystal
        ? CORPORATE_MAILBOXES.GROUP
        : CORPORATE_MAILBOXES.KRYSTAL,
    };
  }, [formData.subject]);

  /**
   * Generates a pre-filled RFC-compliant mailto URI for desktop/mobile mail clients.
   * Serves as an instant fallback if the client is on a restricted network.
   */
  const mailtoUrl = useMemo(() => {
    const subjectLine = `[Inquiry] ${formData.subject}: ${formData.name || "Prospective Client"}`;
    const bodyContent = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Subject: ${formData.subject}`,
      `\nMessage:\n${formData.message}`,
    ].join("\n");

    return `mailto:${dynamicPrimaryEmail}?cc=${dynamicCcEmail}&subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;
  }, [dynamicPrimaryEmail, dynamicCcEmail, formData]);

  /**
   * Pre-composed WhatsApp direct link to the CEO's office.
   * Formats the user's inquiry into an executive-ready text.
   */
  const whatsappInquiryUrl = useMemo(() => {
    const message = [
      "Hello Kelvann Group Executive Office,",
      "I have submitted a corporate inquiry via the official portal:",
      "",
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone || "Not provided"}`,
      `*Subject:* ${formData.subject}`,
      "",
      `*Message:*`,
      formData.message,
    ].join("\n");

    return `https://wa.me/${CORPORATE_MAILBOXES.CEO_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  }, [formData]);

  /**
   * Handles asynchronous form submission to the Next.js API route.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to transmit message.");
      }

      // Update state with server-confirmed mailboxes
      if (result.primaryRecipient && result.ccRecipient) {
        setTargetEmails({
          primary: result.primaryRecipient,
          cc: result.ccRecipient,
        });
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("[Contact Form Transmission Error]:", err);
      setSubmitError(
        err.message || "An unexpected error occurred. Please use direct email or WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * Resets form to permit subsequent submissions.
   */
  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setFormData(INITIAL_FORM_DATA);
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
              Connect directly with our executive office for partnerships, tenders, road construction, solar installations, and commercial consultations.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Contact Information & Message Form */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Channels & Registered Addresses */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-block text-xs font-black uppercase tracking-widest text-[#00a6e0] mb-2">
                  Corporate Channels
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#142B4D]">
                  HOW TO REACH US
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Inquiries are directed straight to our executive mailboxes and leadership channels.
                </p>
              </div>

              <div className="space-y-4">
                {/* Official Email Channels */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-sm font-bold text-[#142B4D]">Official Email Inboxes</h3>
                    <div className="text-xs space-y-1.5 pt-0.5">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] uppercase font-bold text-slate-400">Kelvann Group Parent</div>
                        <a
                          href="mailto:Kelvanngroup@gmail.com"
                          className="font-mono font-bold text-[#00a6e0] hover:underline text-xs break-all"
                        >
                          Kelvanngroup@gmail.com
                        </a>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] uppercase font-bold text-slate-400">Kelvann Krystal Subsidiary</div>
                        <a
                          href="mailto:Kelvannkrystal@gmail.com"
                          className="font-mono font-bold text-[#00a6e0] hover:underline text-xs break-all"
                        >
                          Kelvannkrystal@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CEO Direct Line */}
                <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#142B4D]">Direct WhatsApp to CEO</h3>
                    <p className="mt-1 text-xs font-mono font-bold text-emerald-800">
                      08075743205 (+234 807 574 3205)
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-500">
                      Instant response for executive decisions, tenders, and partnerships.
                    </p>
                    <a
                      href="https://wa.me/2348075743205?text=Hello%20Kelvann%20Group%20CEO%2C%20I%20am%20reaching%20out%20via%20the%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black uppercase tracking-wider transition-all shadow-sm active:scale-95"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-6 rounded-2xl bg-[#f0f5fa] border border-slate-200/80 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#142B4D] text-[#00a6e0] flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#142B4D]">Headquarters Telephone</h3>
                    <p className="mt-1 text-xs text-slate-600 font-mono font-bold">
                      +234 811 701 3599
                    </p>
                    <span className="text-[11px] text-slate-400">Monday – Friday, 8:00 AM – 5:00 PM WAT</span>
                  </div>
                </div>

                {/* Registered Address */}
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
              </div>
            </div>

            {/* Right Col: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#f0f5fa] border border-slate-200 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#142B4D] mb-1">
                  TRANSMIT AN INQUIRY
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Inquiries are routed directly to <span className="font-semibold text-[#00a6e0]">Kelvanngroup@gmail.com</span> and <span className="font-semibold text-[#00a6e0]">Kelvannkrystal@gmail.com</span>.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-white border-2 border-emerald-400 text-center space-y-4 shadow-xl animate-in fade-in duration-300">
                    <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-[#142B4D] uppercase">
                        Inquiry Successfully Dispatched!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                        Your message has been transmitted and addressed to our corporate mailboxes:
                      </p>
                      <div className="mt-3 flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-slate-100 font-mono text-xs font-bold text-[#142B4D]">
                          {targetEmails.primary}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 font-mono text-xs font-bold text-[#142B4D]">
                          CC: {targetEmails.cc}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-95"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Send Copy to CEO on WhatsApp</span>
                      </a>

                      <a
                        href={mailtoUrl}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 text-[#142B4D] border border-slate-300 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                      >
                        <Mail className="h-4 w-4 text-[#00a6e0]" />
                        <span>Open in Mail Client</span>
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="text-xs font-semibold text-slate-500 hover:text-[#00a6e0] underline"
                      >
                        Transmit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                        {submitError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D] mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Engr. Johnson Ade"
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
                          Target Department / Sector *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                        >
                          <option value="General Corporate Inquiry (Kelvanngroup@gmail.com)">
                            General Corporate Inquiry (Kelvann Group)
                          </option>
                          <option value="Kelvann Krystal Commercial Partnership (Kelvannkrystal@gmail.com)">
                            Kelvann Krystal Commercial &amp; Road Paving
                          </option>
                          <option value="Construction & Civil Infrastructure Works">
                            Construction &amp; Civil Infrastructure Works
                          </option>
                          <option value="Oil & Gas Logistics & Services">
                            Oil &amp; Gas Logistics &amp; Services
                          </option>
                          <option value="Solar Street Light Municipal Installation">
                            Solar Street Light Installation
                          </option>
                          <option value="Heavy Machinery Procurement & Leasing">
                            Heavy Machinery Procurement &amp; Leasing
                          </option>
                          <option value="Investor & Stakeholder Relations">
                            Investor &amp; Stakeholder Relations
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142B4D]">
                          Message / Details *
                        </label>
                        <span className="text-[11px] text-slate-400">
                          Dispatched to: {dynamicPrimaryEmail} (CC: {dynamicCcEmail})
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe your project, proposal, tender, or partnership details..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#00a6e0] focus:ring-2 focus:ring-[#00a6e0]/20"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#00a6e0] hover:bg-[#0090c4] disabled:bg-slate-400 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all active:scale-95 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                            <span>TRANSMITTING INQUIRY...</span>
                          </>
                        ) : (
                          <>
                            <span>TRANSMIT INQUIRY</span>
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      <a
                        href={mailtoUrl}
                        className="text-xs text-slate-500 hover:text-[#00a6e0] underline"
                      >
                        Or dispatch via your email client
                      </a>
                    </div>
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
