import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, Sparkles, HeartHandshake } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-400 text-xs border-t border-slate-800 mt-20">
      {/* 4 Trust Value Props */}
      <div className="border-b border-slate-800 py-10 bg-ink-950/40">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-bee-500/10 text-bee-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Pre-Assembled & Exhibition Ready</h4>
              <p className="mt-1 text-slate-400 leading-relaxed text-[11px]">
                Arrives functional and tested. Saves busy parents hours of stressful overnight assembly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Viva Question Cards Included</h4>
              <p className="mt-1 text-slate-400 leading-relaxed text-[11px]">
                Every project contains concept sheets and oral viva answers to give students exam confidence.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Cash on Delivery (COD)</h4>
              <p className="mt-1 text-slate-400 leading-relaxed text-[11px]">
                Verify WhatsApp OTP and pay safely upon physical courier arrival at your doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Child-Safe Materials Only</h4>
              <p className="mt-1 text-slate-400 leading-relaxed text-[11px]">
                Non-toxic organic dyes, low voltage DC, and non-corrosive components compliant with safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-bee-500 flex items-center justify-center text-lg">
              🐝
            </div>
            <span className="text-base font-extrabold text-white">ProjectBee</span>
          </div>
          <p className="mt-3 text-slate-400 leading-relaxed text-[11px]">
            India’s dedicated educational e-commerce destination for CBSE, ICSE, and State Board school science working models and exhibition displays.
          </p>
          <p className="mt-2 text-[10px] text-slate-500">
            Dispatch Hub: Koramangala & HSR Layout, Bengaluru, Karnataka 560034.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Popular Subjects</h4>
          <ul className="space-y-2 text-[11px]">
            <li><Link href="/catalog?subject=physics" className="hover:text-bee-400 transition">Physics Working Models</Link></li>
            <li><Link href="/catalog?subject=biology" className="hover:text-bee-400 transition">Biology Anatomy Displays</Link></li>
            <li><Link href="/catalog?subject=environmental-science" className="hover:text-bee-400 transition">EVS & Green Energy Models</Link></li>
            <li><Link href="/catalog?subject=robotics-ai" className="hover:text-bee-400 transition">Robotics & Sensor Projects</Link></li>
            <li><Link href="/catalog?subject=chemistry" className="hover:text-bee-400 transition">Chemistry Demonstration Kits</Link></li>
            <li><Link href="/catalog?subject=mathematics" className="hover:text-bee-400 transition">Mathematics 3D Models</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Browse by Class</h4>
          <ul className="space-y-2 text-[11px]">
            <li><Link href="/catalog?grade=6" className="hover:text-bee-400 transition">Class 6 Science Fair Projects</Link></li>
            <li><Link href="/catalog?grade=7" className="hover:text-bee-400 transition">Class 7 Working Models</Link></li>
            <li><Link href="/catalog?grade=8" className="hover:text-bee-400 transition">Class 8 Physics & Bio Models</Link></li>
            <li><Link href="/catalog?grade=9" className="hover:text-bee-400 transition">Class 9 Exhibition Models</Link></li>
            <li><Link href="/catalog?grade=10" className="hover:text-bee-400 transition">Class 10 CBSE / ICSE Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Operations & Portals</h4>
          <ul className="space-y-2 text-[11px]">
            <li><Link href="/dashboard" className="text-bee-400 hover:underline font-semibold">Unified Admin & Super Admin Portal</Link></li>
            <li><Link href="/cart" className="hover:text-bee-400 transition">Shopping Cart & COD Checkout</Link></li>
            <li><span className="text-slate-500">DPDP Compliance & Child Privacy Policy</span></li>
            <li><span className="text-slate-500">Bangalore Same-Day Dispatch Policy</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-[11px] text-slate-500">
        © 2026 ProjectBee Technologies India. All rights reserved. Built for school students, teachers, and parents.
      </div>
    </footer>
  );
}

