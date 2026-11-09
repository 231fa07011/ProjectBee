'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, ArrowRight, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/store/cartStore';

export default function CartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    subtotalPaise, 
    shippingFeePaise, 
    totalPayablePaise 
  } = useCart();

  const freeShippingThresholdPaise = 99900;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThresholdPaise - subtotalPaise);
  const freeShippingProgressPercent = Math.min(
    100,
    Math.round((subtotalPaise / freeShippingThresholdPaise) * 100)
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-md">
        <div className="w-20 h-20 bg-bee-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          🛍️
        </div>
        <h1 className="text-2xl font-black text-ink-900">Your Cart is Empty</h1>
        <p className="text-xs text-slate-500 mt-2 mb-6 leading-relaxed">
          Looks like you haven't added any school projects or working models yet. Explore our curriculum-aligned catalog!
        </p>
        <Link
          href="/catalog"
          className="bg-ink-900 hover:bg-bee-500 hover:text-ink-900 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2"
        >
          <span>Explore School Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-ink-900">Your Shopping Cart</h1>
        <p className="text-xs text-slate-500 mt-1">
          Review your selected school models and proceed to Cash on Delivery (COD) checkout.
        </p>
      </div>

      {/* Free Shipping Alert Bar */}
      <div className="bg-bee-50 p-4 rounded-2xl border border-bee-200">
        <div className="flex justify-between items-center text-xs font-bold text-ink-900 mb-2">
          <span>
            {amountNeededForFreeShipping > 0
              ? `Add ₹${(amountNeededForFreeShipping / 100).toLocaleString('en-IN')} more to unlock FREE Delivery!`
              : '🎉 You have qualified for FREE Express Delivery!'}
          </span>
          <span className="text-bee-800">{freeShippingProgressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-amber-200/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-bee-500 transition-all duration-500 rounded-full"
            style={{ width: `${freeShippingProgressPercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Cart Items List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {items.map(({ product, quantity }) => {
            const primaryImg = product.images.find((i) => i.isPrimary) || product.images[0];
            return (
              <div
                key={product.id}
                className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-20 h-20 rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                    {primaryImg && (
                      <Image src={primaryImg.url} alt={product.title} fill className="object-cover" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-bee-700 bg-bee-50 px-2 py-0.5 rounded">
                      Class {Math.min(...product.classes)}–{Math.max(...product.classes)} • {product.boards[0]}
                    </span>
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-bold text-sm text-ink-900 hover:text-bee-600 transition mt-1 line-clamp-1">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-xs font-bold text-ink-900 mt-1">
                      ₹{(product.sellingPricePaise / 100).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center font-bold text-slate-600 hover:bg-white rounded-lg transition"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-xs">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center font-bold text-slate-600 hover:bg-white rounded-lg transition"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal for line item */}
                  <span className="text-sm font-extrabold text-ink-900 min-w-[70px] text-right">
                    ₹{((product.sellingPricePaise * quantity) / 100).toLocaleString('en-IN')}
                  </span>

                  {/* Delete button */}
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Order Summary Card (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
          <h2 className="font-black text-lg text-ink-900 border-b border-slate-100 pb-3">
            Order Summary
          </h2>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Items Subtotal:</span>
              <span className="font-bold text-ink-900">
                ₹{(subtotalPaise / 100).toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span>Shipping Fee:</span>
              <span className="font-bold text-ink-900">
                {shippingFeePaise === 0 ? (
                  <span className="text-emerald-600 font-extrabold uppercase">FREE</span>
                ) : (
                  `₹${(shippingFeePaise / 100).toLocaleString('en-IN')}`
                )}
              </span>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between text-base font-black text-ink-900">
              <span>Total Payable:</span>
              <span className="text-xl text-bee-700">
                ₹{(totalPayablePaise / 100).toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              Pay via Cash on Delivery (COD) upon courier arrival.
            </p>
          </div>

          <Link
            href="/checkout"
            className="w-full py-4 rounded-2xl bg-bee-500 hover:bg-bee-600 text-ink-900 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-bee-500/20 transition text-center"
          >
            <span>Proceed to COD Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-2 pt-2 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Parent WhatsApp verification for safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-600" />
              <span>Bangalore express same-day dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

