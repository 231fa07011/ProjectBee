# ProjectBee — Admin Dashboard Product Requirements Document (ADMIN_PRD)

**Version:** 1.0  
**Status:** Draft for Antigravity implementation planning  
**Product:** ProjectBee — School Projects Made Easy!  
**Market:** India  
**Initial boards:** CBSE and ICSE  
**Classes:** 1–12  
**V1 payment mode:** Cash on Delivery (COD) only  
**Related document:** Customer-facing `PRD.md`

---

## 1. Purpose and scope

This document defines the operational Admin Dashboard for ProjectBee. It is intended as an implementation brief for Antigravity.

The Admin Dashboard is the day-to-day e-commerce operations centre. Authorised Admin staff use it to manage the product catalogue, categories, prices, inventory, orders, customers, reviews, promotions, website content, shipping, support, notifications and operational reports.

The customer-facing website is specified separately in `PRD.md`. The Admin Dashboard must manage the same underlying catalogue and operational data so that approved changes are reflected on the customer website.

The Super Admin Dashboard, platform-wide governance, Admin account creation, role assignment and global security controls will be specified separately in `SUPER_ADMIN_PRD.md`. Do not silently implement Super Admin-only capabilities as ordinary Admin permissions.

Where a business rule, provider, fee, legal process or operational policy has not been confirmed, mark it as configurable or an open decision. Do not invent production values.

## 2. Product and experience principles

1. Admins must be able to manage ProjectBee's dynamic catalogue without developer intervention for routine changes.
2. The dashboard should be simple, organised, responsive and efficient.
3. Common tasks such as adding a product, updating stock and processing an order should require as few steps as practical.
4. Changes to published catalogue data should appear on the customer website reliably and promptly.
5. Draft, unpublished, disabled or archived content must not appear in public catalogue/search results.
6. Important actions must be permission-checked on the server and recorded in an audit trail.
7. Customer and child personal information must be minimised and protected.
8. Admin must not be able to grant themselves Super Admin access or bypass permission controls.
9. The dashboard must distinguish development/demo data from real production data.
10. Do not fabricate ratings, reviews, stock, sales, delivery promises, testimonials or analytics.

## 3. Roles and permissions

The wider platform has three role groups:

- **Super Admin:** platform owner/governance role; specified in a separate PRD.
- **Admin:** operational staff; permissions are assigned by Super Admin.
- **Customer/User:** customer-facing account; specified in `PRD.md`.

The system must support multiple Admin accounts from the beginning, even if only one Admin initially uses the dashboard.

### 3.1 Permission model

Implement granular, server-enforced permissions rather than assuming every Admin can do everything. Suggested permission groups:

- View dashboard and reports
- Create/edit/publish/archive/delete products
- Manage product images and media
- Manage categories, subjects, classes and board mappings
- Change prices and discounts
- Manage stock and inventory adjustments
- View/manage orders
- Cancel orders and approve returns/refunds
- View customer information
- Manage reviews and reported content
- Manage promotions and coupons
- Manage website pages, banners and FAQs
- Manage shipping configuration
- Manage customer support tickets
- Manage notification templates/content
- Export reports and customer/order data

Super Admin controls Admin account provisioning and permission assignment. Admin cannot assign permissions to themselves, create a Super Admin, or change global security settings. Sensitive actions should require an explicit permission and may require confirmation or an additional approval workflow.

## 4. Admin navigation and information architecture

Recommended sidebar structure:

1. **Overview**
   - Dashboard

2. **Catalogue**
   - Products
   - Categories & Subcategories
   - Subjects & Classes
   - Product Media
   - Social Media Links

3. **Sales**
   - Orders
   - Returns & Cancellations
   - Invoices

4. **Inventory**
   - Stock Management
   - Stock Movements
   - Suppliers / Purchase Records (phaseable)

5. **Customers**
   - Customer Directory
   - Reviews & Ratings
   - Wishlists & Engagement
   - Questions & Answers

6. **Marketing**
   - Coupons & Discounts
   - Banners & Promotions
   - Featured Products

7. **Website**
   - Homepage Management
   - Pages & FAQs
   - SEO Management

8. **Operations**
   - Shipping & Delivery
   - Customer Support
   - Notifications

