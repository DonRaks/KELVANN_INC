"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Home as HomeIcon,
  Warehouse,
  TrendingUp,
  Building
} from "lucide-react";

// Custom Subsidiary Dual-Tone SVG Icons
function TechSolutionsIcon() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 18L30 8L44 18L28 28L14 18Z" fill="#00A3E0" />
      <path d="M14 32L30 22L44 32L28 42L14 32Z" fill="#00A3E0" />
      <path d="M14 46L30 36L44 46L28 56L14 46Z" fill="#142B4D" />
      <path d="M30 8L48 20L48 44L30 32V8Z" fill="#142B4D" fillOpacity="0.85" />
    </svg>
  );
}

function LogisticsIcon() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24H38V44H8V24Z" fill="#00A3E0" />
      <path d="M38 28H48L56 36V44H38V28Z" fill="#142B4D" />
      <circle cx="18" cy="46" r="6" fill="#142B4D" stroke="#ffffff" strokeWidth="2" />
      <circle cx="46" cy="46" r="6" fill="#142B4D" stroke="#ffffff" strokeWidth="2" />
      <path d="M12 16L24 16L30 22L18 22L12 16Z" fill="#00A3E0" fillOpacity="0.6" />
      <path d="M22 10L34 10L40 16L28 16L22 10Z" fill="#00A3E0" fillOpacity="0.4" />
    </svg>
  );
}

function RealEstateIcon() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 10L14 26H50L32 10Z" fill="#142B4D" />
      <path d="M18 26H46V52H18V26Z" fill="#00A3E0" />
      <path d="M24 32H30V40H24V32Z" fill="#ffffff" />
      <path d="M34 32H40V40H34V32Z" fill="#ffffff" />
      <path d="M28 44H36V52H28V44Z" fill="#142B4D" />
      <path d="M10 52H54V56H10V52Z" fill="#142B4D" />
    </svg>
  );
}

