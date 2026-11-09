-- ==============================================================================
-- PROJECTBEE – INITIAL DATABASE MIGRATION (00001_initial_schema.sql)
-- Complete PostgreSQL 15 / Supabase Schema Definition
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "citext";

-- 2. UTILITY FUNCTIONS
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. ENUMS
CREATE TYPE user_type_enum AS ENUM ('customer', 'admin', 'super_admin');
CREATE TYPE account_status_enum AS ENUM ('active', 'suspended', 'deactivated');
CREATE TYPE academic_group_enum AS ENUM (
  'early_learners',
  'primary',
  'middle_school',
  'secondary',
  'senior_secondary'
);
CREATE TYPE invitation_status_enum AS ENUM ('pending', 'accepted', 'revoked', 'expired');
CREATE TYPE product_status_enum AS ENUM ('draft', 'published', 'unpublished', 'archived', 'deleted');
CREATE TYPE difficulty_level_enum AS ENUM ('beginner', 'intermediate', 'advanced');
CREATE TYPE social_platform_enum AS ENUM ('youtube_video', 'youtube_shorts', 'instagram_reel', 'facebook_video');
CREATE TYPE stock_movement_type_enum AS ENUM (
  'initial_intake',
  'order_reservation',
  'order_cancelled_release',
  'order_fulfilled',
  'return_restocked',
  'damage_writeoff',
  'manual_adjustment'
);
CREATE TYPE order_status_enum AS ENUM (
  'pending_verification',
  'confirmed',
  'processing',
  'packed',
  'shipped',
  'out_for_delivery',
  'delivered',
  'cancelled',
  'return_requested',
  'returned',
  'failed_delivery'
);
CREATE TYPE payment_method_enum AS ENUM ('cod');
CREATE TYPE otp_status_enum AS ENUM ('sent', 'verified', 'failed', 'expired');
CREATE TYPE review_status_enum AS ENUM ('pending', 'approved', 'rejected');

