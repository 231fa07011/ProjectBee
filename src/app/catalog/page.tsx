'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/catalog/ProductCard';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import { PRODUCTS } from '@/lib/data/catalog';
import { Search, SlidersHorizontal } from 'lucide-react';

function CatalogContent() {
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

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedBoard('');
    setSelectedGrade(null);
    setSelectedSubject('');
    setSelectedFormat('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-ink-900">
            School Projects & Science Working Models
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Displaying {filteredProducts.length} verified project models ready for immediate dispatch from Bengaluru.
          </p>
        </div>

        {/* Mobile Filter Toggle & Sort Dropdown */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-white border border-slate-200 rounded-xl"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-xs font-bold bg-white border border-slate-200 rounded-xl text-slate-700 outline-hidden focus:border-bee-500"
          >
            <option value="popular">Sort by: Popularity</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Main Grid with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24">
          <FilterSidebar
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
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
                setSelectedGrade={setSelectedGrade}
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
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
              placeholder="Search by topic, law or keyword (e.g. Pascal, Solar, Circuit, Heart)..."
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
