"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Play,
  Pause,
  ArrowUpRight,
  Eye,
  Activity,
  HardHat,
  Truck,
  Compass,
  Sun,
  Flame,
  PackageCheck,
  Award,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProjectWork {
  id: number;
  title: string;
  category: "Construction & Paving" | "Machinery & Procurement" | "Corridors & Infrastructure" | "Standards & Testing";
  location: string;
  image: string;
  caption: string;
  focusPillar: "Construction" | "Procurement" | "Global Standards" | "Infrastructure";
  specs: {
    machine: string;
    material: string;
    layer: string;
    standard: string;
  };
}

export const projectWorks: ProjectWork[] = [
  {
    id: 1,
    title: "Mechanized Asphalt Laying & Paver Operations",
    category: "Construction & Paving",
    focusPillar: "Construction",
    location: "Active Infrastructure Corridor",
    image: "/works/project-1.jpg",
    caption:
      "High-output mechanical spreading of hot-mix asphalt (HMA) with active screed leveling, continuous material feed, and manual raking for uniform cross-slope density.",
    specs: {
      machine: "Hydrostatic Asphalt Paver & Vibratory Screed",
      material: "High-Stability Wearing Course Bitumen",
      layer: "Surface Course (50mm Compacted)",
      standard: "Federal Ministry of Works / ASTM D2726",
    },
  },
  {
    id: 2,
    title: "Long-Range Arterial Corridor Surfacing",
    category: "Corridors & Infrastructure",
    focusPillar: "Infrastructure",
    location: "Commercial Transit Route",
    image: "/works/project-2.jpg",
    caption:
      "Continuous arterial corridor paving showcasing uniform compaction, laser-guided level tolerance, and safety zone barricading during the cooling phases.",
    specs: {
      machine: "Blaw-Knox Hydrostatic Asphalt Finisher",
      material: "Dense-Graded Bituminous Concrete",
      layer: "Final Wearing Course",
      standard: "ASTM D3515 / BS 594 Standards",
    },
  },
  {
    id: 3,
    title: "Sub-Base & Bitumen Interface Transition",
    category: "Standards & Testing",
    focusPillar: "Global Standards",
    location: "Urban Infrastructure Section",
    image: "/works/project-3.jpg",
    caption:
      "Seamless transition engineering between compacted stone base course, prime coat adhesion, and dense hot-mix asphalt application.",
    specs: {
      machine: "Tandem Steel Roller & Material Feeder",
      material: "MC-30 Rapid-Cure Prime Coat & HMA",
      layer: "Base Course Interface",
      standard: "AASHTO T230 Density Compliance",
    },
  },
  {
    id: 4,
    title: "Urban Access Corridor & Drainage Kerbs",
    category: "Corridors & Infrastructure",
    focusPillar: "Infrastructure",
    location: "Metropolitan District Link",
    image: "/works/project-4.jpg",
    caption:
      "High-finish urban road surfacing integrated with cast concrete perimeter kerbs for controlled stormwater runoff and permanent edge restraint.",
    specs: {
      machine: "Vibratory Roller & Asphalt Finisher",
      material: "Polymer-Modified Asphalt Mix",
      layer: "Uniform Wearing Course",
      standard: "Nigerian Highway Design Manual",
    },
  },
  {
    id: 5,
    title: "Heavy-Duty Dual Carriageway Surfacing",
    category: "Corridors & Infrastructure",
    focusPillar: "Construction",
    location: "Inter-District Artery",
    image: "/works/project-5.jpg",
    caption:
      "Extensive carriageway asphalt paving engineered for heavy axle load capacity, superior skid resistance, and long-term rutting resistance.",
    specs: {
      machine: "Blaw-Knox Mechanized Paver Spread",
      material: "Heavy-Duty Bituminous Concrete",
      layer: "Structural Binder + Wearing Course",
      standard: "AASHTO Structural Axle Guidelines",
    },
  },
  {
    id: 6,
    title: "High-Frequency Vibratory Roller Compaction",
    category: "Machinery & Procurement",
    focusPillar: "Procurement",
    location: "Civil Infrastructure Works",
    image: "/works/project-6.jpg",
    caption:
      "Double-drum vibratory steel roller execution to eliminate air voids and achieve 98%+ Marshall compaction density across the fresh asphalt layer.",
    specs: {
      machine: "10-Ton Tandem Vibratory Steel Roller",
      material: "Marshall 75-Blow Verified Mix",
      layer: "Breakdown & Intermediate Compaction",
      standard: "Marshall Stability > 9.5 kN",
    },
  },
  {
    id: 7,
    title: "Commercial Complex Approach & Pavement",
    category: "Construction & Paving",
    focusPillar: "Construction",
    location: "Corporate Facility Frontage",
    image: "/works/project-7.jpg",
    caption:
      "Custom asphalt paving for commercial facility frontage and high-turnover vehicle maneuvering zones with crisp geometric boundary lines.",
    specs: {
      machine: "Pneumatic Tired & Steel Finish Roller",
      material: "Anti-Rutting Bitumen Matrix",
      layer: "High-Traffic Wear Course",
      standard: "ASTM Heavy Duty Pavement Standard",
    },
  },
  {
    id: 8,
    title: "Blaw-Knox Heavy Paver Hopper & Alignment",
    category: "Machinery & Procurement",
    focusPillar: "Procurement",
    location: "Primary Construction Grid",
    image: "/works/project-8.jpg",
    caption:
      "Industrial-capacity Blaw-Knox paver receiving hot-mix asphalt feed, paving adjacent to excavated utility trenches with laser alignment.",
    specs: {
      machine: "Blaw-Knox Hydrostatic Asphalt Paver",
      material: "Dense Bituminous Binder Course",
      layer: "Leveling & Structural Course",
      standard: "Class-A Heavy Road Machine Spec",
    },
  },
  {
    id: 9,
    title: "Hot Asphalt Bitumen Spreading & Hand Dressing",
    category: "Construction & Paving",
    focusPillar: "Construction",
    location: "Corridor Junction Works",
    image: "/works/project-9.jpg",
    caption:
      "Expert on-site technicians performing hand dressing, transverse joint feathering, and thermal temperature monitoring during continuous asphalt laydown.",
    specs: {
      machine: "Asphalt Paver & Thermal Monitoring Spread",
      material: "60/70 Penetration Grade Bitumen",
      layer: "Inter-layer Joint Dressing",
      standard: "BS EN 12697 Quality Criteria",
    },
  },
  {
    id: 10,
    title: "Finished Structural Corridor Against Laterite Verge",
    category: "Corridors & Infrastructure",
    focusPillar: "Infrastructure",
    location: "Access Way Development",
    image: "/works/project-10.jpg",
    caption:
      "Clean contrast between newly completed black asphalt pavement and graded laterite subsoil shoulders with precision geometric slope alignment.",
    specs: {
      machine: "Finish Tandem Roller & Grader",
      material: "Bituminous Concrete Course",
      layer: "Surface Course Completion",
      standard: "Geometric & Cross-Fall Verification",
    },
  },
  {
    id: 11,
    title: "Dense Aggregate Bitumen Texture & Quality Check",
    category: "Standards & Testing",
    focusPillar: "Global Standards",
    location: "Surface Inspection Section",
    image: "/works/project-11.jpg",
    caption:
      "High-macrotexture asphalt surface matrix providing superior wet-weather traction, minimal permeability, and anti-ravelling characteristics.",
    specs: {
      machine: "Laser Profilometer & Texture Verification",
      material: "Crushed Granite Aggregate Matrix",
      layer: "Top Wearing Skin",
      standard: "Sand Patch Method Texture Depth",
    },
  },
  {
    id: 12,
    title: "Precision Radius Edge & Boundary Finishing",
    category: "Construction & Paving",
    focusPillar: "Construction",
    location: "Turn Corridor Section",
    image: "/works/project-12.jpg",
    caption:
      "Geometric curve paving with tapered edge stabilization, preventing premature edge raveling or lateral displacement under heavy vehicle turning torque.",
    specs: {
      machine: "Edge Roller & Hand Compactor",
      material: "Edge Sealed Bituminous Mix",
      layer: "Curve Radius Dressing",
      standard: "Civil Engineering Road Geometry",
    },
  },
  {
    id: 13,
    title: "Civil Site Mobilization & Equipment Logistics",
    category: "Machinery & Procurement",
    focusPillar: "Procurement",
    location: "Operational Base & Fleet",
    image: "/works/project-13.jpg",
    caption:
      "Complete turnkey deployment of asphalt delivery tippers, paving spread, water tankers, and field personnel executing on-schedule project milestones.",
    specs: {
      machine: "Heavy Earthmoving & Paving Fleet",
      material: "Comprehensive Road Base System",
      layer: "Full-Depth Asphalt Pavement",
      standard: "ISO 9001 Construction Logistics",
    },
  },
];

