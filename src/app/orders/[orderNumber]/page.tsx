'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  Star, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useOrders } from '@/lib/store/orderStore';
import { REVIEWS } from '@/lib/data/reviews';

interface OrderConfirmationPageProps {
  params: {
    orderNumber: string;
  };
}

export default function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  const { orderNumber } = params;
  const { getOrder } = useOrders();
  const order = getOrder(orderNumber);

  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-md">
        <h1 className="text-xl font-bold text-ink-900">Order Not Found</h1>
        <p className="text-xs text-slate-500 mt-2 mb-4">
          We could not locate order <strong>{orderNumber}</strong>.
        </p>
        <Link href="/" className="text-xs font-bold text-bee-700 underline">
          Return Home
        </Link>
      </div>
    );
  }

  const steps = [
    { key: 'confirmed', label: 'Order Confirmed', desc: 'WhatsApp verified', icon: CheckCircle2 },
    { key: 'processing', label: 'Testing & Prep', desc: 'Zero-leak bench tested', icon: Clock },
    { key: 'packed', label: 'Packed', desc: 'Reinforced box', icon: Package },
    { key: 'shipped', label: 'Shipped', desc: order.awbNumber ? `AWB: ${order.awbNumber}` : 'Shiprocket Courier', icon: Truck },
    { key: 'delivered', label: 'Delivered', desc: 'Doorstep COD cash paid', icon: CheckCircle2 },
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'confirmed': return 0;
      case 'processing': return 1;
      case 'packed': return 2;
      case 'shipped': return 3;
      case 'out_for_delivery': return 3;
      case 'delivered': return 4;
      default: return 0;
    }
  };

  const currentStepIdx = getStepIndex(order.status);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    // Simulate verified review recording
    REVIEWS.unshift({
      id: `rev-${Date.now()}`,
      productId: order.items[0]?.productId || 'prod-001',
      rating,
      title: reviewTitle || 'Excellent exhibition model',
      reviewText,
      reviewerDisplayName: `${order.parentName}, Class ${order.studentClass || 7} Parent`,
      isVerifiedPurchase: true,
      helpfulVotesCount: 0,
      createdAt: new Date().toISOString(),
    });

    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl space-y-8">
      {/* Top Banner Notice */}
      <div className="bg-emerald-500 text-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-emerald-500/20 text-center space-y-3">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black">
          Order Confirmed & Verified!
        </h1>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-lg mx-auto">
          Thank you, <strong className="text-white">{order.parentName}</strong>! Your Cash on Delivery order has been verified via WhatsApp. Our Bengaluru workshop has queued your model for calibration.
        </p>
        <div className="inline-block bg-white text-ink-900 font-mono text-xs font-black px-4 py-1.5 rounded-full shadow-xs">
          Order ID: {order.orderNumber}
        </div>
      </div>

      {/* Visual Live Status Timeline */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="font-bold text-base text-ink-900">Fulfillment & Courier Tracking</h2>
            <p className="text-xs text-slate-500">Live milestone updates from Bangalore Dispatch Hub.</p>
          </div>
          {order.awbNumber && (
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg">
              Courier AWB: {order.awbNumber}
            </span>
          )}
        </div>

        {/* Milestone Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {steps.map((st, i) => {
            const isCompleted = i <= currentStepIdx;
            const isCurrent = i === currentStepIdx;
            const Icon = st.icon;

            return (
              <div
                key={st.key}
                className={`p-4 rounded-2xl border text-center transition ${
                  isCurrent
                    ? 'border-bee-500 bg-bee-50/50 shadow-xs'
                    : isCompleted
                    ? 'border-emerald-300 bg-emerald-50/30'
                    : 'border-slate-200 opacity-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-ink-900">{st.label}</h4>
                <p className="text-[10px] text-slate-500 mt-0.5">{st.desc}</p>
              </div>
            );
          })}
        </div>

        {/* If Delivered, provide Write a Verified Review button */}
        {order.status === 'delivered' && (
          <div className="p-4 rounded-2xl bg-bee-50 border border-bee-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-xs text-ink-900">Your model has arrived! How was the school exhibition?</h4>
              <p className="text-[11px] text-slate-600">
                You are verified to submit a product rating and viva feedback for other school parents.
              </p>
            </div>
            <button
              onClick={() => setShowReviewModal(true)}
              className="px-4 py-2 bg-ink-900 hover:bg-bee-500 hover:text-ink-900 text-white font-bold text-xs rounded-xl transition shrink-0"
            >
              Write Verified Review
            </button>
          </div>
        )}
      </div>

      {/* Two Column Grid: Order Items & Delivery Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
        {/* Left: Ordered Items */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-ink-900 border-b border-slate-100 pb-2">
            Items in This Order
          </h3>
          <div className="space-y-3">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start pb-2 border-b border-slate-50">
                <div>
                  <h4 className="font-bold text-ink-900">{item.titleSnapshot}</h4>
                  <span className="text-[10px] text-slate-400">SKU: {item.skuSnapshot} • Qty: {item.quantity}</span>
                </div>
                <span className="font-bold text-ink-900">
                  ₹{(item.totalPaise / 100).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 space-y-1.5 text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{(order.subtotalPaise / 100).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee:</span>
              <span>{order.shippingFeePaise === 0 ? 'FREE' : `₹${(order.shippingFeePaise / 100).toLocaleString('en-IN')}`}</span>
            </div>
            <div className="flex justify-between font-black text-ink-900 text-sm pt-2 border-t border-slate-100">
              <span>Total Payable at Doorstep (COD):</span>
              <span className="text-bee-700">₹{(order.totalPayablePaise / 100).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Right: Parent & Delivery Snapshot */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-ink-900 border-b border-slate-100 pb-2">
            Delivery Address & Contact
          </h3>
          <div className="space-y-3 text-slate-600">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Recipient & Parent:</span>
              <span className="font-bold text-ink-900">{order.shippingAddress.recipientName}</span>
              <span className="block text-slate-500">WhatsApp: +91 {order.parentWhatsapp}</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Shipping Address:</span>
              <p className="text-slate-700 leading-relaxed">
                {order.shippingAddress.addressLine1} <br />
                {order.shippingAddress.landmark && `${order.shippingAddress.landmark}, `}
                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
              </p>
            </div>

            {order.studentName && (
              <div className="pt-2 border-t border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Student:</span>
                <span className="font-semibold text-ink-900">{order.studentName} (Class {order.studentClass || 'N/A'})</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <h3 className="font-black text-base text-ink-900">Write a Verified Parent Review</h3>
            <p className="text-xs text-slate-500">
              Your feedback helps other school parents choose the right science exhibition models.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Star Rating (1–5)</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setRating(s)}
                      className={`p-2 rounded-xl border text-base ${
                        rating >= s ? 'bg-amber-100 border-amber-300 text-amber-500' : 'border-slate-200 text-slate-300'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Review Headline</label>
                <input
                  type="text"
                  required
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  placeholder="e.g. Secured 1st prize in school science fair!"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 outline-hidden"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Your Detailed Feedback</label>
                <textarea
                  required
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Tell other parents about the build quality, viva questions, and how your child performed..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 outline-hidden"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="w-1/3 py-2.5 rounded-xl border border-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 rounded-xl bg-bee-500 hover:bg-bee-600 text-ink-900 font-black"
                >
                  {reviewSubmitted ? 'Saved!' : 'Submit Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
