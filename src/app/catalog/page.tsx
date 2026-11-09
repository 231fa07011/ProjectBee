'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from '@/components/catalog/ProductCard';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import { PRODUCTS } from '@/lib/data/catalog';
import { CLASSES, SUBJECTS } from '@/lib/data/taxonomy';
import { Search, SlidersHorizontal, X, GraduationCap, Sparkles } from 'lucide-react';

function CatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get('q') || '';
  const initialGrade = searchParams.get('grade') ? Number(searchParams.get('grade')) : null;
  const initialBoard = searchParams.get('board') || '';
  const initialSubject = searchParams.get('subject') || '';
  const initialFormat = searchParams.get('format') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedBoard, setSelectedBoard] = useState(initialBoard);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(initialGrade);
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedFormat, setSelectedFormat] = useState(initialFormat);
  const [sortBy, setSortBy] = useState('popular');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Sync state whenever URL query params change (e.g. clicking Grade from navbar or home)
  React.useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    const g = searchParams.get('grade');
    setSelectedGrade(g ? Number(g) : null);
    setSelectedBoard(searchParams.get('board') || '');
    setSelectedSubject(searchParams.get('subject') || '');
    setSelectedFormat(searchParams.get('format') || '');
  }, [searchParams]);

  // Update URL helper
  const updateUrlParam = (param: string, value: string | number | null) => {
    const params = new URLSearchParams(window.location.search);
    if (value === null || value === '') {
      params.delete(param);
    } else {
      params.set(param, String(value));
    }
    router.replace(`/catalog?${params.toString()}`, { scroll: false });
  };

  const handleGradeSelect = (grade: number | null) => {
    setSelectedGrade(grade);
    updateUrlParam('grade', grade);
  };

  const handleSubjectSelect = (subj: string) => {
    setSelectedSubject(subj);
    updateUrlParam('subject', subj || null);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedBoard('');
    setSelectedGrade(null);
    setSelectedSubject('');
    setSelectedFormat('');
    router.replace('/catalog', { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Text Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = product.title.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q) || product.fullDescription.toLowerCase().includes(q);
        const matchesSubject = product.subjects.some((s) => s.toLowerCase().includes(q));
        const matchesContents = product.packageContents.some((c) => c.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesSubject && !matchesContents) {
          return false;
        }
      }

      // 2. Board Filter
      if (selectedBoard && !product.boards.includes(selectedBoard as any)) {
        return false;
      }

      // 3. Grade / Class Filter
      if (selectedGrade !== null && !product.classes.includes(selectedGrade)) {
        return false;
      }

      // 4. Subject Filter
      if (selectedSubject && !product.subjects.includes(selectedSubject)) {
        return false;
      }

      // 5. Format Filter
      if (selectedFormat && product.formatId !== selectedFormat) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.sellingPricePaise - b.sellingPricePaise;
      if (sortBy === 'price_desc') return b.sellingPricePaise - a.sellingPricePaise;
      if (sortBy === 'rating') return b.ratingAvg - a.ratingAvg;
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [searchQuery, selectedBoard, selectedGrade, selectedSubject, selectedFormat, sortBy]);

  const hasActiveFilters = Boolean(
    searchQuery || selectedBoard || selectedGrade !== null || selectedSubject || selectedFormat
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Header and Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-ink-900 flex items-center gap-2">
            <span>School Projects & Science Working Models</span>
            {selectedGrade && (
              <span className="text-xs font-black bg-bee-500 text-ink-900 px-3 py-1 rounded-full">
                Grade {selectedGrade}
              </span>
            )}
            {selectedSubject && (
              <span className="text-xs font-black bg-ink-900 text-white px-3 py-1 rounded-full capitalize">
                {selectedSubject.replace('-', ' ')}
              </span>
            )}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Displaying {filteredProducts.length} verified project models ready for immediate dispatch from Bengaluru.
          </p>
        </div>

        {/* Mobile Filter Toggle & Sort Dropdown */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-white border border-slate-200 rounded-xl shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-xs font-bold bg-white border border-slate-200 rounded-xl text-slate-700 outline-hidden focus:border-bee-500 shadow-xs"
          >
            <option value="popular">Sort by: Popularity</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* QUICK HORIZONTAL GRADE SELECTOR STRIP (Class 1 to 12) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-ink-900">
          <span className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-bee-600" />
            <span>Filter by Class:</span>
          </span>
          {selectedGrade !== null && (
            <button
              onClick={() => handleGradeSelect(null)}
              className="text-[11px] text-rose-600 hover:underline font-semibold flex items-center gap-0.5"
            >
              <X className="w-3 h-3" />
              <span>Show All Classes</span>
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <button
            onClick={() => handleGradeSelect(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
              selectedGrade === null
                ? 'bg-ink-900 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Classes ({PRODUCTS.length})
          </button>

          {CLASSES.map((c) => {
            const countForGrade = PRODUCTS.filter((p) => p.classes.includes(c.grade)).length;
            const isSelected = selectedGrade === c.grade;

            return (
              <button
                key={c.grade}
                onClick={() => handleGradeSelect(isSelected ? null : c.grade)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-bee-500 border-bee-600 text-ink-900 shadow-xs'
                    : 'border-slate-200 bg-white hover:bg-bee-50/80 text-slate-700 hover:border-bee-300'
                }`}
              >
                <span>Grade {c.grade}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isSelected ? 'bg-white/80 text-ink-900' : 'bg-slate-100 text-slate-500'
                }`}>
                  {countForGrade}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* QUICK HORIZONTAL SUBJECT SELECTOR STRIP */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 overflow-x-auto scrollbar-thin">
        <span className="text-xs font-bold text-slate-500 shrink-0 pl-1">Subject:</span>
        <button
          onClick={() => handleSubjectSelect('')}
          className={`px-3 py-1 rounded-xl text-xs font-bold shrink-0 transition ${
            !selectedSubject
              ? 'bg-ink-900 text-white shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          All ({PRODUCTS.length})
        </button>

        {SUBJECTS.map((s) => {
          const countForSubject = PRODUCTS.filter((p) => p.subjects.includes(s.id)).length;
          const isSelected = selectedSubject === s.id;

          return (
            <button
              key={s.id}
              onClick={() => handleSubjectSelect(isSelected ? '' : s.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold shrink-0 transition flex items-center gap-1.5 border ${
                isSelected
                  ? 'bg-bee-500 border-bee-600 text-ink-900 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-bee-50/80 text-slate-700 hover:border-bee-300'
              }`}
            >
              <span>{s.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                isSelected ? 'bg-white/80 text-ink-900' : 'bg-slate-100 text-slate-500'
              }`}>
                {countForSubject}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Filter Tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold">Active filters:</span>
          {selectedGrade !== null && (
            <span className="inline-flex items-center gap-1 bg-bee-100 text-bee-900 px-2.5 py-1 rounded-lg font-bold">
              Grade {selectedGrade}
              <button onClick={() => handleGradeSelect(null)} className="hover:text-red-600">✕</button>
            </span>
          )}
          {selectedSubject && (
            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-900 px-2.5 py-1 rounded-lg font-bold capitalize">
              {selectedSubject.replace('-', ' ')}
              <button onClick={() => handleSubjectSelect('')} className="hover:text-red-600">✕</button>
            </span>
          )}
          {selectedBoard && (
            <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-900 px-2.5 py-1 rounded-lg font-bold">
              Board: {selectedBoard}
              <button onClick={() => setSelectedBoard('')} className="hover:text-red-600">✕</button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg font-bold">
              Search: "{searchQuery}"
              <button onClick={() => setSearchQuery('')} className="hover:text-red-600">✕</button>
            </span>
          )}
          <button
            onClick={handleClearFilters}
            className="text-xs text-rose-600 hover:underline font-bold ml-2"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Main Grid with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24">
          <FilterSidebar
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            selectedGrade={selectedGrade}
            setSelectedGrade={handleGradeSelect}
            selectedSubject={selectedSubject}
            setSelectedSubject={handleSubjectSelect}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
            onClearFilters={handleClearFilters}
          />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {showMobileFilter && (
          <div className="fixed inset-0 z-50 bg-black/40 flex justify-end lg:hidden">
            <div className="w-80 bg-white h-full p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-sm">Filters</span>
                <button
                  onClick={() => setShowMobileFilter(false)}
                  className="text-xs font-bold text-slate-500"
                >
                  ✕ Close
                </button>
              </div>
              <FilterSidebar
                selectedBoard={selectedBoard}
                setSelectedBoard={setSelectedBoard}
                selectedGrade={selectedGrade}
                setSelectedGrade={handleGradeSelect}
                selectedSubject={selectedSubject}
                setSelectedSubject={handleSubjectSelect}
                selectedFormat={selectedFormat}
                setSelectedFormat={setSelectedFormat}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="lg:col-span-3 space-y-6">
          {/* Keyword Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, law or keyword (e.g. Pascal, Solar, Circuit, Heart, Newton, Abacus)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl border border-slate-200 focus:border-bee-500 focus:ring-2 focus:ring-bee-500/20 outline-hidden bg-white shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-base text-ink-900">No matching projects found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                We couldn't find any models matching your selected filters. Try clearing your filters or searching for general topics.
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-bee-500 hover:bg-bee-600 text-ink-900 font-bold text-xs px-5 py-2.5 rounded-xl transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-12 text-center text-xs">Loading ProjectBee Catalog...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