9. **Analytics**
   - Sales Reports
   - Product Reports
   - Customer Reports
   - Inventory Reports

10. **Administration**
    - Admin Activity Log (read-only for permitted roles)
    - My Account

Show only modules/actions the signed-in Admin is authorised to access.

## 5. Dashboard overview

After login, the Admin sees a summary of operational health, subject to permissions.

### 5.1 Key dashboard metrics

- Total orders
- New and pending orders
- Orders awaiting confirmation, packing or dispatch
- Today's sales and sales for a selectable period
- Published products, draft products and unpublished products
- Low-stock and out-of-stock products
- Pending deliveries and delayed/failed deliveries
- Recent customer support tickets/complaints
- New reviews and reported reviews
- Best-selling products
- Recent Admin activity and important system alerts

### 5.2 Dashboard behaviour

- Date-range filter for applicable metrics.
- Clickable metrics that open the corresponding filtered list.
- Clear empty, loading, error and permission-denied states.
- Do not display financial or personal metrics to Admins without the relevant permission.
- Metrics must be derived from real backend data, not hardcoded demo values in production.

## 6. Complete product catalogue management

Catalogue management is a core Admin responsibility. Admins with appropriate permissions must have full operational control over products and their public presentation.

### 6.1 Create and edit products

Product fields should support, as applicable:

- Product name/title
- Short description
- Detailed description
- SKU or internal product code
- Product images/gallery
- Selling price
- Optional MRP/list price
- Optional discount price or offer
- Applicable classes (1–12; multiple selection supported)
- Applicable boards (CBSE/ICSE; multiple selection supported)
- Subject or subjects
- Category and subcategory
- Product format (working model, chart, poster, project file, scrapbook, 3D model, kit, etc.)
- Difficulty level
- Materials and package contents
- Dimensions, weight and materials where relevant
- Preparation, assembly or usage instructions
- Stock quantity and availability
- Product tags, search keywords and synonyms
- Related/recommended products
- Product status
- SEO title, meta description and URL slug
- Social media content links (see Section 7)

Only fields relevant to a product need to be completed. Do not require irrelevant specifications for every product.

### 6.2 Product lifecycle

Admin should be able to:

- Create product
- Save as draft
- Preview product as it may appear on the customer website
- Publish
- Unpublish
- Edit
- Duplicate
- Archive/discontinue
- Delete, subject to safe deletion rules

For products referenced by existing orders, reviews or reports, use archival/soft deletion rather than destructive deletion that breaks historical records. A product should not be purchasable when unpublished, discontinued or unavailable.

### 6.3 Product listing and bulk actions

- Search products by name, SKU or keyword.
- Filter by class, board, subject, category, status, stock status and date.
- Sort by name, price, stock, created date and updated date.
- Support pagination.
- Allow authorised bulk actions such as publish/unpublish, archive, category assignment and stock updates.
- Confirm potentially destructive bulk actions and show affected item counts.

### 6.4 Bulk import/export

Provide CSV/Excel import and export for catalogue operations.

Import must include:
- Downloadable template
- Field validation and clear row-level errors
- Duplicate SKU/slug handling
- Preview before applying changes
- Safe partial-failure reporting
- No silent overwriting of data
- Image URLs only if they are securely validated and supported; do not assume arbitrary remote URLs are safe

Export must respect permissions and avoid exposing unnecessary customer data.

## 7. Product images and social media content

### 7.1 Image management

- Upload multiple product images.
- Select a primary/thumbnail image.
- Reorder gallery images.
- Replace or remove images.
- Add meaningful alt text.
- Validate file type and size.
- Optimise images and generate appropriate responsive sizes.
- Store images in controlled object storage (e.g. Supabase Storage) with suitable access policies.
- Do not expose private storage objects publicly.

### 7.2 External social media links

The purpose is to avoid storing large video files on ProjectBee's servers when demonstrations already exist on social platforms.

For each product, Admin can add multiple external media entries:

- Platform: Instagram, Facebook or YouTube
- Content URL: Reel, post, video or Shorts URL as applicable
- Optional display title/caption
- Optional thumbnail if a supported preview cannot be generated
- Display order
- Active/inactive toggle
- Visibility setting for the customer product page

