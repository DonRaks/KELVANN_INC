"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0e213d] text-white">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-16 w-60 bg-white/95 rounded-xl p-2.5 shadow-lg flex items-center">
                <img
                  src="/logo.png"
                  alt="Kelvann Group Of Companies Nigeria Limited"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Kelvann Group of Companies Nigeria Limited — A growing corporate enterprise building businesses and creating long-term value.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#00A3E0] shrink-0 mt-0.5" />
                <span>Kelvann Group Of Companies Nigeria Limited</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#00A3E0] shrink-0" />
                <span>+234 811 701 3599</span>
              </div>
            </div>
          </div>

          {/* Col 2: Multi-Page Navigation */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                  <span>›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                  <span>›</span>
                  <span>About Us &amp; Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                  <span>›</span>
                  <span>Our Companies &amp; Ecosystem</span>
                </Link>
              </li>
              <li>
                <Link href="/companies/kelvann-krystal" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span>›</span>
                  <span>Kelvann Krystal Limited (Subsidiary)</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                  <span>›</span>
                  <span>Careers &amp; Opportunities</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                  <span>›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Media & Corporate Presence */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              Corporate Channels
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Follow Kelvann Group for announcements, corporate insights, and subsidiary updates.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="h-9 w-9 rounded-xl bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-all shadow-sm"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-xl bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-all shadow-sm"
                aria-label="X"
              >
                𝕏
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-xl bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-all shadow-sm"
                aria-label="Instagram"
              >
                ◎
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-xl bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-xl bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-all shadow-sm"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>&copy; {new Date().getFullYear()} KELVANN GROUP OF COMPANIES NIGERIA LIMITED. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <Link href="/about-us" className="hover:text-white transition-colors">About Kelvann</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
