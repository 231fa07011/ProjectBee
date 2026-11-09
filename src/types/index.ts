// ==============================================================================
// PROJECTBEE – TYPE DEFINITIONS
// Canonical types derived from DATABASE_SCHEMA.md and API_SPECIFICATION.md
// ==============================================================================

export type AcademicGroup = 
  | 'early_learners'    // Classes 1-2
  | 'primary'           // Classes 3-5
  | 'middle_school'     // Classes 6-8
  | 'secondary'         // Classes 9-10
  | 'senior_secondary'; // Classes 11-12

export type BoardCode = 'CBSE' | 'ICSE' | 'STATE_KA';

export type ProductFormatId = 
  | 'working_model' 
  | 'diy_kit' 
  | 'science_fair_display' 
  | 'chart_and_viva';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type ProductStatus = 'draft' | 'published' | 'unpublished' | 'archived' | 'deleted';

export type OrderStatus = 
  | 'pending_verification'
  | 'confirmed'
  | 'processing'
  | 'packed'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'return_requested'
  | 'returned'
  | 'failed_delivery';

export interface Board {
  code: BoardCode;
  name: string;
  displayOrder: number;
}

export interface ClassGrade {
  grade: number;
  name: string;
  academicGroup: AcademicGroup;
  displayOrder: number;
}

export interface Subject {
  id: string;
  slug: string;
  name: string;
  code: string;
  iconName?: string;
}

export interface ProductFormat {
  id: ProductFormatId;
  name: string;
  description: string;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  isPrimary: boolean;
}

export interface ProductSocialLink {
  id: string;
  platform: 'youtube_video' | 'youtube_shorts' | 'instagram_reel' | 'facebook_video';
  videoUrl: string;
  title: string;
}

export interface Product {
  id: string;
  sku: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  packageContents: string[];
  preparationGuide?: string;
  safetyNotes?: string;
  vivaConcepts?: string[];
  dimensionsCm: string;
  weightGrams: number;
  formatId: ProductFormatId;
  difficulty: DifficultyLevel;
  status: ProductStatus;
  
  // Stored in paise (1 INR = 100 paise)
  mrpPaise: number;
  sellingPricePaise: number;
  
  ratingAvg: number;
  ratingCount: number;
  
  isFeatured?: boolean;
  isPopular?: boolean;
  requiresAssembly: boolean;
  estimatedAssemblyMins?: number;
  
  images: ProductImage[];
  boards: BoardCode[];
  classes: number[];
  subjects: string[]; // subject slugs
  socialLinks?: ProductSocialLink[];
  stockOnHand: number;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

export interface DeliveryAddress {
  recipientName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface OrderItemSnapshot {
  productId: string;
  titleSnapshot: string;
  skuSnapshot: string;
  unitPricePaise: number;
  quantity: number;
  totalPaise: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  createdAt: string;
  
  parentName: string;
  parentPhone: string;
  parentWhatsapp: string;
  studentName?: string;
  studentClass?: number;
  
  shippingAddress: DeliveryAddress;
  items: OrderItemSnapshot[];
  
  subtotalPaise: number;
  discountPaise: number;
  shippingFeePaise: number;
  totalPayablePaise: number;
  
  verifiedAt?: string;
  shippedAt?: string;
  deliveredAt?: string;
  courierName?: string;
  awbNumber?: string;
}

export interface Review {
  id: string;
  productId: string;
  rating: number; // 1-5
  title: string;
  reviewText: string;
  reviewerDisplayName: string;
  isVerifiedPurchase: boolean;
  helpfulVotesCount: number;
  createdAt: string;
}