Customer website behaviour:
- Display available project demonstration videos/posts in a product media section.
- Embed content only through official/supported embed mechanisms and where the platform permits.
- Provide a link to open the original content.
- If embedding is blocked, unavailable, private or unsupported, show a safe thumbnail/link fallback.
- Do not download or re-upload social videos to ProjectBee storage.
- Validate URLs and restrict embeds to approved platform domains to prevent unsafe embeds or script injection.
- Do not promise that every Instagram/Facebook post can be embedded; platform permissions and content visibility may limit previews.

Admin should be able to test/preview the media entry before publishing it.

## 8. Categories, subjects and academic taxonomy

The catalogue structure must be data-driven, not hardcoded into the frontend.

Admin with relevant permission can:
- Create, edit, activate/deactivate and archive categories/subcategories.
- Set category name, description, image/icon and display order.
- Manage subjects.
- Map subjects and categories to relevant classes and boards.
- Manage product formats and difficulty labels if configured as taxonomy.
- Assign products to multiple relevant classes, boards, subjects and categories.
- Preview category pages before publishing changes.

Academic navigation concept:

**Academic Group → Class → Subject → Project Category → Products**

Academic groups:
- Early Learners: Classes 1–2
- Primary School: Classes 3–5
- Middle School: Classes 6–8
- Secondary School: Classes 9–10
- Senior Secondary: Classes 11–12

Initial boards: CBSE and ICSE. Curriculum mappings must be validated; do not assume every subject/category applies to every class or board.

Avoid deleting taxonomy entries that are referenced by existing products/orders. Prefer deactivation, archival or controlled reassignment.

## 9. Pricing and offers

Admin with pricing permission can:
- Set and edit selling price.
- Set MRP/list price where applicable.
- Configure a discount price or offer.
- Schedule price/offer start and end dates if required.
- Enable/disable an offer.
- View price history.
- Perform bulk price updates with preview and confirmation.

Validation:
- Never accept a price supplied by the browser as authoritative during checkout.
- Recalculate order totals on the server using current valid product/offer rules.
- Clearly distinguish MRP, selling price and discount.
- Do not show misleading discounts.
- Record who changed a price, previous value, new value, timestamp and reason where appropriate.

Coupon and promotion rules are in Section 15.

## 10. Inventory and stock management

Admin can:
- Set and update available stock.
- Record stock received.
- Record manual stock adjustments with a reason.
- Mark products out of stock or available.
- View low-stock alerts.
- View stock movement history.
- Identify fast-moving and slow-moving products.
- View stock reserved for pending orders, if reservation is implemented.
- Prevent purchase of unavailable products.

Maintain an inventory ledger:
- Product/SKU
- Quantity change
- Previous and new quantity
- Change type (received, order, cancellation/restock, return, manual adjustment)
- Admin/staff actor
- Timestamp
- Reason/reference/order ID

Stock must be updated transactionally to prevent overselling during concurrent orders. Define and test the exact reservation/decrement/release lifecycle. Do not let a cancelled or failed order corrupt stock.

Supplier and purchase-order management may be delivered in a later phase. The architecture should allow supplier records and incoming stock to be added without redesign.

## 11. Order management

Admin with order permissions can view and process customer orders.

### 11.1 Order list and detail

- Search by order ID, customer reference or permitted contact fields.
- Filter by date, order status, payment method, delivery status and other operational fields.
- View order items, quantities, prices, address required for fulfilment, guardian contact needed for fulfilment, COD status and verification events.
- Display a clear order timeline.
- Print/download order summary, invoice and packing slip where configured.

### 11.2 Order status workflow

Suggested statuses (final operational workflow to be confirmed):

- Pending review / received
- Confirmed
- Processing
- Packed
- Dispatched
- Out for delivery (if courier data supports it)
- Delivered
- Cancelled
- Delivery failed / returned to origin
- Return requested
- Returned
- Refund pending / refunded (only if a refund process is applicable)

Do not allow arbitrary invalid status transitions. Record actor, timestamp, previous status, new status and reason.

### 11.3 COD and WhatsApp verification

V1 checkout is COD only. Customer PRD specifies mandatory guardian name and WhatsApp OTP validation before order confirmation.

