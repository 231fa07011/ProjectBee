'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  Dna, 
  Leaf, 
  Bot, 
  FlaskConical, 
  Calculator,
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Star,
  BookOpen,
  HelpCircle,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ProductCard from '@/components/catalog/ProductCard';
import { PRODUCTS } from '@/lib/data/catalog';
import { CLASSES } from '@/lib/data/taxonomy';
import { REVIEWS } from '@/lib/data/reviews';

const HERO_SLIDE_CONFIGS = [
  {
    slug: 'working-hydraulic-lift-model',
    badge: '🏆 #1 Best Seller in Physics',
    tag: "Pascal's Principle",
    thumbLabel: 'Hydraulic Lift',
    customImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'obstacle-avoiding-ultrasonic-robot-car',
    badge: '🤖 #1 Best Seller in Robotics',
    tag: 'Ultrasonic Sonar',
    thumbLabel: 'Robotics Car',
    customImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'reflex-arc-neural-pathway-working-led-circuit',
    badge: '🧬 Senior Biology Best Seller',
    tag: 'Nervous System',
    thumbLabel: 'Reflex Arc',
    customImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'chemical-density-tower-miscibility-column',
    badge: '🧪 Chemistry Exhibition Special',
    tag: 'Archimedes Principle',
    thumbLabel: 'Density Lab',
    customImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'kaleidoscope-multiple-reflection-optical-tube',
    badge: '✨ Junior Optics Best Seller',
    tag: 'Plane Mirrors',
    thumbLabel: 'Kaleidoscope',
    customImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
];

export default function HomePage() {
  const router = useRouter();
  const [activeGrade, setActiveGrade] = useState<number>(7);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Dynamic slides linked to real-time PRODUCTS catalog data
  const heroSlides = React.useMemo(() => {
    return HERO_SLIDE_CONFIGS.map((cfg, index) => {
      const prod = PRODUCTS.find((p) => p.slug === cfg.slug);
      return {
        id: index + 1,
        slug: cfg.slug,
        title: prod?.title || 'Science Working Model',
        subject: prod ? `Class ${prod.classes.join(', ')} • ${prod.subjects.join(' & ').toUpperCase()}` : 'Science Fair',
        badge: cfg.badge,
        tag: cfg.tag,
        thumbLabel: cfg.thumbLabel,
        price: prod ? `₹${(prod.sellingPricePaise / 100).toLocaleString('en-IN')}` : '₹499',
        mrp: prod ? `₹${(prod.mrpPaise / 100).toLocaleString('en-IN')}` : '₹899',
        stockOnHand: prod?.stockOnHand ?? 25,
        isPopular: prod?.isPopular ?? true,
        imageUrl: cfg.customImage,
      };
    });
  }, []);

  // Auto-advance hero slides every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);
  
  // Grade-filtered preview products
  const gradeFilteredProducts = PRODUCTS.filter((p) => p.classes.includes(activeGrade));

  const handleGradeClick = (grade: number) => {
    setActiveGrade(grade);
  };

  const handleOpenGradeCatalog = (grade: number) => {
    router.push(`/catalog?grade=${grade}`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeHero = heroSlides[currentSlide] || heroSlides[0];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-br from-amber-50 via-bee-50/60 to-white border-b border-amber-200/50 py-12 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-bee-500/15 text-ink-900 border border-bee-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs">
                <span className="text-base" role="img" aria-label="trophy">🏆</span>
                <span>India’s #1 Destination for School Science Exhibition Models</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-900 tracking-tight leading-none">
                School Projects & <br />
                <span className="text-bee-600 underline decoration-bee-400 decoration-wavy decoration-4">
                  Working Science Models
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Pre-assembled, reliable working models and interactive science kits for{' '}
                <strong className="text-ink-900 font-semibold">CBSE, ICSE, and State Board</strong> students (Classes 1–12). 
                Save overnight stress — every kit arrives functional with oral viva preparation prompt cards!
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/catalog"
                  className="bg-ink-900 hover:bg-bee-500 hover:text-ink-900 text-white font-extrabold text-sm px-6 py-3.5 rounded-2xl shadow-lg shadow-ink-900/10 flex items-center gap-2 transition duration-300"
                >
                  <span>Browse All {PRODUCTS.length} Working Models</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/catalog?format=working_model"
                  className="bg-white hover:bg-slate-50 text-ink-900 font-bold text-sm px-6 py-3.5 rounded-2xl border border-slate-300 shadow-xs transition"
                >
                  Exhibition Specials
                </Link>
              </div>

              {/* Micro Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pre-tested & zero assembly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cash on Delivery (COD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Viva Concept Cards</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase Card (Interactive 5-Image Gallery) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-r from-bee-400 via-amber-300 to-amber-500 rounded-3xl blur-2xl opacity-40 animate-pulse pointer-events-none" />

                {/* Main Card */}
                <div className="relative rounded-3xl bg-white border border-amber-200/90 shadow-2xl overflow-hidden p-4 space-y-3.5">
                  {/* Image container with badges & arrows */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 group">
                    <img
                      src={activeHero.imageUrl}
                      alt={activeHero.title}
                      key={activeHero.id}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 animate-in fade-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
                    
                    {/* Top Floating Badge (Best Seller & Category) */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-black text-ink-900 shadow-md flex items-center gap-1.5 border border-amber-300">
                      <span>{activeHero.badge}</span>
                    </div>

                    {/* Top Right Live Stock Status Badge */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                      <div className={`px-2.5 py-1 rounded-full text-[10px] font-black shadow-md flex items-center gap-1.5 backdrop-blur-md ${
                        activeHero.stockOnHand <= 25 
                          ? 'bg-rose-600/95 text-white animate-pulse ring-2 ring-rose-400' 
                          : 'bg-emerald-600/95 text-white'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span>
                          {activeHero.stockOnHand <= 25 
                            ? `⚡ Only ${activeHero.stockOnHand} Left in Stock!` 
                            : `✓ In Stock (${activeHero.stockOnHand} Units)`}
                        </span>
                      </div>
                      <span className="text-[9px] font-extrabold text-amber-200 bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
                        {activeHero.price} <span className="line-through text-slate-400 font-normal text-[8px]">{activeHero.mrp}</span>
                      </span>
                    </div>

                    {/* Prev / Next Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      aria-label="Previous Slide"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition shadow-md opacity-80 hover:opacity-100 hover:scale-110"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next Slide"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-xs transition shadow-md opacity-80 hover:opacity-100 hover:scale-110"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Bottom Image Info */}
                    <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-bee-300">
                        {activeHero.subject} • {activeHero.tag}
                      </div>
                      <div className="text-base font-black truncate">
                        {activeHero.title}
                      </div>
                    </div>
                  </div>

                  {/* 5-IMAGE THUMBNAIL SELECTOR STRIP (WITH LIVE STOCK & BEST SELLER BADGES) */}
                  <div className="space-y-1.5 pt-0.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-extrabold text-slate-700 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Stock & Best Sellers ({heroSlides.length} Exhibits):</span>
                      </span>
                      <div className="flex gap-1 items-center">
                        {heroSlides.map((_, idx) => (
                          <span
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full cursor-pointer transition-all ${
                              currentSlide === idx ? 'w-5 bg-bee-500' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5">
                      {heroSlides.map((slide, idx) => {
                        const isCurrent = currentSlide === idx;
                        return (
                          <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(idx)}
                            title={`${slide.title} • ${slide.stockOnHand} left • Click to view`}
                            className={`group relative rounded-xl overflow-hidden border-2 transition-all p-0.5 flex flex-col items-center text-center ${
                              isCurrent
                                ? 'border-bee-500 shadow-md scale-105 bg-bee-50 ring-2 ring-bee-400/50'
                                : 'border-slate-200 hover:border-bee-300 bg-white hover:scale-102 opacity-80 hover:opacity-100'
                            }`}
                          >
                            <div className="h-10 w-full rounded-lg overflow-hidden bg-slate-100 relative">
                              <img
                                src={slide.imageUrl}
                                alt={slide.thumbLabel}
                                className="w-full h-full object-cover"
                              />
                              {/* Best Seller Trophy Tag on Thumbnail */}
                              {slide.isPopular && (
                                <span className="absolute top-0.5 left-0.5 text-[8px] bg-amber-400 text-ink-900 px-1 py-0.2 rounded font-black leading-none shadow-xs">
                                  🏆
                                </span>
                              )}
                              {/* Stock Badge on Thumbnail */}
                              <span className={`absolute bottom-0.5 right-0.5 text-[7px] px-1 py-0.2 rounded font-extrabold leading-none text-white ${
                                slide.stockOnHand <= 25 ? 'bg-rose-600' : 'bg-emerald-600'
                              }`}>
                                {slide.stockOnHand} left
                              </span>
                            </div>
                            <span className={`text-[9px] font-bold truncate w-full px-0.5 pt-0.5 leading-tight ${
                              isCurrent ? 'text-ink-900 font-extrabold' : 'text-slate-500'
                            }`}>
                              {slide.thumbLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Callout Action Footer */}
                  <div className="pt-1 flex items-center justify-between text-xs border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="flex -space-x-1.5">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-bee-400 text-[10px] font-bold text-ink-900">A</span>
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-blue-500 text-[10px] font-bold text-white">P</span>
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-emerald-500 text-[10px] font-bold text-white">S</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600">520+ verified parent reviews</span>
                    </div>
                    <Link
                      href={`/products/${activeHero.slug}`}
                      className="font-extrabold text-bee-700 hover:text-bee-800 text-xs flex items-center gap-1 bg-bee-50 hover:bg-bee-100 px-3 py-1.5 rounded-xl border border-bee-200 transition"
                    >
                      <span>Explore Model</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Floating Decorative Badges */}
                <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md p-2.5 px-3.5 rounded-2xl shadow-xl border border-slate-200 items-center gap-2.5 z-20">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-ink-900">Guaranteed Viva Pass</div>
                    <div className="text-[10px] text-slate-500">10 Teacher Q&As Included</div>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-3 -right-3 bg-white/95 backdrop-blur-md p-2 px-3 rounded-2xl shadow-xl border border-slate-200 items-center gap-2 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-bold text-slate-700">Same-Day Dispatch Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Graphic Background Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-bee-400/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. CLASS SELECTOR STRIP (Interactive Grade 1 to 12 Hub) */}
      <section className="container mx-auto px-4">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-bee-500 animate-pulse" />
                <h2 className="text-xl font-black text-ink-900">
                  Select Your Child's Class (Grades 1 to 12)
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Click any Grade button to open curriculum-matched science working models and viva preparation kits.
              </p>
            </div>
            
            <Link
              href={`/catalog?grade=${activeGrade}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-bee-500 hover:bg-bee-600 text-ink-900 font-extrabold text-xs rounded-xl shadow-xs transition"
            >
              <span>Open Grade {activeGrade} Full Catalog ({gradeFilteredProducts.length} Models)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grade 1 to 12 Interactive Buttons */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
            {CLASSES.map((c) => {
              const isSelected = activeGrade === c.grade;
              const countForGrade = PRODUCTS.filter((p) => p.classes.includes(c.grade)).length;
              
              return (
                <button
                  key={c.grade}
                  onClick={() => handleGradeClick(c.grade)}
                  onDoubleClick={() => handleOpenGradeCatalog(c.grade)}
                  title={`Grade ${c.grade}: ${countForGrade} models. Click to preview, double-click to open full catalog.`}
                  className={`py-3.5 px-2 rounded-2xl border text-center transition flex flex-col items-center justify-center relative group ${
                    isSelected
                      ? 'bg-bee-500 border-bee-600 text-ink-900 font-black shadow-md scale-105 ring-2 ring-bee-400 ring-offset-2'
                      : 'border-slate-200 hover:border-bee-400 hover:bg-bee-50/70 text-slate-700 font-bold shadow-2xs hover:scale-102'
                  }`}
                >
                  <span className={`text-[10px] uppercase tracking-wider block font-bold ${
                    isSelected ? 'text-ink-900' : 'text-slate-400 group-hover:text-bee-800'
                  }`}>
                    Grade
                  </span>
                  <span className="text-lg sm:text-xl font-black leading-none mt-1">
                    {c.grade}
                  </span>
                  <span className={`text-[9px] mt-1 px-1.5 py-0.5 rounded-full font-extrabold ${
                    isSelected ? 'bg-white/80 text-ink-900' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {countForGrade} kits
                  </span>
                </button>
              );
            })}
          </div>

          {/* Live Grade Preview Shelf */}
          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-bee-600" />
                <span className="font-extrabold text-sm text-ink-900">
                  Recommended Science Models for Grade {activeGrade}
                </span>
                <span className="text-xs bg-bee-200 text-bee-900 px-2 py-0.5 rounded-full font-bold">
                  {gradeFilteredProducts.length} Models Available
                </span>
              </div>
              <Link
                href={`/catalog?grade=${activeGrade}`}
                className="text-xs font-bold text-bee-800 hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                <span>View all {gradeFilteredProducts.length} models for Grade {activeGrade} in Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Grid of Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gradeFilteredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {gradeFilteredProducts.length > 4 && (
              <div className="text-center pt-4">
                <Link
                  href={`/catalog?grade=${activeGrade}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-ink-900 font-extrabold text-xs shadow-xs transition"
                >
                  <Eye className="w-3.5 h-3.5 text-bee-600" />
                  <span>Explore +{gradeFilteredProducts.length - 4} More Grade {activeGrade} Working Models</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY SUBJECT */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-ink-900">Explore by Subject</h2>
            <p className="text-xs text-slate-500 mt-1">
              Select a subject to explore our extensive catalog of syllabus-aligned working models.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-xs font-bold text-bee-700 hover:text-bee-800 flex items-center gap-1 group"
          >
            <span>View All ({PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link
            href="/catalog?subject=physics"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition">
              <Zap className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-ink-900 group-hover:text-blue-600 transition">Physics</h3>
                <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-md">
                  {PRODUCTS.filter(p => p.subjects.includes('physics')).length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Hydraulics, Magnets, Circuits, Optics</p>
            </div>
          </Link>

          <Link
            href="/catalog?subject=biology"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition">
              <Dna className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-ink-900 group-hover:text-emerald-600 transition">Biology</h3>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                  {PRODUCTS.filter(p => p.subjects.includes('biology')).length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Lungs, DNA, Cells, Heart, Reflexes</p>
            </div>
          </Link>

          <Link
            href="/catalog?subject=environmental-science"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-ink-900 group-hover:text-amber-600 transition">EVS & Energy</h3>
                <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-md">
                  {PRODUCTS.filter(p => p.subjects.includes('environmental-science')).length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Solar, Rainwater, Soil, Weather</p>
            </div>
          </Link>

          <Link
            href="/catalog?subject=robotics-ai"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition">
              <Bot className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-ink-900 group-hover:text-purple-600 transition">Robotics & AI</h3>
                <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded-md">
                  {PRODUCTS.filter(p => p.subjects.includes('robotics-ai')).length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Radar, Sonar, Line Follower, Sensors</p>
            </div>
          </Link>

          <Link
            href="/catalog?subject=chemistry"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-110 transition">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-ink-900 group-hover:text-rose-600 transition">Chemistry</h3>
                <span className="text-[10px] font-extrabold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded-md">
                  {PRODUCTS.filter(p => p.subjects.includes('chemistry')).length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Volcanoes, Crystals, pH, Cells</p>
            </div>
          </Link>

          <Link
            href="/catalog?subject=mathematics"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition">
              <Calculator className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-ink-900 group-hover:text-indigo-600 transition">Mathematics</h3>
                <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded-md">
                  {PRODUCTS.filter(p => p.subjects.includes('mathematics')).length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Pythagoras, Abacus, Conics, Euler</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. FEATURED BEST-SELLERS */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-ink-900">
              Science Exhibition Best-Sellers
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Top-rated working models pre-assembled in Bengaluru with verified customer feedback.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-xs font-bold text-bee-700 hover:underline"
          >
            See all ({PRODUCTS.length})
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. WHY PARENTS & STUDENTS CHOOSE PROJECTBEE */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-ink-900 to-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-bee-400 text-xs font-bold uppercase tracking-wider">
              Zero Stress • 100% Guaranteed Viva Confidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2">
              Built for Real School Practical & Exhibition Success
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              We know science project night can be overwhelming. ProjectBee takes away the late-night panic with pre-tested, functioning models that students can demonstrate and defend with pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs">
              <div className="w-10 h-10 rounded-xl bg-bee-500/20 text-bee-400 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm mb-1">Pre-Tested & Operational</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every single motor, circuit, syringe, and LED is bench-tested before dispatch so there are zero embarrassing failures during inspection.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs">
              <div className="w-10 h-10 rounded-xl bg-bee-500/20 text-bee-400 flex items-center justify-center mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm mb-1">Curriculum Viva Cards</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Includes printed pocket cards with the top 10 questions and conceptual answers asked by external science examiners.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xs">
              <div className="w-10 h-10 rounded-xl bg-bee-500/20 text-bee-400 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm mb-1">Same-Day Dispatch & COD</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dispatched directly from our Bengaluru hub. Cash on Delivery supported with mobile OTP verification across 28,000+ Indian pincodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED REVIEWS CAROUSEL / GRID */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-ink-900">
              Verified Parent & Teacher Reviews
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Read real feedback from students and parents across Bengaluru, Mumbai, Delhi, and Hyderabad.
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>4.8 / 5.0 (520+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <h3 className="font-bold text-sm text-ink-900 mb-2">
                  "{review.title}"
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {review.reviewText}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="font-semibold text-ink-900">
                  {review.reviewerDisplayName}
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
