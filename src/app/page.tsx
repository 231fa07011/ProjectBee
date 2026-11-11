'use client';

import React, { useState } from 'react';
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
  Eye
} from 'lucide-react';
import ProductCard from '@/components/catalog/ProductCard';
import { PRODUCTS } from '@/lib/data/catalog';
import { CLASSES } from '@/lib/data/taxonomy';
import { REVIEWS } from '@/lib/data/reviews';

export default function HomePage() {
  const router = useRouter();
  const [activeGrade, setActiveGrade] = useState<number>(7);

  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);
  
  // Grade-filtered preview products
  const gradeFilteredProducts = PRODUCTS.filter((p) => p.classes.includes(activeGrade));

  const handleGradeClick = (grade: number) => {
    setActiveGrade(grade);
  };

  const handleOpenGradeCatalog = (grade: number) => {
    router.push(`/catalog?grade=${grade}`);
  };

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