Admin can see the necessary order verification state and timestamp, but must not see OTP secrets. WhatsApp OTP confirms control of a number; it is not proof of guardianship or legal consent.

Do not allow Admin to mark an order as phone-verified without a legitimate server-side verification event. Any exceptional override, if ever approved, must be tightly permissioned, justified and audited.

### 11.4 Cancellations, returns and refunds

- View and process cancellation requests according to configured policy.
- Record cancellation reason.
- Handle return requests and record decision/reason.
- Update inventory only according to the verified physical return/restock process.
- Record refund status only where a refund is actually applicable and supported.
- V1 is COD only; do not build an online payment refund flow unless separately approved.
- Do not invent return windows, eligibility, fees or refund timelines. These must be supplied and approved by the business.

## 12. Customer management

Admin with customer permissions can:
- Search and view customer accounts.
- View permitted profile and academic details.
- View order history and support history needed for operations.
- View customer account status.
- Handle account correction/deletion requests by an approved process.
- Apply account restrictions only with appropriate permission, reason and audit trail.

Privacy requirements:
- Show only data necessary for the Admin's task.
- Mask contact information where full values are not needed.
- Do not expose one customer's profile, address, phone number, email or orders to another customer.
- Restrict exports of personal data.
- Log access to sensitive records where appropriate.
- Do not use children's personal data for targeted advertising or unrelated profiling.
- Follow the customer PRD's child-safety, consent, retention and legal-review requirements.
- Do not invent legal consent or guardian-verification status.

## 13. Ratings, reviews and customer engagement

### 13.1 Verified-purchase review policy

ProjectBee has selected **Verified Purchase Only**.

A customer can submit a product review only when the backend confirms an eligible successfully delivered purchase of that product. Cancelled, failed, undelivered or returned orders are not eligible. The eligibility check must be server-side.

Define duplicate controls so a customer cannot flood a product with repeated reviews. Initial rule: one review per eligible customer/product/order combination; the exact policy for multiple separate purchases can be configured and documented.

Review fields:
- 1–5 star rating
- Written review
- Optional customer-uploaded project/product photographs
- Created/updated date
- Verified-purchase status derived from order records

Customers may edit their own reviews subject to reasonable controls and audit history.

### 13.2 Public review display

Customer-facing website should support:
- Average rating and total review count
- Star-rating distribution
- Review list
- Sorting by newest, highest and lowest rating
- Helpful votes
- Report-review action
- Verified Purchase label
- Safe display of approved review images

Do not expose a child's full name, phone number, school, address or other identifying details in public review displays. Use privacy-preserving display names.

### 13.3 Admin review moderation

Admin can:
- View reviews and associated product/order eligibility information.
- Approve/publish, hide or remove content that violates a published moderation policy.
- Handle reported reviews.
- Remove unsafe personal information or inappropriate imagery.
- Reply publicly where this feature is enabled.
- Record moderation reason and action history.
- View rating and review analytics.

Admin must not secretly manipulate average ratings or remove legitimate negative feedback merely because it is negative. Moderation must be policy-based and auditable.

### 13.4 Wishlist, likes and engagement

- Customers can add/remove products from wishlist/favourites using a heart control.
- Admin can view aggregate wishlist counts and product engagement statistics.
- Avoid exposing individual children's private browsing or wishlist activity unnecessarily.
- Support helpful votes on reviews with duplicate/abuse prevention.
- Product likes should be clearly defined as wishlist/favourite actions, not an unverified public popularity metric.

### 13.5 Questions and answers

Provide an optional product Q&A capability:
- Customers can submit product-related questions through an authenticated, privacy-safe flow.
- Admin or authorised staff can answer.
- Admin can hide spam, personal information or unsafe content.
- Public answers must not reveal customer personal data.
- If Q&A is not included in V1, keep it as a planned module and do not show a non-functional UI.

## 14. Website content management

Routine content changes should not require a developer.

Admin with content permissions can manage:
- Homepage hero/banner content.
- Featured products and featured categories.
- Popular categories/subjects.
- Homepage promotional sections.
- About Us, Mission and Vision content.
- Contact content (using approved business details).
- FAQs.
- Announcements.
- Footer links and social media links.
- Shipping, delivery, returns and refund information, using approved business policies.

