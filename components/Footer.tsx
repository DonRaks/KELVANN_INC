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
                <span>Headquarters: +234 811 701 3599</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://wa.me/2348075743205?text=Hello%20Kelvann%20Group%20Executive%20Office%2C%20I%20would%20like%20to%20speak%20with%20the%20CEO."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 text-xs font-bold transition-all"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp CEO: 08075743205</span>
                </a>
              </div>
              <div className="space-y-1 pt-1.5 border-t border-white/10 text-[11px] font-mono text-slate-300">
                <div>
                  <span className="text-slate-400 font-sans">Group: </span>
                  <a href="mailto:Kelvanngroup@gmail.com" className="text-[#00A3E0] hover:underline">
                    Kelvanngroup@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 font-sans">Krystal: </span>
                  <a href="mailto:Kelvannkrystal@gmail.com" className="text-[#00A3E0] hover:underline">
                    Kelvannkrystal@gmail.com
                  </a>
                </div>
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