function FinancialIcon() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 48L24 34L34 42L52 16" stroke="#00A3E0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 16H52V26" stroke="#00A3E0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 52H52" stroke="#142B4D" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 48V38" stroke="#142B4D" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 48V32" stroke="#142B4D" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 48V26" stroke="#142B4D" strokeWidth="3" strokeLinecap="round" />
      <path d="M46 48V20" stroke="#142B4D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#142B4D] font-sans antialiased">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="site-container flex h-24 items-center justify-between">
          {/* Official Brand Logo from /logo.png */}
          <a href="#" className="flex items-center group py-2">
            <div className="relative h-16 w-48 sm:w-56">
              <img
                src="/logo.jpeg"
                alt="Kelvann Group Of Companies Nigeria Limited"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-wider text-[#142B4D]">
            <a
              href="#"
              className="relative text-[#00A3E0] pb-2 border-b-2 border-[#00A3E0]"
            >
              HOME
            </a>
            <a href="#about-us" className="hover:text-[#00A3E0] transition-colors pb-2">
              ABOUT US
            </a>
            <a href="#our-companies" className="hover:text-[#00A3E0] transition-colors pb-2">
              OUR COMPANIES
            </a>
            <a href="#careers" className="hover:text-[#00A3E0] transition-colors pb-2">
              CAREERS
            </a>
            <a href="#contact" className="hover:text-[#00A3E0] transition-colors pb-2">
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md border border-slate-200 p-2 text-[#142B4D] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-6 py-4 md:hidden text-sm font-bold text-[#142B4D] space-y-3 shadow-lg">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-[#00A3E0]">
              HOME
            </a>
            <a href="#about-us" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#00A3E0]">
              ABOUT US
            </a>
            <a href="#our-companies" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#00A3E0]">
              OUR COMPANIES
            </a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#00A3E0]">
              CAREERS
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-[#00A3E0]">
              CONTACT
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="hero-wrapper relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-center px-4 py-20">
        <div className="hero-network-overlay" />

        <div className="site-container relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black uppercase text-white leading-[1.08] tracking-tight drop-shadow-md">
            BUILDING THE FUTURE<br />OF INDUSTRY
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-xl font-normal text-white/95 leading-relaxed">
            The Corporate Home of Kelvann Group&apos;s Diveres Subsidiaries
          </p>

          <a
            href="#our-companies"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#00A3E0] hover:bg-[#0090c4] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:shadow-[#00A3E0]/30 transition-all active:scale-95 cursor-pointer"
          >
            <span>EXPLORE OUR BUSINESSES</span>
            <span aria-hidden="true" className="text-base font-bold">→</span>
          </a>
        </div>
      </section>

      {/* 3. OUR SUBSIDIARY COMPANIES */}
      <section id="our-companies" className="bg-white py-20 lg:py-24">
        <div className="site-container">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-[34px] font-black uppercase text-[#142B4D] tracking-tight mb-14">
            OUR SUBSIDIARY COMPANIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Kelvann Tech Solutions */}
            <div className="subsidiary-card flex flex-col items-center text-center p-8 relative">
              <div className="absolute top-5 left-5 h-8 w-8 rounded bg-[#142B4D] flex items-center justify-center text-white shadow-sm">
                <HomeIcon className="h-4 w-4" />
              </div>

              <div className="h-20 flex items-center justify-center mt-2 mb-4">
                <TechSolutionsIcon />
              </div>

              <h3 className="text-xl font-black text-[#142B4D] leading-snug">
                Kelvann Tech<br />Solutions
              </h3>

              <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#556980] flex-1">
                The Corporate Arm of Kelvann Group. It drives innovation, technology, and digital solutions for a smarter and more connected future.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#00A3E0] hover:text-[#142B4D] transition-colors"
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Card 2: Kelvann Logistics & Supply Chain */}
            <div className="subsidiary-card flex flex-col items-center text-center p-8 relative">
              <div className="absolute top-5 left-5 h-8 w-8 rounded bg-[#142B4D] flex items-center justify-center text-white shadow-sm">
                <Warehouse className="h-4 w-4" />
              </div>

              <div className="h-20 flex items-center justify-center mt-2 mb-4">
                <LogisticsIcon />
              </div>

              <h3 className="text-xl font-black text-[#142B4D] leading-snug">
                Kelvann Logistics &amp;<br />Supply Chain
              </h3>

              <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#556980] flex-1">
                The Corporate Arm of Kelvann Group. We deliver efficient, reliable, and secure logistics and supply chain solutions across industries.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#00A3E0] hover:text-[#142B4D] transition-colors"
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Card 3: Kelvann Real Estate */}
            <div className="subsidiary-card flex flex-col items-center text-center p-8 relative">
              <div className="absolute top-5 left-5 h-8 w-8 rounded bg-[#142B4D] flex items-center justify-center text-white shadow-sm">
                <Building className="h-4 w-4" />
              </div>

              <div className="h-20 flex items-center justify-center mt-2 mb-4">
                <RealEstateIcon />
              </div>

              <h3 className="text-xl font-black text-[#142B4D] leading-snug">
                Kelvann<br />Real Estate
              </h3>

              <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#556980] flex-1">
                The Corporate Arm of Kelvann Group. We create value through premium real estate development, property management, and investment opportunities.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#00A3E0] hover:text-[#142B4D] transition-colors"
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Card 4: Kelvann Financial Services */}
            <div className="subsidiary-card flex flex-col items-center text-center p-8 relative">
              <div className="absolute top-5 left-5 h-8 w-8 rounded bg-[#142B4D] flex items-center justify-center text-white shadow-sm">
                <TrendingUp className="h-4 w-4" />
              </div>

              <div className="h-20 flex items-center justify-center mt-2 mb-4">
                <FinancialIcon />
              </div>

              <h3 className="text-xl font-black text-[#142B4D] leading-snug">
                Kelvann Financial<br />Services
              </h3>

              <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#556980] flex-1">
                The Corporate Arm of Kelvann Group. We provide innovative financial solutions, investment opportunities, and expert advisory services for a stronger tomorrow.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#00A3E0] hover:text-[#142B4D] transition-colors"
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHAIRMAN'S MESSAGE */}
      <section id="about-us" className="bg-[#f0f5fa] py-16">
        <div className="site-container">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-[#142B4D] tracking-tight mb-8">
            CHAIRMAN&apos;S MESSAGE
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-transparent">
            {/* Portrait Image */}
            <div className="h-32 w-32 shrink-0 rounded overflow-hidden shadow-sm bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
                alt="Chairman Portrait"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Quote */}
            <div className="flex-1 flex items-start gap-4">
              <span className="quote-symbol select-none">&ldquo;</span>

              <div className="space-y-4">
                <p className="text-sm sm:text-base italic text-[#475569] leading-relaxed">
                  &ldquo;Our commitment remains the foundation of Kelvann Group&apos;s success. Through sustainable practices, innovative solutions, and a dedicated team, we continue to create value for our stakeholders and contribute to a brighter future.&rdquo;
                </p>
                <div className="text-sm font-bold text-[#142B4D]">
                  Chairman&apos;s Message
                </div>
              </div>

              <span className="quote-symbol hidden lg:inline-block select-none self-end">&rdquo;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LATEST NEWS & UPDATES */}
      <section className="bg-white py-20 lg:py-24">
        <div className="site-container">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-[34px] font-black uppercase text-[#142B4D] tracking-tight mb-14">
            LATEST NEWS &amp; UPDATES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News 1 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    BUSINESS
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Tech Solutions Northern Logistics &amp; Supply Chain Division Impacts Local Trade, Customers
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    The Northern Logistics &amp; Supply Chain Division of Kelvann Tech Solutions continues to drive economic growth and support local businesses across the region.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>LEARN MORE</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            {/* News 2 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    BUSINESS
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Real Estate &amp; Property Services Launch Premium Residential Estates
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    The Real Estate division unveils new residential estates designed for modern living, combining quality, security, and long-term value.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>LEARN MORE</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            {/* News 3 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    FINANCE
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Financial Services Expands Access to Flexible Investment Solutions
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    Kelvann Financial Services introduces new investment packages to help individuals and businesses achieve their financial goals.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>LEARN MORE</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            {/* News 4 */}
            <article className="news-card flex flex-col overflow-hidden">
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80")',
                }}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A3E0]">
                    CORPORATE
                  </span>
                  <h3 className="mt-1.5 text-xs font-black text-[#142B4D] leading-snug">
                    Kelvann Group Strengthens Partnerships for a Sustainable Future
                  </h3>
                  <p className="mt-2 text-[11px] text-[#64748b] leading-relaxed">
                    The Group reaffirms its commitment to strategic partnerships, innovation, and sustainable growth across all subsidiaries.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold uppercase text-[#00A3E0] hover:text-[#142B4D]"
                >
                  <span>LEARN MORE</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contact" className="bg-[#0e213d] text-white">
        <div className="site-container py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="relative h-16 w-52 bg-white/95 rounded-lg p-2.5 shadow-md flex items-center">
                <img
                  src="/logo.png"
                  alt="Kelvann Group Of Companies Nigeria Limited"
                  className="h-full w-auto object-contain"
                />
              </div>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#00A3E0]" />
                  <span>Kelvann Group Of Companies Nigeria Limited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#00A3E0]" />
                  <span>+234 811 701 3599</span>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-base font-bold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                    <span>›</span>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                    <span>›</span>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#our-companies" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                    <span>›</span>
                    <span>Our Companies</span>
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                    <span>›</span>
                    <span>Careers</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#00A3E0] transition-colors flex items-center gap-1.5">
                    <span>›</span>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Social Media */}
            <div>
              <h4 className="text-base font-bold text-white mb-4">
                Social Media
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-colors"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-colors"
                  aria-label="X"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-colors"
                  aria-label="Instagram"
                >
                  ◎
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-colors"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-colors"
                  aria-label="YouTube"
                >
                  ▶
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-xs text-white font-bold transition-colors"
                  aria-label="Pinterest"
                >
                  ◉
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>&copy; KELVANN GROUP OF COMPANIES NIGERIA LIMITED</div>
            <div className="flex items-center gap-2">
              <a href="#" className="h-6 w-6 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-white text-[10px] font-bold">
                f
              </a>
              <a href="#" className="h-6 w-6 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-white text-[10px] font-bold">
                𝕏
              </a>
              <a href="#" className="h-6 w-6 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-white text-[10px] font-bold">
                ◎
              </a>
              <a href="#" className="h-6 w-6 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-white text-[10px] font-bold">
                in
              </a>
              <a href="#" className="h-6 w-6 rounded-full bg-white/10 hover:bg-[#00A3E0] flex items-center justify-center text-white text-[10px] font-bold">
                ◉
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}