Content controls:
- Draft, preview, publish and unpublish.
- Schedule publishing only if supported and approved.
- Validate links and images.
- Maintain revision history for important pages.
- Do not publish fabricated testimonials, trust badges, legal claims, contact details or delivery promises.
- Legal/privacy pages must be reviewed by qualified counsel and should not be casually edited as ordinary promotional content.

## 15. Discounts, coupons and promotions

Admin with marketing permissions can:
- Create fixed-amount or percentage coupons.
- Set validity period.
- Set minimum order value.
- Set usage limits and per-customer limits.
- Restrict coupons to selected products, categories, classes or customer groups only where legally and privacy appropriate.
- Enable, disable or expire coupons.
- Create promotional banners and featured-product collections.
- View coupon usage and campaign performance.

All coupon eligibility and calculations must be validated server-side. Prevent stacking unless explicitly configured. Do not invent discount policies or claim a discount that is not actually applied.

## 16. Shipping and delivery management

Admin with shipping permissions can manage operational settings, where business policy has been confirmed:

- Delivery PIN-code serviceability.
- Shipping zones.
- Shipping charges.
- Free-shipping threshold.
- Courier partner details/integration settings (sensitive integration credentials controlled by Super Admin or authorised configuration role).
- Tracking numbers and tracking URLs.
- Dispatch and delivery status.
- Delayed, failed and returned-to-origin orders.
- Delivery exceptions and internal notes.

Do not invent courier partners, delivery dates, fees, coverage or service-level promises. If courier integration is not available, allow authorised manual tracking updates and clearly identify them as manual.

## 17. Customer support and complaints

Provide a support/ticket module or a defined integration point.

Features:
- View customer queries and complaints.
- Create/assign tickets.
- Set priority and status.
- Add internal notes not visible to customers.
- Maintain communication history.
- Record resolution and closure reason.
- Escalate unresolved tickets.
- Link a ticket to a customer and order where appropriate.
- Restrict sensitive customer information to authorised staff.

Suggested statuses: New, Open, Waiting for Customer, In Progress, Escalated, Resolved, Closed.

Do not expose internal notes in customer-facing views.

## 18. Notifications and communication

Support operational notifications such as:
- Order received/confirmation
- Order status updates
- Dispatch/tracking updates
- Delivery updates where provider data supports them
- Cancellation/return updates
- Support ticket responses
- Low-stock alerts
- New review or reported-review alerts

Channels may include email and WhatsApp, subject to provider availability, approved templates, consent and applicable rules.

Admin may use approved templates and edit permitted message content. Provider credentials, API secrets, sender identities and global integration settings must be protected and generally controlled by Super Admin/authorised technical roles.

Maintain delivery logs and failure states without exposing OTPs or credentials. Do not send marketing messages to children or use customer data for unrelated marketing without legally reviewed permission.

## 19. Reports and analytics

Provide reports based on real backend data.

### 19.1 Sales reports
- Sales by day/week/month/custom date range
- Orders by status
- COD order volume
- Product-wise sales
- Category-wise and class-wise sales
- Average order value, if correctly calculated

### 19.2 Product reports
- Best-selling products
- Least-selling products
- Product views and conversion where privacy-compliant analytics are implemented
- Product search impressions/clicks
- Zero-result searches
- Wishlist counts
- Ratings and review trends

### 19.3 Inventory reports
- Current stock
- Low-stock and out-of-stock products
- Stock movement
- Stock adjustments
- Fast/slow-moving products
- Inventory valuation only if reliable cost data is maintained

### 19.4 Customer and operations reports
- New and repeat customers
- Order cancellation and return rates
- Delivery failure rates
- Support ticket volume and resolution times
- Coupon usage

Reports must have date filters and CSV/Excel export where permitted. Exports must enforce role permissions and minimise personal data. Avoid behavioural profiling of children; use aggregate, privacy-conscious analytics.

## 20. Admin activity and audit trail

Record important actions, including:
- Product creation, edits, publication, unpublication and deletion/archive
- Price and discount changes
- Stock changes
- Category/subject/taxonomy changes
- Order status changes
- Cancellation, return and refund actions
- Review moderation and replies
- Coupon/promotion changes
- Website content publication
- Customer account restrictions
- Permission-sensitive data access where appropriate