-- 4. IDENTITY & RBAC
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_type user_type_enum NOT NULL DEFAULT 'customer',
  account_status account_status_enum NOT NULL DEFAULT 'active',
  email CITEXT UNIQUE,
  phone VARCHAR(20) UNIQUE,
  display_name VARCHAR(100),
  avatar_url TEXT,
  last_sign_in_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER trg_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE IF NOT EXISTS customer_profiles (
  profile_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  parent_name VARCHAR(120),
  student_name VARCHAR(120),
  grade_class INT CHECK (grade_class BETWEEN 1 AND 12),
  board VARCHAR(50),
  academic_group academic_group_enum,
  school_name VARCHAR(200),
  favourite_subjects TEXT[],
  city VARCHAR(100),
  state VARCHAR(100),
  profile_completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER trg_customer_profiles_updated_at
BEFORE UPDATE ON customer_profiles
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE IF NOT EXISTS admin_accounts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID NOT NULL UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  job_title VARCHAR(100),
  invited_by UUID REFERENCES profiles(id),
  invited_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  activated_at TIMESTAMPTZ,
  suspended_at TIMESTAMPTZ,
  suspension_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER trg_admin_accounts_updated_at
BEFORE UPDATE ON admin_accounts
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE IF NOT EXISTS super_admin_identity (
  id INT PRIMARY KEY CHECK (id = 1),
  profile_id UUID NOT NULL UNIQUE REFERENCES profiles(id) ON DELETE RESTRICT,
  designated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  recovery_email CITEXT NOT NULL,
  notes TEXT
);

CREATE TABLE IF NOT EXISTS permissions (
  id VARCHAR(60) PRIMARY KEY,
  module VARCHAR(40) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  is_system BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS role_permissions (
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  permission_id VARCHAR(60) NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS admin_role_assignments (
  admin_id UUID NOT NULL REFERENCES admin_accounts(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  assigned_by UUID REFERENCES profiles(id),
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (admin_id, role_id)
);

CREATE TABLE IF NOT EXISTS admin_permission_overrides (
  admin_id UUID NOT NULL REFERENCES admin_accounts(id) ON DELETE CASCADE,
  permission_id VARCHAR(60) NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
  is_allowed BOOLEAN NOT NULL,
  granted_by UUID REFERENCES profiles(id),
  granted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (admin_id, permission_id)
);

CREATE TABLE IF NOT EXISTS admin_invitations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email CITEXT NOT NULL,
  invited_name VARCHAR(120) NOT NULL,
  token_hash VARCHAR(128) NOT NULL UNIQUE,
  initial_role_id UUID REFERENCES roles(id),
  status invitation_status_enum NOT NULL DEFAULT 'pending',
  invited_by UUID NOT NULL REFERENCES profiles(id),
  expires_at TIMESTAMPTZ NOT NULL,
  accepted_at TIMESTAMPTZ,
  revoked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. ACADEMIC TAXONOMY & CATALOGUE
CREATE TABLE IF NOT EXISTS boards (
  code VARCHAR(20) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS classes (
  grade INT PRIMARY KEY CHECK (grade BETWEEN 1 AND 12),
  name VARCHAR(20) NOT NULL,
  academic_group academic_group_enum NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS subjects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(60) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(30),
  icon_url TEXT,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  slug VARCHAR(80) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_formats (
  id VARCHAR(40) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  display_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku VARCHAR(50) UNIQUE NOT NULL,
  slug VARCHAR(120) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  package_contents TEXT NOT NULL,
  preparation_guide TEXT,
  safety_notes TEXT,
  dimensions_cm VARCHAR(50),
  weight_grams INT,
  format_id VARCHAR(40) NOT NULL REFERENCES product_formats(id),
  difficulty difficulty_level_enum NOT NULL DEFAULT 'beginner',
  status product_status_enum NOT NULL DEFAULT 'draft',
  
  mrp_paise INT NOT NULL CHECK (mrp_paise >= 0),
  selling_price_paise INT NOT NULL CHECK (selling_price_paise >= 0 AND selling_price_paise <= mrp_paise),
  cost_price_paise INT CHECK (cost_price_paise >= 0),
  tax_rate_percent NUMERIC(5,2) NOT NULL DEFAULT 18.00,
  
  rating_avg NUMERIC(3,2) NOT NULL DEFAULT 0.00,
  rating_count INT NOT NULL DEFAULT 0,
  
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  is_popular BOOLEAN NOT NULL DEFAULT FALSE,
  requires_assembly BOOLEAN NOT NULL DEFAULT FALSE,
  estimated_assembly_time_mins INT,
  
  meta_title VARCHAR(150),
  meta_description VARCHAR(250),
  
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER trg_products_updated_at
BEFORE UPDATE ON products
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE IF NOT EXISTS product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  storage_key TEXT NOT NULL,
  alt_text VARCHAR(200) NOT NULL,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_boards (
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  board_code VARCHAR(20) NOT NULL REFERENCES boards(code) ON DELETE CASCADE,
  PRIMARY KEY (product_id, board_code)
);

CREATE TABLE IF NOT EXISTS product_classes (
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  grade INT NOT NULL REFERENCES classes(grade) ON DELETE CASCADE,
  PRIMARY KEY (product_id, grade)
);

CREATE TABLE IF NOT EXISTS product_subjects (
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, subject_id)
);

CREATE TABLE IF NOT EXISTS product_categories (
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (product_id, category_id)
);

CREATE TABLE IF NOT EXISTS product_social_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  platform social_platform_enum NOT NULL,
  video_url TEXT NOT NULL,
  embed_code TEXT,
  title VARCHAR(200),
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS product_keywords (
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  keyword VARCHAR(80) NOT NULL,
  PRIMARY KEY (product_id, keyword)
);

CREATE TABLE IF NOT EXISTS search_synonyms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  term VARCHAR(80) NOT NULL,
  synonyms TEXT[] NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- 6. INVENTORY
CREATE TABLE IF NOT EXISTS inventory (
  product_id UUID PRIMARY KEY REFERENCES products(id) ON DELETE CASCADE,
  stock_on_hand INT NOT NULL DEFAULT 0 CHECK (stock_on_hand >= 0),
  stock_reserved INT NOT NULL DEFAULT 0 CHECK (stock_reserved >= 0),
  low_stock_threshold INT NOT NULL DEFAULT 5,
  is_backorder_allowed BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS stock_movements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  movement_type stock_movement_type_enum NOT NULL,
  quantity_delta INT NOT NULL,
  resulting_stock_on_hand INT NOT NULL,
  reference_order_id UUID,
  reference_adjustment_id UUID,
  notes TEXT,
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS inventory_adjustments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  previous_stock INT NOT NULL,
  new_stock INT NOT NULL,
  delta INT NOT NULL,
  reason VARCHAR(255) NOT NULL,
  adjusted_by UUID NOT NULL REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS price_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  old_mrp_paise INT NOT NULL,
  new_mrp_paise INT NOT NULL,
  old_selling_price_paise INT NOT NULL,
  new_selling_price_paise INT NOT NULL,
  changed_by UUID NOT NULL REFERENCES profiles(id),
  effective_from TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. CARTS & ORDERS
CREATE TABLE IF NOT EXISTS carts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  guest_session_token VARCHAR(128) UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0 AND quantity <= 10),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (cart_id, product_id)
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(30) UNIQUE NOT NULL,
  customer_id UUID REFERENCES profiles(id) ON DELETE RESTRICT,
  status order_status_enum NOT NULL DEFAULT 'pending_verification',
  payment_method payment_method_enum NOT NULL DEFAULT 'cod',
  
  subtotal_paise INT NOT NULL CHECK (subtotal_paise >= 0),
  discount_paise INT NOT NULL DEFAULT 0 CHECK (discount_paise >= 0),
  shipping_fee_paise INT NOT NULL DEFAULT 0 CHECK (shipping_fee_paise >= 0),
  tax_paise INT NOT NULL DEFAULT 0 CHECK (tax_paise >= 0),
  total_payable_paise INT NOT NULL CHECK (total_payable_paise >= 0),
  
  coupon_code VARCHAR(30),
  parent_name VARCHAR(120) NOT NULL,
  parent_phone VARCHAR(20) NOT NULL,
  parent_whatsapp VARCHAR(20) NOT NULL,
  student_name VARCHAR(120),
  student_class INT,
  
  verified_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  shipped_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER trg_orders_updated_at
BEFORE UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  title_snapshot VARCHAR(200) NOT NULL,
  sku_snapshot VARCHAR(50) NOT NULL,
  unit_price_paise INT NOT NULL CHECK (unit_price_paise >= 0),
  quantity INT NOT NULL CHECK (quantity > 0),
  total_paise INT NOT NULL CHECK (total_paise >= 0),
  tax_rate_percent NUMERIC(5,2) NOT NULL DEFAULT 18.00,
  tax_amount_paise INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS order_addresses (
  order_id UUID PRIMARY KEY REFERENCES orders(id) ON DELETE CASCADE,
  recipient_name VARCHAR(120) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  alternate_phone VARCHAR(20),
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  landmark VARCHAR(150),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  delivery_instructions TEXT
);

CREATE TABLE IF NOT EXISTS order_status_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  from_status order_status_enum,
  to_status order_status_enum NOT NULL,
  actor_id UUID REFERENCES profiles(id),
  actor_type VARCHAR(30) NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cod_verifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL UNIQUE REFERENCES orders(id) ON DELETE CASCADE,
  phone VARCHAR(20) NOT NULL,
  otp_hash VARCHAR(128) NOT NULL,
  status otp_status_enum NOT NULL DEFAULT 'sent',
  attempt_count INT NOT NULL DEFAULT 0 CHECK (attempt_count <= 5),
  provider_message_id VARCHAR(100),
  provider_response JSONB,
  expires_at TIMESTAMPTZ NOT NULL,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cancellations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL UNIQUE REFERENCES orders(id) ON DELETE RESTRICT,
  cancelled_by UUID REFERENCES profiles(id),
  initiator_type VARCHAR(20) NOT NULL,
  reason_code VARCHAR(50) NOT NULL,
  detailed_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS returns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  reason VARCHAR(255) NOT NULL,
  customer_comments TEXT,
  status VARCHAR(40) NOT NULL DEFAULT 'requested',
  inspection_notes TEXT,
  received_at TIMESTAMPTZ,
  approved_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cod_reconciliations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL UNIQUE REFERENCES orders(id) ON DELETE RESTRICT,
  courier_partner VARCHAR(50) NOT NULL,
  collected_amount_paise INT NOT NULL,
  courier_remittance_id VARCHAR(100),
  remitted_at TIMESTAMPTZ,
  is_reconciled BOOLEAN NOT NULL DEFAULT FALSE,
  reconciled_by UUID REFERENCES profiles(id),
  reconciled_at TIMESTAMPTZ
);

-- 8. LOGISTICS & SERVICEABILITY
CREATE TABLE IF NOT EXISTS serviceable_pincodes (
  pincode VARCHAR(10) PRIMARY KEY,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  is_cod_allowed BOOLEAN NOT NULL DEFAULT TRUE,
  min_delivery_days INT NOT NULL DEFAULT 3,
  max_delivery_days INT NOT NULL DEFAULT 7,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shipping_rules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  min_order_paise INT NOT NULL DEFAULT 0,
  max_order_paise INT,
  shipping_fee_paise INT NOT NULL DEFAULT 7000,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shipments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  courier_name VARCHAR(50) NOT NULL,
  awb_number VARCHAR(80) NOT NULL UNIQUE,
  label_url TEXT,
  manifest_id VARCHAR(80),
  tracking_status VARCHAR(60),
  estimated_delivery_date DATE,
  dispatched_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS shipment_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  shipment_id UUID NOT NULL REFERENCES shipments(id) ON DELETE CASCADE,
  checkpoint_time TIMESTAMPTZ NOT NULL,
  location VARCHAR(120),
  status VARCHAR(60) NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9. REVIEWS & CUSTOMER ENGAGEMENT
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  order_item_id UUID NOT NULL REFERENCES order_items(id) ON DELETE RESTRICT,
  
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title VARCHAR(150),
  review_text TEXT NOT NULL,
  reviewer_display_name VARCHAR(100) NOT NULL,
  
  is_verified_purchase BOOLEAN NOT NULL DEFAULT TRUE,
  status review_status_enum NOT NULL DEFAULT 'approved',
  moderated_by UUID REFERENCES profiles(id),
  moderation_notes TEXT,
  helpful_votes_count INT NOT NULL DEFAULT 0,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  UNIQUE (product_id, customer_id, order_id)
);

CREATE TABLE IF NOT EXISTS review_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  storage_key TEXT NOT NULL,
  moderation_status VARCHAR(30) NOT NULL DEFAULT 'pending',
  moderated_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS review_helpful_votes (
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  voter_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (review_id, voter_id)
);

CREATE TABLE IF NOT EXISTS review_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  reporter_id UUID REFERENCES profiles(id),
  reason VARCHAR(100) NOT NULL,
  details TEXT,
  status VARCHAR(30) NOT NULL DEFAULT 'open',
  resolved_by UUID REFERENCES profiles(id),
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS wishlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID NOT NULL UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS wishlist_items (
  wishlist_id UUID NOT NULL REFERENCES wishlists(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (wishlist_id, product_id)
);

CREATE TABLE IF NOT EXISTS customer_addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  recipient_name VARCHAR(120) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  is_default BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customer_data_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  request_type VARCHAR(40) NOT NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'submitted',
  processed_by UUID REFERENCES profiles(id),
  completion_notes TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- 10. CONTENT & PROMOTIONS
CREATE TABLE IF NOT EXISTS banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(120) NOT NULL,
  desktop_image_url TEXT NOT NULL,
  mobile_image_url TEXT NOT NULL,
  link_url TEXT,
  target_board VARCHAR(20),
  target_class INT,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS coupons (
  code VARCHAR(30) PRIMARY KEY,
  description VARCHAR(200),
  discount_type VARCHAR(20) NOT NULL,
  discount_value INT NOT NULL,
  min_order_paise INT NOT NULL DEFAULT 0,
  max_discount_paise INT,
  usage_limit_total INT,
  usage_limit_per_customer INT NOT NULL DEFAULT 1,
  times_used INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  valid_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  valid_until TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS content_pages (
  slug VARCHAR(100) PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  body_markdown TEXT NOT NULL,
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  updated_by UUID REFERENCES profiles(id),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category VARCHAR(60) NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- 11. SYSTEM & AUDIT
CREATE TABLE IF NOT EXISTS global_settings (
  key VARCHAR(80) PRIMARY KEY,
  value JSONB NOT NULL,
  value_type VARCHAR(30) NOT NULL,
  description TEXT,
  updated_by UUID REFERENCES profiles(id),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS feature_flags (
  key VARCHAR(80) PRIMARY KEY,
  is_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  description TEXT,
  updated_by UUID REFERENCES profiles(id),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_id UUID REFERENCES profiles(id),
  actor_role VARCHAR(50),
  module VARCHAR(50) NOT NULL,
  action VARCHAR(80) NOT NULL,
  target_id VARCHAR(80),
  old_values JSONB,
  new_values JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipient_profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  link_url TEXT,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. STORED PROCEDURES & TRIGGERS

-- Rating recalculation trigger
CREATE OR REPLACE FUNCTION update_product_rating_cache()
RETURNS TRIGGER AS $$
DECLARE
  v_prod_id UUID;
  v_count INT;
  v_avg NUMERIC(3,2);
BEGIN
  v_prod_id := COALESCE(NEW.product_id, OLD.product_id);

  SELECT COUNT(*), COALESCE(AVG(rating), 0.00)
  INTO v_count, v_avg
  FROM reviews
  WHERE product_id = v_prod_id AND status = 'approved';

  UPDATE products
  SET rating_count = v_count,
      rating_avg = v_avg
  WHERE id = v_prod_id;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_review_rating_cache
AFTER INSERT OR UPDATE OR DELETE ON reviews
FOR EACH ROW EXECUTE FUNCTION update_product_rating_cache();

-- Atomic stock reservation
CREATE OR REPLACE FUNCTION reserve_order_stock(
  p_order_id UUID,
  p_product_id UUID,
  p_quantity INT,
  p_actor_id UUID
)
RETURNS BOOLEAN AS $$
DECLARE
  v_available INT;
BEGIN
  SELECT (stock_on_hand - stock_reserved) INTO v_available
  FROM inventory
  WHERE product_id = p_product_id
  FOR UPDATE;

  IF v_available < p_quantity THEN
    RAISE EXCEPTION 'Insufficient stock for product %: requested %, available %', 
      p_product_id, p_quantity, v_available;
  END IF;

  UPDATE inventory
  SET stock_reserved = stock_reserved + p_quantity,
      updated_at = NOW()
  WHERE product_id = p_product_id;

  INSERT INTO stock_movements (
    product_id, movement_type, quantity_delta, resulting_stock_on_hand,
    reference_order_id, created_by, notes
  ) VALUES (
    p_product_id, 'order_reservation', -p_quantity, v_available - p_quantity,
    p_order_id, p_actor_id, 'Stock reserved for order checkout'
  );

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