const categories = [
  "All Operations",
  "Construction & Paving",
  "Machinery & Procurement",
  "Corridors & Infrastructure",
  "Standards & Testing",
] as const;

export default function WorksParallaxShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Operations");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectWork | null>(null);
  const [autoplay, setAutoplay] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imgLayersRef = useRef<(HTMLImageElement | null)[]>([]);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredProjects =
    selectedCategory === "All Operations"
      ? projectWorks
      : projectWorks.filter((p) => p.category === selectedCategory);

  // GSAP ScrollTrigger Entrance Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".showcase-header-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".showcase-track-reveal", {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
        },
        scale: 0.97,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.to(".parallax-bg-accent", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 70,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Parallax internal image offset when scrolling/sliding
  const updateParallaxOffsets = () => {
    if (!sliderRef.current) return;
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderCenter = sliderRect.left + sliderRect.width / 2;

    cardsRef.current.forEach((card, idx) => {
      const img = imgLayersRef.current[idx];
      if (!card || !img) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distanceFromCenter = (cardCenter - sliderCenter) / (sliderRect.width / 2);
      const clamped = Math.max(-1.5, Math.min(1.5, distanceFromCenter));

      gsap.to(img, {
        x: -clamped * 26,
        scale: 1.12,
        duration: 0.3,
        ease: "power1.out",
        overwrite: "auto",
      });
    });
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || selectedModalProject !== null) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      scrollToIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [autoplay, filteredProjects.length, selectedModalProject]);

  const scrollToIndex = (index: number | ((prev: number) => number)) => {
    const nextIndex = typeof index === "function" ? index(activeIndex) : index;
    const targetIdx = Math.max(0, Math.min(filteredProjects.length - 1, nextIndex));
    setActiveIndex(targetIdx);

    const targetCard = cardsRef.current[targetIdx];
    if (targetCard && sliderRef.current) {
      const slider = sliderRef.current;
      const cardLeft = targetCard.offsetLeft;
      const cardWidth = targetCard.offsetWidth;
      const sliderWidth = slider.offsetWidth;
      const scrollTarget = cardLeft - (sliderWidth - cardWidth) / 2;

      slider.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    scrollToIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    scrollToIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleCardMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      id="works-portfolio"
      ref={sectionRef}
      className="relative bg-[#061b31] text-white py-24 lg:py-32 overflow-hidden border-t border-slate-800"
    >
      {/* Decorative Glows & Blueprint Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,166,224,0.18),transparent)] pointer-events-none" />
      <div className="parallax-bg-accent absolute -top-48 right-10 w-[550px] h-[550px] bg-[#00a6e0]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="parallax-bg-accent absolute -bottom-48 left-10 w-[600px] h-[600px] bg-[#005580]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Blueprint Grid Lines Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="showcase-header-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a6e0]/15 border border-[#00a6e0]/30 text-[#00a6e0] text-xs font-black tracking-widest uppercase mb-4 shadow-inner">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Kelvann Group Operational Capabilities</span>
            </div>

            <h2 className="showcase-header-reveal text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              KELVANN GROUP <span className="text-[#00a6e0]">VERIFIED WORKS</span> &amp; OPERATIONS
            </h2>

            <p className="showcase-header-reveal mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Advancing Nigeria’s industrial landscape across our 5 core pillars: <strong>Construction &amp; Road Paving</strong>, <strong>Oil &amp; Gas Services</strong>, <strong>Heavy Procurement</strong>, <strong>Solar Street Light Installation</strong>, and <strong>Global Standards Compliance</strong>.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="showcase-header-reveal flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveIndex(0);
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#00a6e0] text-white shadow-lg shadow-[#00a6e0]/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat} {cat === "All Operations" && `(${projectWorks.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Core Pillars Strip */}
        <div className="showcase-header-reveal mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[#00a6e0]/20 text-[#00a6e0] flex items-center justify-center shrink-0">
              <HardHat className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Construction</div>
              <div className="text-[10px] text-slate-400">Roads &amp; Asphalt</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Flame className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Oil &amp; Gas</div>
              <div className="text-[10px] text-slate-400">Support &amp; Supply</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <PackageCheck className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Procurement</div>
              <div className="text-[10px] text-slate-400">Heavy Equipment</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sun className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Solar Street Lights</div>
              <div className="text-[10px] text-slate-400">Turnkey Grids</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="h-9 w-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-black text-white">Global Standards</div>
              <div className="text-[10px] text-slate-400">ASTM &amp; ISO Quality</div>
            </div>
          </div>
        </div>

        {/* Status Bar: Slide Counter & Controls */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-slate-300">
              <span className="text-xl font-black text-[#00a6e0]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-600">/</span>
              <span>{String(filteredProjects.length).padStart(2, "0")}</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
              <Activity className="h-3 w-3" />
              <span>Kelvann Group Execution</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Autoplay Toggle */}
            <button
              onClick={() => setAutoplay(!autoplay)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors"
              title={autoplay ? "Pause Slideshow" : "Resume Slideshow"}
            >
              {autoplay ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-[#00a6e0]" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-[#00a6e0]" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </button>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-[#00a6e0] border border-white/15 flex items-center justify-center text-white transition-all duration-200 active:scale-95 shadow-md"
                aria-label="Previous Project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-[#00a6e0] border border-white/15 flex items-center justify-center text-white transition-all duration-200 active:scale-95 shadow-md"
                aria-label="Next Project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* The GSAP Parallax Carousel Track */}
        <div className="showcase-track-reveal relative">
          <div
            ref={sliderRef}
            onScroll={updateParallaxOffsets}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {filteredProjects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  onMouseMove={(e) => handleCardMouseMove(e, idx)}
                  onMouseLeave={() => handleCardMouseLeave(idx)}
                  onClick={() => {
                    setActiveIndex(idx);
                    setSelectedModalProject(project);
                  }}
                  className={`group relative shrink-0 w-[300px] sm:w-[360px] md:w-[410px] rounded-3xl overflow-hidden bg-slate-900 border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "border-[#00a6e0] shadow-2xl shadow-[#00a6e0]/20 ring-2 ring-[#00a6e0]/40"
                      : "border-slate-800 hover:border-slate-600 hover:shadow-xl"
                  }`}
                  style={{
                    scrollSnapAlign: "center",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Image Viewport Container with Overflow Hidden for Parallax */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                    <img
                      ref={(el) => {
                        imgLayersRef.current[idx] = el;
                      }}
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover will-change-transform transition-opacity duration-300"
                    />

                    {/* Gradient Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061b31] via-[#061b31]/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[#00a6e0] border border-white/10 text-[11px] font-black uppercase tracking-wider">
                        {project.focusPillar === "Construction" && <HardHat className="h-3 w-3" />}
                        {project.focusPillar === "Procurement" && <Truck className="h-3 w-3" />}
                        {project.focusPillar === "Infrastructure" && <Compass className="h-3 w-3" />}
                        {project.focusPillar === "Global Standards" && <ShieldCheck className="h-3 w-3" />}
                        <span>{project.category}</span>
                      </span>

                      <span className="h-8 w-8 rounded-full bg-slate-950/70 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-[#00a6e0] transition-colors border border-white/10">
                        <Maximize2 className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Technical Tag on Bottom Image Edge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/5">
                        Kelvann Group Spread
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/5 text-emerald-400">
                        ● Verified Works
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Content Area */}
                  <div className="p-6 bg-[#0a233d]/90 backdrop-blur-md border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-[#00a6e0]">KELVANN REF #{String(project.id).padStart(2, "0")}</span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00a6e0] transition-colors leading-snug line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {project.caption}
                    </p>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#00a6e0]" />
                        <span>{project.specs.standard.split("/")[0]}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-[#00a6e0] group-hover:translate-x-1 transition-transform">
                        <span>Inspect Specs</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator Bar */}
          <div className="mt-8 flex items-center justify-center gap-1.5">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-[#00a6e0]"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid Below Slider */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-800/80">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
            <div className="h-10 w-10 rounded-xl bg-[#00a6e0]/15 flex items-center justify-center text-[#00a6e0]">
              <Truck className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Construction &amp; Heavy Fleet Spread</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Equipped with heavy Blaw-Knox hydrostatic pavers, 10-ton tandem vibratory rollers, pneumatic tired finishers, and bituminous sprayers executing highway &amp; municipal paving.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
            <div className="h-10 w-10 rounded-xl bg-[#00a6e0]/15 flex items-center justify-center text-[#00a6e0]">
              <Sun className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Solar Street Lights &amp; Energy</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Engineering integrated solar street lighting grids for municipal highways, community corridors, and industrial parks with durable high-efficiency photovoltaic battery systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
            <div className="h-10 w-10 rounded-xl bg-[#00a6e0]/15 flex items-center justify-center text-[#00a6e0]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-white">Global Standards &amp; Density Quality</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              All infrastructure works enforce strict laboratory testing, density verification (&gt;98% Marshall stability), and compliance with Nigerian Federal Ministry and ASTM standards.
            </p>
          </div>
        </div>
      </div>

      {/* Modal / Deep Inspection Lightbox */}
      {selectedModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0a233d] border border-slate-700 shadow-2xl text-white p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close Project Details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Full Image */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-black border border-slate-700 relative">
                <img
                  src={selectedModalProject.image}
                  alt={selectedModalProject.title}
                  className="w-full h-80 sm:h-[450px] object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono text-[#00a6e0]">
                  Kelvann Group Project #{String(selectedModalProject.id).padStart(2, "0")}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00a6e0]/15 text-[#00a6e0] border border-[#00a6e0]/30 text-xs font-bold uppercase tracking-wider">
                    {selectedModalProject.category}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-3 leading-snug">
                    {selectedModalProject.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {selectedModalProject.caption}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-700">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#00a6e0]">
                    Engineering &amp; Fleet Specifications
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-400">Deployed Fleet &amp; Machinery</div>
                    <div className="text-xs font-bold text-white">{selectedModalProject.specs.machine}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-400">Bitumen &amp; Aggregate Grade</div>
                    <div className="text-xs font-bold text-white">{selectedModalProject.specs.material}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-400">Structural Layer</div>
                    <div className="text-xs font-bold text-white">{selectedModalProject.specs.layer}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-400">Standard &amp; Compliance</div>
                    <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{selectedModalProject.specs.standard}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <a
                    href="https://wa.me/2348075743205?text=Hello%20Kelvann%20Group%20CEO%2C%20I%20am%20inquiry%20about%20a%20project%20like%20this."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white py-3 text-xs font-black uppercase tracking-wider transition-all shadow-lg active:scale-95"
                  >
                    <span>Connect with CEO on WhatsApp (08075743205)</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Submit Central RFP / Tender</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