Each event should include:
- Actor/Admin ID
- Action
- Target record/type
- Timestamp
- Previous and new values where appropriate
- Reason/comment for sensitive actions
- Request/correlation identifier where useful

Audit records must be append-only or otherwise protected from ordinary Admin alteration. Admins with permission may view logs but cannot erase or rewrite them. Super Admin audit access and controls are specified separately.

## 21. Business and operational settings

Admin may manage routine settings if specifically permissioned:
- Business contact details shown to customers
- Support contact information
- COD availability by approved rule
- Order processing options
- Shipping configuration
- Invoice display fields
- Notification preferences
- Tax configuration, only with explicit authorisation and validated business/accounting requirements

Global platform configuration, authentication providers, privileged API credentials, payment integrations, security settings and Admin role management belong to Super Admin or a separately authorised technical role.

## 22. Security, privacy and child safety

ProjectBee serves students in Classes 1–12, including children. Admin access to personal information must be designed with least privilege.

Requirements:
- Server-side authorisation for every protected action and API.
- Database row-level security and least-privilege access.
- Never rely only on hidden frontend controls.
- No Supabase service-role key or provider secret in browser code.
- Secure sessions, session expiry and logout invalidation.
- Rate limiting and abuse prevention.
- Audit sensitive actions.
- Protect customer profiles, addresses, orders, phone numbers and emails.
- Mask personal data when full values are unnecessary.
- Restrict and audit data exports.
- Do not allow Admins to view OTP secrets.
- Validate uploads and prevent malicious file uploads.
- Validate external social links and embed origins.
- Prevent IDOR, privilege escalation, CSRF/XSS and unsafe query construction.
- Use secure, transactional server-side order, price and stock validation.
- Provide a controlled workflow for privacy requests.
- Follow applicable Indian privacy law and the customer PRD's legal-review requirements.
- Obtain qualified legal/privacy review before production processing of children's personal data.
- Do not claim legal compliance solely because these controls are implemented.

## 23. Technical and integration requirements

The project direction uses Supabase for backend/database. Antigravity must inspect the existing repository and preserve the established frontend framework, hosting and conventions unless a change is approved.

Expected integration principles:
- Shared product/category/subject data between Admin and customer website.
- Supabase PostgreSQL as the source of truth.
- Supabase Storage or equivalent controlled object storage for product images.
- Server-side functions/API for sensitive actions.
- RLS for protected records.
- Search index/data updated when products or taxonomy change.
- Reliable cache invalidation/revalidation when Admin publishes or edits public content.
- Server-side price, stock, coupon and order validation.
- Order-item snapshots so historical orders retain the product title, price and relevant details at purchase time.
- Audit events for important Admin actions.
- External media embeds use approved platform methods; no video rehosting.
- Integrations should be replaceable/configurable without coupling core catalogue/order logic to one vendor.

Potential core entities (final schema belongs in the shared architecture/database specification):
- admins, admin_roles, permissions, role_permissions
- products, product_images, product_classes, product_boards, product_subjects
- academic_groups, classes, boards, subjects, categories, product_formats
- product_keywords, search_synonyms, product_social_links
- inventory, stock_movements
- orders, order_items, order_status_events
- customers/user_profiles, addresses
- reviews, review_images, review_reports, review_helpful_votes
- wishlists, wishlist_items, product_questions, product_answers
- coupons, promotions, banners, content_pages, faqs
- shipping_zones, serviceable_pincodes, shipment_events
- support_tickets, support_messages
- notification_templates, notification_logs
- admin_audit_logs

Do not create every table blindly; reconcile entities with the customer PRD and final shared architecture.

## 24. Suggested implementation phases

**Phase 1 — Admin foundation**
- Secure Admin login/authorisation
- Permission-aware sidebar
- Dashboard shell
- Audit logging foundation

**Phase 2 — Catalogue**
- Product CRUD and lifecycle
- Images
- Categories, subjects, classes and boards
- Social media links and preview/fallback
- Public catalogue synchronisation

**Phase 3 — Pricing and inventory**
- Pricing and price history
- Stock management and movement ledger
- Bulk import/export
- Low-stock alerts

