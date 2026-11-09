'use client';

import React from 'react';
import { BOARDS, CLASSES, SUBJECTS, PRODUCT_FORMATS } from '@/lib/data/taxonomy';
import { X, Filter } from 'lucide-react';

interface FilterSidebarProps {
  selectedBoard: string;
  setSelectedBoard: (board: string) => void;
  selectedGrade: number | null;
  setSelectedGrade: (grade: number | null) => void;
  selectedSubject: string;
  setSelectedSubject: (subj: string) => void;
  selectedFormat: string;
  setSelectedFormat: (fmt: string) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  selectedBoard,
  setSelectedBoard,
  selectedGrade,
  setSelectedGrade,
  selectedSubject,
  setSelectedSubject,
  selectedFormat,
  setSelectedFormat,
  onClearFilters,
}: FilterSidebarProps) {
  const hasActiveFilters = Boolean(
    selectedBoard || selectedGrade !== null || selectedSubject || selectedFormat
  );

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-bee-600" />
          <h3 className="font-bold text-sm text-ink-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-[11px] font-semibold text-rose-600 hover:underline flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* Curriculum Board */}
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
          Curriculum Board
        </label>
        <div className="space-y-1.5">
          <button
            onClick={() => setSelectedBoard('')}
            className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition font-medium ${
              !selectedBoard
                ? 'bg-ink-900 text-white font-bold'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Boards (CBSE & ICSE)
          </button>
          {BOARDS.map((b) => (
            <button
              key={b.code}
              onClick={() => setSelectedBoard(selectedBoard === b.code ? '' : b.code)}
              className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition font-medium ${
                selectedBoard === b.code
                  ? 'bg-bee-500 text-ink-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {b.name} ({b.code})
            </button>
          ))}
        </div>
      </div>

      {/* Class / Grade */}
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
          Class / Grade
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {CLASSES.map((c) => (
            <button
              key={c.grade}
              onClick={() => setSelectedGrade(selectedGrade === c.grade ? null : c.grade)}
              className={`py-1.5 text-xs font-semibold rounded-lg border text-center transition ${
                selectedGrade === c.grade
                  ? 'bg-bee-500 text-ink-900 border-bee-600 font-bold'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              C-{c.grade}
            </button>
          ))}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
          Subject
        </label>
        <div className="space-y-1.5">
          <button
            onClick={() => setSelectedSubject('')}
            className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition font-medium ${
              !selectedSubject
                ? 'bg-ink-900 text-white font-bold'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Subjects
          </button>
          {SUBJECTS.map((s) => (
            <button
              key={s.slug}
              onClick={() => setSelectedSubject(selectedSubject === s.slug ? '' : s.slug)}
              className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition font-medium ${
                selectedSubject === s.slug
                  ? 'bg-bee-500 text-ink-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Format */}
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
          Format
        </label>
        <div className="space-y-1.5">
          <button
            onClick={() => setSelectedFormat('')}
            className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition font-medium ${
              !selectedFormat
                ? 'bg-ink-900 text-white font-bold'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Formats
          </button>
          {PRODUCT_FORMATS.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFormat(selectedFormat === f.id ? '' : f.id)}
              className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition font-medium ${
                selectedFormat === f.id
                  ? 'bg-bee-500 text-ink-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
