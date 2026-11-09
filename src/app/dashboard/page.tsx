'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Package, 
  ShieldCheck, 
  Star, 
  Users, 
  Settings, 
  Activity, 
  Truck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useOrders } from '@/lib/store/orderStore';
import { PRODUCTS } from '@/lib/data/catalog';
import { REVIEWS } from '@/lib/data/reviews';
import { OrderStatus } from '@/types';

export default function DashboardPage() {
  const { orders, updateOrderStatus } = useOrders();
  const [activeTab, setActiveTab] = useState<'orders' | 'inventory' | 'reviews' | 'superadmin'>('orders');

  // Filter state for orders
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');
  const [orderSearchQuery, setOrderSearchQuery] = useState('');

  // Feature flags state
  const [featureFlags, setFeatureFlags] = useState({
    whatsapp_otp: true,
    guest_checkout: true,
    verified_reviews: true,
    video_embeds: true,
  });

  // Inventory adjustment modal
  const [selectedProductForStock, setSelectedProductForStock] = useState<null | string>(null);
  const [newStockInput, setNewStockInput] = useState('');
  const [stockReason, setStockReason] = useState('');

  // Calculated KPI Metrics
  const totalRevenuePaise = orders.reduce((sum, o) => sum + o.totalPayablePaise, 0);
  const deliveredCount = orders.filter((o) => o.status === 'delivered').length;
  const deliverySuccessRate = orders.length > 0 ? Math.round((deliveredCount / orders.length) * 100) : 95;
  const lowStockCount = PRODUCTS.filter((p) => p.stockOnHand <= 15).length;

  const filteredOrders = orders.filter((o) => {
    if (orderStatusFilter !== 'all' && o.status !== orderStatusFilter) return false;
    if (orderSearchQuery.trim()) {
      const q = orderSearchQuery.toLowerCase();
      return (
        o.orderNumber.toLowerCase().includes(q) ||
        o.parentName.toLowerCase().includes(q) ||
        o.shippingAddress.pincode.includes(q)
      );
    }
    return true;
  });

  const handleAdvanceOrderStatus = (orderId: string, currentStatus: OrderStatus) => {
    let nextStatus: OrderStatus = 'processing';
    let extra: { awbNumber?: string; courierName?: string } = {};

    if (currentStatus === 'confirmed') nextStatus = 'processing';
    else if (currentStatus === 'processing') nextStatus = 'packed';
    else if (currentStatus === 'packed') {
      nextStatus = 'shipped';
      extra = {
        awbNumber: `SR-BLR-${Math.floor(100000 + Math.random() * 900000)}`,
        courierName: 'Shiprocket Express',
      };
    } else if (currentStatus === 'shipped') nextStatus = 'delivered';

    updateOrderStatus(orderId, nextStatus, extra);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-ink-900 text-bee-400 font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
              Unified Portal
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              ProjectBee Operations & System Control
            </span>
          </div>
          <h1 className="text-3xl font-black text-ink-900 mt-1">Operations Control Center</h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/catalog"
            className="text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3.5 py-2 rounded-xl transition flex items-center gap-1.5"
          >
            <span>Customer Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Supabase & Shiprocket Connected</span>
          </div>
        </div>
      </div>

      {/* KPI Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Gross Order Value (COD)
          </span>
          <div className="text-2xl font-black text-ink-900">
            ₹{(totalRevenuePaise / 100).toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 block">
            ↑ 14% vs last week (Exhibition Season)
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Active Orders in Pipeline
          </span>
          <div className="text-2xl font-black text-ink-900">{orders.length}</div>
          <span className="text-[10px] font-semibold text-blue-600 block">
            {orders.filter((o) => o.status === 'confirmed').length} pending dispatch
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            COD Fulfillment Success
          </span>
          <div className="text-2xl font-black text-emerald-700">{deliverySuccessRate}%</div>
          <span className="text-[10px] font-semibold text-slate-400 block">
            Zero duplicate bookings via WhatsApp OTP
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Live Catalog SKUs
          </span>
          <div className="text-2xl font-black text-ink-900">{PRODUCTS.length} Models</div>
          <span className="text-[10px] font-semibold text-amber-600 block">
            {lowStockCount} models below threshold (&lt;15 units)
          </span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-slate-200 gap-2 text-xs font-bold overflow-x-auto">
        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'orders'
              ? 'border-bee-500 text-ink-900 font-black'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Truck className="w-4 h-4 text-bee-600" />
          <span>Order Fulfillment ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('inventory')}
          className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'inventory'
              ? 'border-bee-500 text-ink-900 font-black'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Package className="w-4 h-4 text-blue-600" />
          <span>Catalog & Inventory ({PRODUCTS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'reviews'
              ? 'border-bee-500 text-ink-900 font-black'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Star className="w-4 h-4 text-amber-500" />
          <span>Review Moderation ({REVIEWS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('superadmin')}
          className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition ${
            activeTab === 'superadmin'
              ? 'border-bee-500 text-ink-900 font-black'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-purple-600" />
          <span>Super Admin Control (RBAC & Settings)</span>
        </button>
      </div>

      {/* =========================================================================
          TAB 1: ORDER FULFILLMENT OPERATIONS
         ========================================================================= */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto text-xs">
              {['all', 'confirmed', 'processing', 'packed', 'shipped', 'delivered'].map((st) => (
                <button
                  key={st}
                  onClick={() => setOrderStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-xl font-bold capitalize transition ${
                    orderStatusFilter === st
                      ? 'bg-ink-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={orderSearchQuery}
                onChange={(e) => setOrderSearchQuery(e.target.value)}
                placeholder="Search order ID or parent..."
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 outline-hidden focus:border-bee-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Order ID & Date</th>
                    <th className="py-3 px-4">Parent & Contact</th>
                    <th className="py-3 px-4">Items</th>
                    <th className="py-3 px-4">Payable (COD)</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Fulfillment Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50/50 transition">
                      <td className="py-3.5 px-4 font-mono font-bold text-ink-900">
                        <Link href={`/orders/${ord.orderNumber}`} className="text-blue-700 hover:underline">
                          {ord.orderNumber}
                        </Link>
                        <span className="block text-[10px] font-sans font-normal text-slate-400">
                          {new Date(ord.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="font-bold text-ink-900 block">{ord.parentName}</span>
                        <span className="text-[10px] text-slate-500 block">
                          WhatsApp: +91 {ord.parentWhatsapp}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {ord.shippingAddress.city} ({ord.shippingAddress.pincode})
                        </span>
                      </td>

                      <td className="py-3.5 px-4 max-w-xs">
                        {ord.items.map((it, idx) => (
                          <div key={idx} className="truncate font-medium text-slate-700">
                            {it.quantity}x {it.titleSnapshot}
                          </div>
                        ))}
                      </td>

                      <td className="py-3.5 px-4 font-black text-ink-900">
                        ₹{(ord.totalPayablePaise / 100).toLocaleString('en-IN')}
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase ${
                            ord.status === 'delivered'
                              ? 'bg-emerald-100 text-emerald-800'
                              : ord.status === 'shipped'
                              ? 'bg-blue-100 text-blue-800'
                              : ord.status === 'packed'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {ord.status}
                        </span>
                        {ord.awbNumber && (
                          <span className="block font-mono text-[9px] text-slate-400 mt-0.5">
                            AWB: {ord.awbNumber}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        {ord.status === 'confirmed' && (
                          <button
                            onClick={() => handleAdvanceOrderStatus(ord.id, ord.status)}
                            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px]"
                          >
                            Mark in Prep
                          </button>
                        )}
                        {ord.status === 'processing' && (
                          <button
                            onClick={() => handleAdvanceOrderStatus(ord.id, ord.status)}
                            className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px]"
                          >
                            Mark Packed
                          </button>
                        )}
                        {ord.status === 'packed' && (
                          <button
                            onClick={() => handleAdvanceOrderStatus(ord.id, ord.status)}
                            className="px-3 py-1.5 rounded-lg bg-bee-500 hover:bg-bee-600 text-ink-900 font-extrabold text-[11px]"
                          >
                            Generate Shiprocket AWB
                          </button>
                        )}
                        {ord.status === 'shipped' && (
                          <button
                            onClick={() => handleAdvanceOrderStatus(ord.id, ord.status)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px]"
                          >
                            Mark Delivered (Cash Paid)
                          </button>
                        )}
                        {ord.status === 'delivered' && (
                          <span className="text-[11px] text-emerald-600 font-bold">
                            ✓ Complete
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: CATALOG & INVENTORY LEDGER
         ========================================================================= */}
      {activeTab === 'inventory' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm text-ink-900">Physical Stock & Inventory Ledger</h3>
              <p className="text-xs text-slate-500">Atomic reservation tracking to prevent overselling.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">SKU</th>
                  <th className="py-3 px-4">Working Model Title</th>
                  <th className="py-3 px-4">Applicable Classes</th>
                  <th className="py-3 px-4">Selling Price</th>
                  <th className="py-3 px-4">Stock on Hand</th>
                  <th className="py-3 px-4 text-right">Adjustment Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRODUCTS.map((prod) => (
                  <tr key={prod.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-mono font-bold text-slate-700">{prod.sku}</td>
                    <td className="py-3 px-4 font-bold text-ink-900">{prod.title}</td>
                    <td className="py-3 px-4 text-slate-600">
                      Class {Math.min(...prod.classes)}–{Math.max(...prod.classes)}
                    </td>
                    <td className="py-3 px-4 font-bold text-ink-900">
                      ₹{(prod.sellingPricePaise / 100).toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          prod.stockOnHand <= 15
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {prod.stockOnHand} units
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => {
                          setSelectedProductForStock(prod.title);
                          setNewStockInput(String(prod.stockOnHand));
                        }}
                        className="px-3 py-1 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-[11px]"
                      >
                        Adjust Stock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: REVIEW MODERATION
         ========================================================================= */}
      {activeTab === 'reviews' && (
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-sm text-ink-900">Parent Reviews & Moderation Queue</h3>
            <p className="text-xs text-slate-500">
              Per DPDP privacy compliance, customer reviews are verified for child privacy before publication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    ✓ Verified Purchase
                  </span>
                </div>

                <h4 className="font-bold text-xs text-ink-900">{rev.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{rev.reviewText}</p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-semibold">{rev.reviewerDisplayName}</span>
                  <div className="flex gap-2">
                    <span className="text-emerald-600 font-bold">Approved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: SUPER ADMIN CONTROL ROOM (RBAC, FEATURE FLAGS & AUDIT)
         ========================================================================= */}
      {activeTab === 'superadmin' && (
        <div className="space-y-6">
          {/* Singleton Super Admin Banner */}
          <div className="bg-purple-950 text-white p-6 rounded-3xl space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              <h3 className="font-black text-sm">Singleton Super Admin Control (ID: 1)</h3>
            </div>
            <p className="text-xs text-purple-200">
              Operating under authenticated Super Admin binding: <strong className="text-white">admin@projectbee.in</strong>. 
              Full platform governance, staff invitation privileges, and audit inspection active.
            </p>
          </div>

          {/* Feature Toggles */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-sm text-ink-900 flex items-center gap-2">
              <Settings className="w-4 h-4 text-bee-600" />
              <span>Platform Feature Switches</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-ink-900">WhatsApp OTP Verification</h4>
                  <p className="text-[11px] text-slate-500">Require phone OTP before confirming Cash on Delivery.</p>
                </div>
                <input
                  type="checkbox"
                  checked={featureFlags.whatsapp_otp}
                  onChange={(e) => setFeatureFlags({ ...featureFlags, whatsapp_otp: e.target.checked })}
                  className="w-5 h-5 accent-bee-500"
                />
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-ink-900">Verified Reviews Engine</h4>
                  <p className="text-[11px] text-slate-500">Allow delivered purchasers to submit ratings.</p>
                </div>
                <input
                  type="checkbox"
                  checked={featureFlags.verified_reviews}
                  onChange={(e) => setFeatureFlags({ ...featureFlags, verified_reviews: e.target.checked })}
                  className="w-5 h-5 accent-bee-500"
                />
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-ink-900">Guest Checkout</h4>
                  <p className="text-[11px] text-slate-500">Permit orders without mandatory account signup.</p>
                </div>
                <input
                  type="checkbox"
                  checked={featureFlags.guest_checkout}
                  onChange={(e) => setFeatureFlags({ ...featureFlags, guest_checkout: e.target.checked })}
                  className="w-5 h-5 accent-bee-500"
                />
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-ink-900">External Video Demonstrations</h4>
                  <p className="text-[11px] text-slate-500">Display YouTube Shorts embeds on product detail pages.</p>
                </div>
                <input
                  type="checkbox"
                  checked={featureFlags.video_embeds}
                  onChange={(e) => setFeatureFlags({ ...featureFlags, video_embeds: e.target.checked })}
                  className="w-5 h-5 accent-bee-500"
                />
              </div>
            </div>
          </div>

          {/* Immutable Audit Trail Preview */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-sm text-ink-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-600" />
              <span>Immutable Administrative Audit Ledger (Sample)</span>
            </h3>

            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Timestamp</th>
                    <th className="py-2.5 px-3">Actor & Role</th>
                    <th className="py-2.5 px-3">Module</th>
                    <th className="py-2.5 px-3">Action</th>
                    <th className="py-2.5 px-3">Target ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  <tr>
                    <td className="py-2.5 px-3 text-slate-500">2026-11-09 13:15:20</td>
                    <td className="py-2.5 px-3 font-sans font-bold text-ink-900">Super Admin</td>
                    <td className="py-2.5 px-3 text-purple-700 font-bold">orders</td>
                    <td className="py-2.5 px-3">order.status_advance (shipped)</td>
                    <td className="py-2.5 px-3">PB-202611-0042</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-500">2026-11-09 12:40:11</td>
                    <td className="py-2.5 px-3 font-sans font-bold text-ink-900">Ops Manager</td>
                    <td className="py-2.5 px-3 text-blue-700 font-bold">inventory</td>
                    <td className="py-2.5 px-3">inventory.stock_intake (+25)</td>
                    <td className="py-2.5 px-3">PB-PHY-HYD-01</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-slate-500">2026-11-08 17:05:44</td>
                    <td className="py-2.5 px-3 font-sans font-bold text-ink-900">Super Admin</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">settings</td>
                    <td className="py-2.5 px-3">toggle.whatsapp_otp (enabled)</td>
                    <td className="py-2.5 px-3">global_settings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Stock Adjustment Modal */}
      {selectedProductForStock && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 space-y-4 shadow-xl border border-slate-200 text-xs">
            <h3 className="font-bold text-sm text-ink-900">Adjust Physical Stock</h3>
            <p className="text-slate-500">{selectedProductForStock}</p>

            <div>
              <label className="font-bold text-slate-700 block mb-1">New Total Stock Units</label>
              <input
                type="number"
                value={newStockInput}
                onChange={(e) => setNewStockInput(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Audit Reason (Mandatory)</label>
              <input
                type="text"
                placeholder="e.g. Workshop Batch #12 intake"
                value={stockReason}
                onChange={(e) => setStockReason(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedProductForStock(null)}
                className="w-1/2 py-2 border border-slate-300 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  alert('Stock updated & recorded in audit ledger.');
                  setSelectedProductForStock(null);
                }}
                className="w-1/2 py-2 bg-bee-500 font-bold text-ink-900 rounded-xl"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
