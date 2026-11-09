'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/lib/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0];
  const discountPercent = Math.round(
    ((product.mrpPaise - product.sellingPricePaise) / product.mrpPaise) * 100
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Media & Tags */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Format Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white/95 text-ink-900 shadow-xs backdrop-blur-xs">
            {product.formatId === 'working_model' ? '⚡ Working Model' : '🏆 Science Display'}
          </span>
          {discountPercent > 0 && (
            <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-bee-500 text-ink-900 shadow-xs">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Free viva card badge */}
        <div className="absolute bottom-2 right-2 bg-ink-900/80 text-white text-[9px] font-semibold px-2 py-0.5 rounded backdrop-blur-xs">
          + Viva Card Included
        </div>
      </Link>

      {/* Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Class & Board Pills */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 mb-1.5">
            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
              Class {Math.min(...product.classes)}–{Math.max(...product.classes)}
            </span>
            <span>•</span>
            <span className="text-bee-700 uppercase tracking-wider">
              {product.boards.slice(0, 2).join(' / ')}
            </span>
          </div>

          {/* Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-bold text-sm text-ink-900 group-hover:text-bee-600 transition line-clamp-1">
              {product.title}
            </h3>
          </Link>

          {/* Short description */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Star Ratings */}
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold ml-1 text-ink-900">{product.ratingAvg.toFixed(1)}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              ({product.ratingCount} verified reviews)
            </span>
          </div>
        </div>

        {/* Bottom Price & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-ink-900">
                ₹{(product.sellingPricePaise / 100).toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{(product.mrpPaise / 100).toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] text-emerald-600 font-semibold block">
              Cash on Delivery Available
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-ink-900 hover:bg-bee-500 hover:text-ink-900 text-white shadow-sm'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
