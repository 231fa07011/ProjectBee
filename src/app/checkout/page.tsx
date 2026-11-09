'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MessageSquare, 
  Lock, 
  CheckCircle2, 
  Truck, 
  ArrowLeft,
  AlertCircle 
} from 'lucide-react';
import { useCart } from '@/lib/store/cartStore';
import { useOrders } from '@/lib/store/orderStore';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotalPaise, shippingFeePaise, totalPayablePaise, clearCart } = useCart();
  const { createOrder } = useOrders();

  // Form Fields
  const [parentName, setParentName] = useState('Rajesh Kumar');
  const [parentPhone, setParentPhone] = useState('9876543210');
  const [parentWhatsapp, setParentWhatsapp] = useState('9876543210');
  const [studentName, setStudentName] = useState('Aarav Kumar');
  const [studentClass, setStudentClass] = useState('7');
  
  const [addressLine1, setAddressLine1] = useState('No. 42, 3rd Cross, Koramangala 4th Block');
  const [landmark, setLandmark] = useState('Near Sony World Junction');
  const [city, setCity] = useState('Bengaluru');
  const [state, setState] = useState('Karnataka');
  const [pincode, setPincode] = useState('560034');

  // WhatsApp OTP Verification state
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-md">
        <h1 className="text-xl font-bold text-ink-900">Your cart is empty</h1>
        <p className="text-xs text-slate-500 mt-2 mb-4">Please add models before checking out.</p>
        <Link href="/catalog" className="text-xs font-bold text-bee-700 underline">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const handleOpenOtpModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !parentWhatsapp.trim() || !addressLine1.trim() || !pincode.trim()) {
      alert('Please fill in all mandatory parent name, address, and WhatsApp contact fields.');
      return;
    }
    setOtpSent(true);
    setShowOtpModal(true);
    setOtpError('');
  };

  const handleVerifyOtpAndPlaceOrder = () => {
    // For demo/testing, accept '739102' or any 6-digit code
    if (!otpCode || otpCode.length !== 6) {
      setOtpError('Please enter the 6-digit WhatsApp verification code.');
      return;
    }

    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `PB-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randomSuffix}`;

    const newOrder = createOrder({
      orderNumber,
      status: 'confirmed',
      parentName,
      parentPhone,
      parentWhatsapp,
      studentName: studentName || undefined,
      studentClass: studentClass ? Number(studentClass) : undefined,
      shippingAddress: {
        recipientName: parentName,
        phone: parentPhone,
        addressLine1,
        landmark: landmark || undefined,
        city,
        state,
        pincode,
      },
      items: items.map((i) => ({
        productId: i.product.id,
        titleSnapshot: i.product.title,
        skuSnapshot: i.product.sku,
        unitPricePaise: i.product.sellingPricePaise,
        quantity: i.quantity,
        totalPaise: i.product.sellingPricePaise * i.quantity,
      })),
      subtotalPaise,
      discountPaise: 0,
      shippingFeePaise,
      totalPayablePaise,
      verifiedAt: new Date().toISOString(),
    });

    clearCart();
    setIsSubmitting(false);
    setShowOtpModal(false);
    router.push(`/orders/${newOrder.orderNumber}`);
  };

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      {/* Back button */}
      <Link href="/cart" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-ink-900 transition">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Shopping Cart</span>
      </Link>

      <div>
        <h1 className="text-3xl font-black text-ink-900">Cash on Delivery (COD) Checkout</h1>
        <p className="text-xs text-slate-500 mt-1">
          Complete your parent verification to confirm your doorstep delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Checkout Form (8 cols) */}
        <form onSubmit={handleOpenOtpModal} className="lg:col-span-8 space-y-6">
          {/* Section 1: Parent & Guardian Details */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <ShieldCheck className="w-5 h-5 text-bee-600" />
              <div>
                <h2 className="font-bold text-sm text-ink-900">Parent / Guardian Verification (Required)</h2>
                <p className="text-[11px] text-slate-500">
                  Per DPDP child safety guidelines, orders must be confirmed by an adult parent or guardian.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Parent / Guardian Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Parent WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-600 font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={parentWhatsapp}
                    onChange={(e) => setParentWhatsapp(e.target.value.replace(/\D/g, ''))}
                    placeholder="10-digit number"
                    className="w-full px-3.5 py-2.5 rounded-r-xl border border-slate-300 focus:border-bee-500 outline-hidden font-mono"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  We send a 6-digit WhatsApp OTP to prevent duplicate fake COD bookings.
                </span>
              </div>
            </div>

            {/* Optional student details */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-600 block mb-1">
                  Student Name (Optional, for Viva card customization)
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Aarav Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-600 block mb-1">
                  Student Grade / Class (Optional)
                </label>
                <select
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden bg-white"
                >
                  <option value="">Select Grade</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Delivery Address */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Truck className="w-5 h-5 text-blue-600" />
              <h2 className="font-bold text-sm text-ink-900">Doorstep Delivery Address</h2>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Flat, House No., Building, Street <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  placeholder="e.g. Flat 402, Green Glen Layout, Outer Ring Road"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Pincode <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    placeholder="560034"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    State <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-600 block mb-1">
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="e.g. Near Sony World Signal"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bee-500 outline-hidden"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-bee-500 hover:bg-bee-600 text-ink-900 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-bee-500/20 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Verify on WhatsApp & Place COD Order</span>
          </button>
        </form>

        {/* Right: Order Summary Sidebar (4 cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
          <h2 className="font-black text-base text-ink-900 border-b border-slate-100 pb-3">
            Items in Order ({items.length})
          </h2>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between items-start text-xs">
                <div>
                  <h4 className="font-bold text-ink-900 line-clamp-1">{product.title}</h4>
                  <span className="text-[11px] text-slate-400">Qty: {quantity}</span>
                </div>
                <span className="font-bold text-ink-900 shrink-0">
                  ₹{((product.sellingPricePaise * quantity) / 100).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Items Total:</span>
              <span className="font-bold text-ink-900">
                ₹{(subtotalPaise / 100).toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee:</span>
              <span className="font-bold text-ink-900">
                {shippingFeePaise === 0 ? <span className="text-emerald-600 uppercase font-bold">FREE</span> : `₹${(shippingFeePaise / 100).toLocaleString('en-IN')}`}
              </span>
            </div>
            <div className="pt-2 border-t border-slate-100 flex justify-between text-base font-black text-ink-900">
              <span>Total Payable (COD):</span>
              <span className="text-xl text-bee-700">
                ₹{(totalPayablePaise / 100).toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 text-[11px] text-emerald-800 border border-emerald-200 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Zero advance payment needed. Pay in cash or UPI to the courier upon physical inspection at your home.
            </span>
          </div>
        </div>
      </div>

      {/* WHATSAPP OTP VERIFICATION MODAL */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-ink-900">Verify WhatsApp Passcode</h3>
              <p className="text-xs text-slate-500">
                We sent a 6-digit one-time confirmation code to: <br />
                <strong className="text-ink-900 font-bold">+91 {parentWhatsapp}</strong>
              </p>
            </div>

            {/* Test Helper Notification & Direct WhatsApp Action */}
            <div className="p-3 rounded-xl bg-bee-50 border border-bee-200 text-xs text-ink-900 space-y-1.5">
              <div>
                <span className="font-bold">🧪 Instant Passcode:</span> Use{' '}
                <strong className="font-mono bg-bee-200 px-1.5 py-0.5 rounded cursor-pointer" onClick={() => setOtpCode('739102')}>
                  739102
                </strong>{' '}
                (Click to auto-fill)
              </div>
              <div className="text-[11px] text-slate-600">
                Or send confirmation directly via WhatsApp app:
                <a
                  href={`https://wa.me/919845012345?text=Hello%20ProjectBee!%20Please%20verify%20my%20COD%20Order%20for%20parent%20${encodeURIComponent(parentName)}%20(Phone:%20${parentWhatsapp})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open WhatsApp Direct Chat →</span>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                maxLength={6}
                value={otpCode}
                onChange={(e) => {
                  setOtpCode(e.target.value.replace(/\D/g, ''));
                  setOtpError('');
                }}
                placeholder="• • • • • •"
                className="w-full text-center tracking-[0.5em] text-2xl font-black py-3 rounded-2xl border-2 border-slate-300 focus:border-bee-500 outline-hidden font-mono"
              />

              {otpError && (
                <p className="text-xs text-rose-600 font-bold text-center">{otpError}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowOtpModal(false)}
                className="w-1/3 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleVerifyOtpAndPlaceOrder}
                className="w-2/3 py-3 rounded-xl bg-bee-500 hover:bg-bee-600 text-ink-900 font-black text-xs shadow-md transition"
              >
                {isSubmitting ? 'Verifying...' : 'Verify & Confirm COD Order'}
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center">
              Didn't receive the WhatsApp message? Resend available in 45s.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

