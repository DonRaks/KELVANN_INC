"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Building2,
  HardHat,
  Sparkles,
  MessageCircle,
} from "lucide-react";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companiesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const effectivePath = pathname || currentPath;
  const isKrystal =
    effectivePath === "/companies/kelvann-krystal" ||
    effectivePath?.startsWith("/companies/kelvann-krystal");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && effectivePath === "/") return true;
    if (path !== "/" && effectivePath?.startsWith(path)) return true;
    return false;
  };

  const whatsappUrl =
    "https://wa.me/2348075743205?text=Hello%20Kelvann%20Group%20Executive%20Office%2C%20I%20would%20like%20to%20speak%20with%20the%20CEO.";

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
          : "bg-white border-b border-slate-100 shadow-sm"
      }`}
    >
      <div className="site-container flex h-20 sm:h-24 items-center justify-between">
        {/* Dynamic Brand Logo: Kelvann Krystal Subsidiary vs Parent Kelvann Group */}
        {isKrystal ? (
          <Link
            href="/companies/kelvann-krystal"
            className="flex items-center gap-3.5 group py-2"
            aria-label="Kelvann Krystal Limited Subsidiary"
          >
            <div className="relative h-12 sm:h-14 w-12 sm:w-14 rounded-2xl bg-white p-1 shadow-sm border border-slate-200/80 flex items-center justify-center group-hover:border-[#00a6e0] transition-all duration-300">
              <img
                src="/krystal/logo-transparent.png"
                alt="Kelvann Krystal Limited Logo"
                className="h-full w-auto max-h-12 sm:max-h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[15px] sm:text-[17px] font-black tracking-tight text-[#142B4D] leading-none">
                  KELVANN <span className="text-[#00A3E0]">KRYSTAL</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Subsidiary
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wide mt-1 flex items-center gap-1.5">
                <span>Civil &amp; Road Infrastructure</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#00A3E0]">Kelvann Group</span>
              </span>
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center group py-2"
            aria-label="Kelvann Group of Companies Homepage"
          >
            <div className="relative h-14 sm:h-18 w-56 sm:w-80 flex items-center">
              <img
                src="/logo.png"
                alt="Kelvann Group Of Companies Nigeria Limited"
                className="h-full w-auto max-h-16 sm:max-h-20 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        )}

        {/* Desktop Navigation Links */}
        {isKrystal ? (
          /* Subsidiary Specific Desktop Navigation */
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] font-bold tracking-wider text-[#142B4D]">
            <Link
              href="/"
              className="transition-colors pb-1.5 text-slate-600 hover:text-[#00A3E0]"
            >
              GROUP HOME
            </Link>

            <Link
              href="/#works-portfolio"
              className="transition-colors pb-1.5 text-[#00A3E0] hover:text-[#008cc0] flex items-center gap-1.5 font-extrabold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a6e0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a6e0]"></span>
              </span>
              <span>VERIFIED WORKS</span>
            </Link>

            <a
              href="#about-subsidiary"
              className="transition-colors pb-1.5 hover:text-[#00A3E0]"
            >
              PROFILE
            </a>

            <a
              href="#contact-subsidiary"
              className="transition-colors pb-1.5 hover:text-[#00A3E0]"
            >
              CONTACT
            </a>

            {/* Direct WhatsApp to CEO */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 text-xs font-black tracking-wider transition-all duration-200 shadow-sm active:scale-95"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WHATSAPP CEO</span>
            </a>

            {/* Return to Main Kelvann Group Portal */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#142B4D] hover:bg-[#00A3E0] text-white px-4 py-2 text-xs font-bold tracking-wider transition-all duration-200 shadow-sm"
              title="Return to Kelvann Group corporate homepage"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>KELVANN GROUP</span>
            </Link>
          </nav>
        ) : (
          /* Standard Corporate Desktop Navigation */
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-bold tracking-wider text-[#142B4D]">
            <Link
              href="/"
              className={`transition-colors pb-1.5 ${
                isActive("/")
                  ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
                  : "hover:text-[#00A3E0]"
              }`}
            >
              HOME
            </Link>

            <Link
              href="/about-us"
              className={`transition-colors pb-1.5 ${
                isActive("/about-us")
                  ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
                  : "hover:text-[#00A3E0]"
              }`}
            >
              ABOUT US
            </Link>

            {/* Verified Works on Homepage */}
            <a
              href="/#works-portfolio"
              className="transition-colors pb-1.5 hover:text-[#00A3E0] text-[#00A3E0] font-black flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a6e0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a6e0]"></span>
              </span>
              <span>VERIFIED WORKS</span>
            </a>

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompaniesDropdownOpen(true)}
              onMouseLeave={() => setCompaniesDropdownOpen(false)}
            >
              <Link
                href="/companies"
                className={`flex items-center gap-1 transition-colors pb-1.5 ${
                  isActive("/companies")
                    ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
                    : "hover:text-[#00A3E0]"
                }`}
              >
                <span>OUR COMPANIES</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {companiesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-3">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0] border-b border-slate-100 mb-1">
                      Active Subsidiary
                    </div>
                    <Link
                      href="/companies/kelvann-krystal"
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-[#142B4D] hover:bg-[#f0f5fa] hover:text-[#00A3E0] transition-colors"
                    >
                      <div>
                        <div>Kelvann Krystal Limited</div>
                        <span className="text-[10px] font-medium text-emerald-600">● Active</span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                    </Link>

                    <div className="px-3 pt-2 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 border-t border-slate-100">
                      Group Overview
                    </div>
                    <Link
                      href="/companies"
                      className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#00A3E0] transition-colors"
                    >
                      ➔ View All Companies &amp; Ecosystem
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className={`transition-colors pb-1.5 ${
                isActive("/careers")
                  ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
                  : "hover:text-[#00A3E0]"
              }`}
            >
              CAREERS
            </Link>

            <Link
              href="/contact"
              className={`transition-colors pb-1.5 ${
                isActive("/contact")
                  ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
                  : "hover:text-[#00A3E0]"
              }`}
            >
              CONTACT
            </Link>

            {/* Direct WhatsApp to CEO */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 text-xs font-black tracking-wider transition-all duration-200 shadow-sm active:scale-95"
              title="Chat with CEO on WhatsApp (08075743205)"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WHATSAPP CEO</span>
            </a>
          </nav>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-slate-200 p-2 text-[#142B4D] lg:hidden hover:bg-slate-50 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/98 backdrop-blur-md px-6 py-6 lg:hidden text-sm font-bold text-[#142B4D] space-y-4 shadow-xl">
          {/* Direct WhatsApp Pill in Mobile */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-black text-xs uppercase tracking-wider shadow-md"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp CEO: 08075743205</span>
          </a>

          {isKrystal ? (
            /* Subsidiary Mobile Links */
            <>
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <img
                  src="/krystal/logo-transparent.png"
                  alt="Kelvann Krystal Logo"
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <div className="text-sm font-black text-[#142B4D]">KELVANN KRYSTAL</div>
                  <div className="text-[10px] text-emerald-600 font-bold">Active Subsidiary</div>
                </div>
              </div>

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-[#00A3E0]"
              >
                KELVANN GROUP HOME
              </Link>
              <Link
                href="/#works-portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#00A3E0] font-black flex items-center justify-between"
              >
                <span>VERIFIED WORKS (13 SITES)</span>
                <span className="px-2 py-0.5 rounded-full bg-[#00A3E0]/15 text-[10px]">ALL SITES</span>
              </Link>
              <a
                href="#about-subsidiary"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-[#00A3E0]"
              >
                PROFILE &amp; GOVERNANCE
              </a>
              <a
                href="#contact-subsidiary"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 hover:text-[#00A3E0]"
              >
                CONTACT SUBSIDIARY
              </a>

              <div className="pt-3 border-t border-slate-200 space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-1 text-xs text-slate-600 hover:text-[#00A3E0]"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Return to Kelvann Group Homepage</span>
                </Link>
              </div>
            </>
          ) : (
            /* Corporate Mobile Links */
            <>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 ${isActive("/") ? "text-[#00A3E0]" : "hover:text-[#00A3E0]"}`}
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 ${isActive("/about-us") ? "text-[#00A3E0]" : "hover:text-[#00A3E0]"}`}
              >
                ABOUT US
              </Link>
              <Link
                href="/#works-portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#00A3E0] font-bold"
              >
                VERIFIED WORKS &amp; SITES
              </Link>

              <div className="pt-2 pb-1 border-t border-slate-100">
                <Link
                  href="/companies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1 ${isActive("/companies") ? "text-[#00A3E0]" : "hover:text-[#00A3E0]"}`}
                >
                  OUR COMPANIES
                </Link>
                <div className="pl-3 mt-2 space-y-2 border-l-2 border-[#00A3E0]">
                  <Link
                    href="/companies/kelvann-krystal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-[#00A3E0] font-semibold"
                  >
                    ➔ Kelvann Krystal Limited (Subsidiary)
                  </Link>
                  <Link
                    href="/companies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[11px] text-slate-500"
                  >
                    ➔ View All Companies &amp; Ecosystem
                  </Link>
                </div>
              </div>

              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 ${isActive("/careers") ? "text-[#00A3E0]" : "hover:text-[#00A3E0]"}`}
              >
                CAREERS
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1 ${isActive("/contact") ? "text-[#00A3E0]" : "hover:text-[#00A3E0]"}`}
              >
                CONTACT
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
