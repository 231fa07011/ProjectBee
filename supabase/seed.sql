-- ==============================================================================
-- PROJECTBEE SEED DATA (supabase/seed.sql)
-- Initial Taxonomy, Catalog, Inventory, Serviceable Pincodes & Global Settings
-- ==============================================================================

-- 1. BOARDS
INSERT INTO boards (code, name, display_order, is_active) VALUES
  ('CBSE', 'Central Board of Secondary Education', 1, true),
  ('ICSE', 'Indian Certificate of Secondary Education', 2, true),
  ('STATE_KA', 'Karnataka State Board', 3, true)
ON CONFLICT (code) DO NOTHING;

-- 2. CLASSES
INSERT INTO classes (grade, name, academic_group, display_order, is_active) VALUES
  (1, 'Class 1', 'early_learners', 1, true),
  (2, 'Class 2', 'early_learners', 2, true),
  (3, 'Class 3', 'primary', 3, true),
  (4, 'Class 4', 'primary', 4, true),
  (5, 'Class 5', 'primary', 5, true),
  (6, 'Class 6', 'middle_school', 6, true),
  (7, 'Class 7', 'middle_school', 7, true),
  (8, 'Class 8', 'middle_school', 8, true),
  (9, 'Class 9', 'secondary', 9, true),
  (10, 'Class 10', 'secondary', 10, true),
  (11, 'Class 11', 'senior_secondary', 11, true),
  (12, 'Class 12', 'senior_secondary', 12, true)
ON CONFLICT (grade) DO NOTHING;

-- 3. PRODUCT FORMATS
INSERT INTO product_formats (id, name, description, display_order) VALUES
  ('working_model', 'Working Model', 'Fully functional, pre-assembled dynamic physical demonstration.', 1),
  ('diy_kit', 'DIY Assembly Kit', 'Components, chassis and guided instructions for student hands-on build.', 2),
  ('science_fair_display', 'Science Fair Display', 'Polished exhibition showcase model with concept boards.', 3),
  ('chart_and_viva', 'Charts & Viva Cards', 'Visual infographic presentation charts and Q&A prompt cards.', 4)
ON CONFLICT (id) DO NOTHING;

-- 4. SUBJECTS
INSERT INTO subjects (id, slug, name, code, display_order, is_active) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'physics', 'Physics', 'PHY', 1, true),
  ('a0000000-0000-0000-0000-000000000002', 'chemistry', 'Chemistry', 'CHEM', 2, true),
  ('a0000000-0000-0000-0000-000000000003', 'biology', 'Biology', 'BIO', 3, true),
  ('a0000000-0000-0000-0000-000000000004', 'environmental-science', 'Environmental Science (EVS)', 'EVS', 4, true),
  ('a0000000-0000-0000-0000-000000000005', 'robotics-coding', 'Robotics & AI', 'ROBO', 5, true),
  ('a0000000-0000-0000-0000-000000000006', 'mathematics', 'Mathematics', 'MATH', 6, true)
ON CONFLICT (slug) DO NOTHING;

-- 5. SERVICEABLE PINCODES (Sample Bangalore & Major Metros)
INSERT INTO serviceable_pincodes (pincode, city, state, is_cod_allowed, min_delivery_days, max_delivery_days, is_active) VALUES
  ('560001', 'Bengaluru', 'Karnataka', true, 1, 3, true),
  ('560034', 'Bengaluru (Koramangala)', 'Karnataka', true, 1, 2, true),
  ('560068', 'Bengaluru (Bommanahalli)', 'Karnataka', true, 1, 2, true),
  ('560100', 'Bengaluru (Electronic City)', 'Karnataka', true, 1, 2, true),
  ('560037', 'Bengaluru (Marathahalli)', 'Karnataka', true, 1, 2, true),
  ('560066', 'Bengaluru (Whitefield)', 'Karnataka', true, 1, 2, true),
  ('560076', 'Bengaluru (Bannerghatta Rd)', 'Karnataka', true, 1, 2, true),
  ('110001', 'New Delhi', 'Delhi', true, 3, 5, true),
  ('400001', 'Mumbai', 'Maharashtra', true, 3, 5, true),
  ('600001', 'Chennai', 'Tamil Nadu', true, 2, 4, true),
  ('500001', 'Hyderabad', 'Telangana', true, 2, 4, true)
ON CONFLICT (pincode) DO NOTHING;

-- 6. GLOBAL SETTINGS
INSERT INTO global_settings (key, value, value_type, description) VALUES
  ('store_info', '{"name": "ProjectBee", "tagline": "School Projects Made Easy!", "support_phone": "+91 80 4000 0000", "support_email": "help@projectbee.in", "city": "Bengaluru"}', 'json', 'General business and contact metadata'),
  ('shipping_config', '{"flat_fee_paise": 7000, "free_shipping_threshold_paise": 99900, "default_origin_pincode": "560034"}', 'json', 'Storewide shipping and free delivery rules'),
  ('cod_config', '{"is_enabled": true, "max_order_amount_paise": 500000, "require_whatsapp_otp": true}', 'json', 'Cash on Delivery parameters')
ON CONFLICT (key) DO NOTHING;

-- 7. FEATURE FLAGS
INSERT INTO feature_flags (key, is_enabled, description) VALUES
  ('whatsapp_otp', true, 'Require WhatsApp OTP verification before confirming COD orders'),
  ('guest_checkout', true, 'Allow customers to purchase without mandatory pre-registration'),
  ('verified_reviews', true, 'Enable verified purchase ratings and reviews on product pages'),
  ('external_video_embeds', true, 'Show YouTube and Instagram demonstration videos on product details')
ON CONFLICT (key) DO NOTHING;

