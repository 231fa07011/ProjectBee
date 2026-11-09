'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Star, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  PackageCheck, 
  AlertCircle, 
  Check, 
  HelpCircle, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PRODUCTS } from '@/lib/data/catalog';
import { REVIEWS } from '@/lib/data/reviews';
import { useCart } from '@/lib/store/cartStore';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const router = useRouter();
  const { slug } = params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Pincode checker state
  const [pincode, setPincode] = useState('560034');
  const [pincodeStatus, setPincodeStatus] = useState<null | {
    isAvailable: boolean;
    city: string;
    days: string;
  }>({
    isAvailable: true,
    city: 'Bengaluru (Koramangala Hub)',
    days: '1–2 Business Days'
  });

  const productReviews = REVIEWS.filter((r) => r.productId === product.id);

  const discountPercent = Math.round(
    ((product.mrpPaise - product.sellingPricePaise) / product.mrpPaise) * 100
  );

  const handleAddToCart = () => {
    addItem(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push('/checkout');
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6) {
      setPincodeStatus(null);
      return;
    }
    if (pincode.startsWith('560')) {
      setPincodeStatus({
        isAvailable: true,
        city: 'Bengaluru Express Zone',
        days: '1–2 Days (Same Day Dispatch)'
      });
    } else {
      setPincodeStatus({
        isAvailable: true,
        city: 'Pan-India Courier Zone',
        days: '3–5 Days via Shiprocket Express'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500">
        <Link href="/" className="hover:text-ink-900 transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link href="/catalog" className="hover:text-ink-900 transition">Working Models</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-ink-900 truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main Two-Column Hero Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-4/3 rounded-3xl bg-slate-100 overflow-hidden border border-slate-200 shadow-xs">
            <Image
              src={selectedImage.url}
              alt={selectedImage.altText}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 text-ink-900 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
              ⚡ Pre-Assembled Model
            </div>
          </div>

          {/* Thumbnail list */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                    selectedImage.id === img.id
                      ? 'border-bee-500 shadow-md'
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img.url} alt={img.altText} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* External Demonstration Video Embed if exists */}
          {product.socialLinks && product.socialLinks.length > 0 && (
            <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Working Video Demonstration</span>
                </span>
                <span className="text-[10px] bg-amber-200/60 text-amber-900 px-2 py-0.5 rounded font-bold">
                  YouTube Shorts
                </span>
              </div>
              <p className="text-[11px] text-slate-600">
                Watch this exact working model demonstrated in action before placing your order.
              </p>
              <a
                href={product.socialLinks[0].videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline pt-1"
              >
                <span>Watch {product.socialLinks[0].title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Right: Product Specifications & Purchase Box (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            {/* Class & Subject Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-bee-100 text-bee-800 text-xs font-bold px-3 py-1 rounded-full">
                Classes {Math.min(...product.classes)}–{Math.max(...product.classes)}
              </span>
              <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {product.boards.join(' / ')}
              </span>
              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {product.formatId === 'working_model' ? 'Working Model' : 'Science Fair Display'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-ink-900 leading-tight">
              {product.title}
            </h1>

            {/* Ratings and SKU */}
            <div className="flex items-center gap-3 mt-2 text-xs">
              <div className="flex items-center text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="ml-1 text-ink-900">{product.ratingAvg.toFixed(1)}</span>
                <span className="text-slate-400 font-normal ml-1">
                  ({product.ratingCount} parent reviews)
                </span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-mono text-[11px]">SKU: {product.sku}</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-ink-900">
                ₹{(product.sellingPricePaise / 100).toLocaleString('en-IN')}
              </span>
              <span className="text-base text-slate-400 line-through">
                ₹{(product.mrpPaise / 100).toLocaleString('en-IN')}
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-md">
                Save {discountPercent}%
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Inclusive of all taxes. Free shipping on orders above ₹999.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-emerald-700">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Cash on Delivery (COD) Supported</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                <span>Dispatches within 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-slate-300 rounded-xl bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-8 h-8 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 px-6 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                  justAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border-2 border-ink-900 text-ink-900 hover:bg-slate-50'
                }`}
              >
                {justAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                <span>{justAdded ? 'Added to Cart' : 'Add to Cart'}</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 py-3.5 px-6 rounded-2xl text-xs font-extrabold bg-bee-500 hover:bg-bee-600 text-ink-900 shadow-md shadow-bee-500/20 transition text-center"
              >
                Buy Now (COD)
              </button>
            </div>
          </div>

          {/* Delivery Pincode Checker */}
          <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              Estimated Delivery & Cash on Delivery Check
            </span>
            <form onSubmit={handleCheckPincode} className="flex gap-2">
              <input
                type="text"
                value={pincode}
                maxLength={6}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 6-digit Pincode"
                className="w-44 px-3 py-2 text-xs border border-slate-300 rounded-xl outline-hidden focus:border-bee-500 font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-ink-900 text-xs font-bold rounded-xl transition"
              >
                Check
              </button>
            </form>

            {pincodeStatus && (
              <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5 pt-1">
                <Truck className="w-3.5 h-3.5 shrink-0" />
                <span>
                  Delivery to <strong>{pincodeStatus.city}</strong>: {pincodeStatus.days} (COD Available)
                </span>
              </div>
            )}
          </div>

          {/* Package Contents Checklist */}
          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-sm text-ink-900 flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-emerald-600" />
              <span>What’s Inside the ProjectBee Box:</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {product.packageContents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs / Deep Explanations */}
      <div className="border-t border-slate-200 pt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Full Overview & Preparation */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-ink-900">Project Overview & Scientific Concept</h3>
            <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
              {product.fullDescription}
            </p>

            {product.preparationGuide && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-1.5">
                  Exhibition Display Instructions:
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.preparationGuide}
                </p>
              </div>
            )}
          </div>

          {/* Oral Viva Questions Preview */}
          {product.vivaConcepts && product.vivaConcepts.length > 0 && (
            <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-200 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-sm text-blue-950">
                  Included Viva Exam Preparation Prompts (Sample)
                </h3>
              </div>
              <p className="text-xs text-slate-600">
                Teachers and judges commonly ask these exact questions during the exhibition. Our laminated card includes answers:
              </p>
              <div className="space-y-2">
                {product.vivaConcepts.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-blue-100 text-xs text-blue-900">
                    <span className="font-bold text-blue-700 mr-2">Q{idx + 1}:</span>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Safety & Trust Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-ink-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Child Safety & Specifications</span>
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Dimensions:</span>
                <span className="font-semibold text-ink-900">{product.dimensionsCm} cm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Weight:</span>
                <span className="font-semibold text-ink-900">{product.weightGrams} grams</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Difficulty:</span>
                <span className="font-semibold text-ink-900 capitalize">{product.difficulty}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Assembly:</span>
                <span className="font-semibold text-ink-900">
                  {product.requiresAssembly ? '10 min build kit' : 'Fully pre-assembled'}
                </span>
              </div>
            </div>

            {product.safetyNotes && (
              <div className="mt-4 p-3 rounded-xl bg-amber-50 text-[11px] text-amber-900 border border-amber-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{product.safetyNotes}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Verified Parent Reviews Section */}
      <section className="border-t border-slate-200 pt-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-ink-900">
              Customer Reviews ({productReviews.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Only verified purchasers with delivered orders may submit reviews.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-ink-900">{product.ratingAvg.toFixed(1)}</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-500 font-semibold">Overall Rating</span>
          </div>
        </div>

        {productReviews.length === 0 ? (
          <div className="bg-slate-50 p-8 rounded-2xl text-center text-xs text-slate-500">
            No reviews yet for this model. Be the first to review after your order is delivered!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productReviews.map((rev) => (
              <div key={rev.id} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    ✓ Verified Purchase
                  </span>
                </div>
                <h4 className="font-bold text-xs text-ink-900">{rev.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{rev.reviewText}</p>
                <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400">
                  <span className="font-semibold text-slate-700">{rev.reviewerDisplayName}</span>
                  <span>👍 {rev.helpfulVotesCount} parents found this helpful</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