**Phase 4 — Orders and fulfilment**
- Order list/detail and timeline
- COD verification visibility
- Order status workflow
- Shipping/tracking
- Cancellation/return handling

**Phase 5 — Customers and engagement**
- Customer directory with privacy restrictions
- Verified-purchase reviews
- Review moderation
- Wishlist aggregates
- Product Q&A if approved

**Phase 6 — Marketing and website content**
- Coupons/promotions
- Homepage banners/featured products
- Content pages and FAQs
- SEO fields

**Phase 7 — Support, notifications and reports**
- Tickets
- Notification templates/logs
- Operational and sales reports
- Export controls

Advanced supplier purchasing, advanced automation and deeper analytics may be deferred, but the architecture should not prevent them later.

## 25. Acceptance criteria

The Admin Dashboard is ready for business review when:

1. Admin login and server-side permissions work.
2. Multiple Admin accounts and granular permission checks are supported.
3. Admin can create, edit, preview, publish, unpublish, archive and safely delete products.
4. Product images can be uploaded, reordered, replaced and removed.
5. Product social links can be managed and displayed using supported embed/link fallbacks.
6. Admin can manage categories, subjects, classes and board mappings without code changes.
7. Pricing changes are validated and audited.
8. Stock updates are transactional and stock movement history is available.
9. Published product changes are reflected on customer pages/search; drafts remain private.
10. Admin can view and process orders using valid status transitions.
11. COD verification state is visible without exposing OTP secrets.
12. Customer information is permission-restricted and protected.
13. Reviews require verified eligible purchases; Admin moderation is policy-based and audited.
14. Wishlist and engagement reports use aggregate/privacy-conscious data.
15. Promotions and coupons are validated server-side.
16. Website content can be previewed before publication.
17. Shipping and support workflows show clear statuses and histories.
18. Reports use real data and enforce export permissions.
19. Important Admin actions are recorded in protected audit logs.
20. No privileged keys or secrets are exposed to the frontend.
21. Child privacy and legal review requirements from the customer PRD are preserved.
22. No fake products, reviews, ratings, orders, stock, sales or delivery claims are presented as real.

## 26. Open decisions

The following require business confirmation or a separate policy/configuration decision:

1. Exact Admin permission matrix and which staff roles will be used initially.
2. Whether review publication is automatic after validation or requires moderation before display.
3. Exact review eligibility policy for multiple separate purchases of the same product.
4. Return/cancellation eligibility, windows, fees and refund policy.
5. Courier partner(s), tracking integration and manual fallback.
6. Shipping zones, serviceable PIN codes, fees and free-shipping threshold.
7. Invoice format, numbering, tax treatment and accounting requirements.
8. Coupon stacking and detailed offer rules.
9. Whether product Q&A is included in V1.
10. Whether suppliers and purchase orders are included in V1 or deferred.
11. WhatsApp/email providers, templates and permitted notification workflows.
12. Exact analytics retention and privacy configuration.
13. Whether any sensitive Admin action requires a second-person approval.

## 27. Instructions to Antigravity

1. Read this document and the customer-facing `PRD.md` completely before implementation.
2. Treat the customer PRD as the source for customer journeys and this document as the source for Admin operations.
3. Inspect the existing repository, stack, database and current implementation before changing anything.
4. Do not create the Super Admin Dashboard from this document; wait for `SUPER_ADMIN_PRD.md`.
5. Preserve the established stack unless a change is justified and approved.
6. Implement server-side permission checks; frontend hiding is not security.
7. Use the same source-of-truth catalogue and order data for Admin and customer website.
8. Do not invent policies, prices, shipping rules, providers, legal copy or production data.
9. Keep unresolved decisions visible and ask before making irreversible assumptions.
10. Use mock/demo data only when clearly labelled and never represent it as real production data.
11. Build responsive, accessible, maintainable components.
12. Test role boundaries, IDOR, RLS, price tampering, stock concurrency, order transitions, review eligibility and audit logging.
13. Before each major phase, present the proposed implementation and dependencies for review.
14. At the end of each phase, report completed work, files changed, tests, known gaps and next steps.

---

**End of ADMIN_PRD — Version 1.0**
