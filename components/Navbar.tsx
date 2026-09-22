"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, ExternalLink } from "lucide-react";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companiesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath?.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
          : "bg-white border-b border-slate-100 shadow-sm"
      }`}
    >
      <div className="site-container flex h-20 sm:h-24 items-center justify-between">
        {/* Official Brand Logo from /logo.png */}
        <Link href="/" className="flex items-center group py-2" aria-label="Kelvann Group of Companies Homepage">
          <div className="relative h-14 sm:h-18 w-60 sm:w-80 flex items-center">
            <img
              src="/logo.png"
              alt="Kelvann Group Of Companies Nigeria Limited"
              className="h-full w-auto max-h-16 sm:max-h-20 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-bold tracking-wider text-[#142B4D]">
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

          <Link
            href="/companies/kelvann-krystal"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#142B4D] hover:bg-[#00A3E0] text-white px-4 py-2 text-xs font-bold tracking-wider transition-all duration-200 shadow-sm"
          >
            <span>KELVANN KRYSTAL</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </nav>

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
                ➔ Kelvann Krystal Limited (Active)
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
        </div>
      )}
    </header>
  );
}
