'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  Search, 
  GraduationCap, 
  ShieldCheck, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { useCart } from '@/lib/store/cartStore';
import { CLASSES, BOARDS } from '@/lib/data/taxonomy';
import { STORE_CONFIG } from '@/lib/config';

export default function Navbar() {
  const router = useRouter();
  const { totalItemsCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('CBSE');
  const [showClassDropdown, setShowClassDropdown] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Banner Notice */}
      <div className="bg-bee-500 text-ink-900 px-4 py-1.5 text-xs font-semibold tracking-wide flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-ink-900 text-bee-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
              Bengaluru Hub
            </span>
            <span>Pre-assembled working models & exhibition kits • Cash on Delivery across India</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px]">
            <span>📞 Support: {STORE_CONFIG.supportPhone}</span>
            <Link href="/dashboard" className="underline hover:text-white transition">
              Admin & Super Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bee-400 to-bee-500 flex items-center justify-center shadow-md shadow-bee-500/20 group-hover:scale-105 transition">
            <span className="text-2xl" role="img" aria-label="bee">🐝</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-ink-900">
                Project<span className="text-bee-600">Bee</span>
              </span>
            </div>
            <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
              School Projects & Science Working Models
            </p>
          </div>
        </Link>

        {/* Board & Class Quick Picker */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium">
          <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            {BOARDS.map((b) => (
              <button
                key={b.code}
                onClick={() => setSelectedBoard(b.code)}
                className={`px-2.5 py-1 rounded-md transition ${
                  selectedBoard === b.code
                    ? 'bg-white text-ink-900 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-ink-900'
                }`}
              >
                {b.code}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowClassDropdown(!showClassDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition text-slate-700"
            >
              <GraduationCap className="w-3.5 h-3.5 text-bee-600" />
              <span>Classes 1–12</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showClassDropdown && (
              <div 
                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-3 grid grid-cols-3 gap-1.5 z-50 animate-in fade-in"
                onMouseLeave={() => setShowClassDropdown(false)}
              >
                {CLASSES.map((c) => (
                  <Link
                    key={c.grade}
                    href={`/catalog?grade=${c.grade}&board=${selectedBoard}`}
                    onClick={() => setShowClassDropdown(false)}
                    className="p-1.5 text-center rounded-lg hover:bg-bee-50 hover:text-bee-700 text-slate-700 text-xs font-medium border border-transparent hover:border-bee-200 transition"
                  >
                    Class {c.grade}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md relative hidden sm:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search working models (e.g. Hydraulics, Solar, Lungs)..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-slate-200 focus:border-bee-500 focus:ring-2 focus:ring-bee-500/20 outline-hidden transition bg-slate-50 focus:bg-white"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </form>

        {/* Right Actions: Cart & Dashboard Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/catalog"
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-bee-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Browse All</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-ink-900 px-3 py-2 rounded-xl transition border border-slate-200"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Admin Portal</span>
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center justify-center p-2.5 rounded-xl bg-ink-900 text-white hover:bg-ink-800 transition shadow-sm"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-bee-400" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-bee-500 text-ink-900 text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {totalItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
