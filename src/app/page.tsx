'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Dna, 
  Leaf, 
  Bot, 
  FlaskConical, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import ProductCard from '@/components/catalog/ProductCard';
import { PRODUCTS } from '@/lib/data/catalog';
import { CLASSES } from '@/lib/data/taxonomy';
import { REVIEWS } from '@/lib/data/reviews';

export default function HomePage() {
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);
  const displayProducts = selectedClass
    ? PRODUCTS.filter((p) => p.classes.includes(selectedClass))
    : featuredProducts;

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-br from-amber-50 via-bee-50/60 to-white border-b border-amber-200/50 py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-bee-500/15 text-ink-900 border border-bee-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs">
              <span className="text-base" role="img" aria-label="trophy">🏆</span>
              <span>India’s #1 Destination for School Science Exhibition Models</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-900 tracking-tight leading-none">
              School Projects <br />
              <span className="text-bee-600 underline decoration-bee-400 decoration-wavy decoration-4">
                Made Easy!
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
                <span>Browse Working Models</span>
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
        </div>

        {/* Decorative Graphic Background Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-bee-400/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. CLASS SELECTOR STRIP (Class 1 to 12) */}
      <section className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-bee-500" />
                <span>Find by Your Child's Class</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Curriculum-aligned science and exhibition projects for primary, middle, and high school.
              </p>
            </div>
            {selectedClass && (
              <button
                onClick={() => setSelectedClass(null)}
                className="text-xs text-bee-700 font-bold hover:underline self-start sm:self-auto"
              >
                Clear selection (Show all)
              </button>
            )}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
            {CLASSES.map((c) => {
              const isActive = selectedClass === c.grade;
              return (
                <button
                  key={c.grade}
                  onClick={() => setSelectedClass(isActive ? null : c.grade)}
                  className={`py-3 px-2 rounded-2xl border text-center transition flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-bee-500 text-ink-900 border-bee-600 font-black shadow-md shadow-bee-500/20 scale-105'
                      : 'border-slate-200 hover:border-bee-400 hover:bg-bee-50/50 text-slate-700 font-bold'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">
                    Grade
                  </span>
                  <span className="text-base sm:text-lg font-extrabold leading-none mt-0.5">
                    {c.grade}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. POPULAR SUBJECT CATEGORIES */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-ink-900">Explore by Subject</h2>
            <p className="text-xs text-slate-500 mt-1">
              From physics fluid dynamics to biology models and robotics automation.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-xs font-bold text-bee-700 hover:text-bee-800 flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <Link
            href="/catalog?subject=physics"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition group flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition">
              <Zap className="w-6 h-6" />
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-sm text-ink-900 group-hover:text-blue-600 transition">Physics</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Hydraulics, Magnets, Circuits</p>
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
              <h3 className="font-bold text-sm text-ink-900 group-hover:text-emerald-600 transition">Biology</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Lungs, DNA, Cells, Heart</p>
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
              <h3 className="font-bold text-sm text-ink-900 group-hover:text-amber-600 transition">EVS & Energy</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Solar, Rainwater, Water Cycle</p>
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
              <h3 className="font-bold text-sm text-ink-900 group-hover:text-purple-600 transition">Robotics & AI</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Smart Irrigation, Sensors, LDR</p>
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
              <h3 className="font-bold text-sm text-ink-900 group-hover:text-rose-600 transition">Chemistry</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Volcanoes, Reactions, Crystals</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS GRID */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-ink-900">
              {selectedClass ? `Projects for Class ${selectedClass}` : 'Exhibition Best-Sellers'}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Handcrafted in Bengaluru with verified customer reviews and zero-fail components.
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
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. VERIFIED PARENT REVIEWS HIGHLIGHTS */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-bee-700 bg-bee-100 px-3 py-1 rounded-full">
              Real Parent Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900 mt-3">
              Trusted by 10,000+ School Parents
            </h2>
            <p className="text-xs text-slate-500 mt-1.5">
              Verified-purchase reviews from parents across CBSE, ICSE, and Bangalore top schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r) => (
              <div
                key={r.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-sm text-ink-900 mb-2">
                    "{r.title}"
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {r.reviewText}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-ink-900">
                    {r.reviewerDisplayName}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    ✓ Verified Purchase
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
