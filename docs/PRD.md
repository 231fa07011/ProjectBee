# ProjectBee – Product Requirements Document (PRD)

**Version:** 1.0 – Customer-Facing Website  
**Status:** Draft for Antigravity implementation planning  
**Brand:** ProjectBee  
**Tagline:** School Projects Made Easy!  
**Initial market:** India  
**Boards:** CBSE and ICSE  
**Classes:** 1–12  
**Payment:** Cash on Delivery (COD) only in V1

## 1. Purpose and scope

This PRD defines the customer-facing website and shopping experience for ProjectBee, an e-commerce platform for ready-made school projects and educational products for students in Classes 1–12.

It is intended as an implementation brief for Antigravity. Detailed Admin and Super Admin dashboards, permissions, management workflows and reporting are deliberately out of scope and will be specified separately later. Build the customer-facing experience so it can connect to those future systems.

Where a decision is not final, it is marked **Open decision**. Do not silently invent irreversible business rules.

## 2. Product overview

ProjectBee helps students and parents discover suitable school projects by class, board, subject, category and product format. It is not only a science-project shop or a conventional stationery store.

Product range may include:
- Science projects and working models
- Mathematics projects and models
- Subject projects and assignments
- Charts and posters
- Art and craft
- Project files and scrapbooks
- 3D models and dioramas
- Experiment kits
- STEM and robotics kits
- Exhibition and competition projects

**Product promise:** Make it easy for students and parents to find attractive, relevant, ready-made school projects.

Initial scope:
- India-wide customer-facing website; Bengaluru is the initial operational base.
- CBSE and ICSE only.
- English-language website and English-language search.
- Physical products.
- COD-only checkout in V1; no online payment gateway.

## 3. Goals and experience principles

Goals:
1. Help visitors find projects appropriate to a class and subject.
2. Allow browsing without forced registration.
3. Provide a simple, mobile-first shopping experience.
4. Personalise recommendations when users voluntarily provide profile information.
5. Never make profile completion a condition for website use.
6. Make parent/guardian involvement clear at ordering.
7. Protect children’s personal information by design.
8. Support a flexible catalogue across classes, subjects, boards and formats.

Experience principles:
- Clean, simple, organised and student-friendly; avoid clutter.
- Mobile-first, responsive and accessible.
- Clear navigation, readable typography and large tap targets.
- Prominent search.
- Progressive disclosure instead of long forms.
- Incomplete profiles must never block ordinary features.
- Gender must not be used to restrict products.
- Explicit searches must not be restricted by profile class.

## 4. Brand and visual direction

- Brand: **ProjectBee**
- Tagline: **School Projects Made Easy!**
- Domain direction discussed: `projectbee.in`; availability/ownership is not asserted here.
- The user-supplied approved ProjectBee logo is the source of truth. Do not redesign, recolour, distort or replace it. Use the actual approved asset supplied in the Antigravity workspace. If missing, use a clearly labelled temporary placeholder and request the asset.

Working colour palette (approved logo takes precedence):
- Navy `#142B55` – primary text/navigation
- Bee yellow `#FFC928` – highlights and key CTAs
- Red `#EA4335`, green `#34A853`, bright blue `#4285F4` – restrained accents
- White `#FFFFFF` – primary background

Use navy and yellow as dominant colours; do not use all accent colours equally in every component. Use clean backgrounds, rounded cards, high-quality product imagery and restrained mascot illustrations. Do not place the mascot everywhere. Avoid excessive animation, popups and visual noise.

All key journeys must work on mobile without horizontal scrolling. Include accessible contrast, visible focus states, keyboard support and suitably sized touch targets.

## 5. Roles, browsing and authentication

The wider system is expected to have Super Admin, Admin and User/Customer roles. This PRD covers only public/customer-facing functionality.

### 5.1 Browse first, login when needed

First-time visitors must not be forced to register or log in merely to explore.

Guests can:
- Visit homepage and public information pages.
- Browse academic groups, classes, subjects and categories.
- Search the catalogue.
- View product previews.

Account-specific features such as saving products, managing a profile and viewing order history require login.

The initial concept proposed limited guest product previews and login for full product details, cart and purchase. **Open decision:** confirm the exact boundary for full product details before production. Do not unexpectedly block basic discovery.

When a guest selects a restricted action, show a clear email OTP login and return them to the same product/search context after successful login.

### 5.2 Passwordless email OTP

- Email OTP only; no username/password login.
- Every login requires successful OTP verification.
- OTP must be single-use, time-limited and protected by resend cooldowns, attempt limits and rate limiting.
- Avoid revealing whether an email is registered.
- Use secure server-managed sessions and secure cookie settings.
- Logout must invalidate the session.
- All private data and account-specific APIs require server-side authorisation.
- Never expose service-role keys, secrets or privileged credentials in frontend code.

Customer account creation may occur after first successful email verification, subject to the child privacy and parental-consent design.

## 6. Progressive optional student profile

### 6.1 Core rule

Use short, progressive cards—not one long form. Users may skip cards and continue using the website. Profile completion must never unlock or block normal features.

### 6.2 First card

After first successful login, show one compact card with:
1. Name
2. Gender
3. Class (1–12)

Allow **Skip for now**. Gender choices should include “Prefer not to say”. Do not use gender to restrict products or determine eligibility.

### 6.3 Optional follow-up cards

Show later cards with approximately 3–4 questions each. Potential cards:

**Academic details:** School board (CBSE/ICSE), section, favourite subjects.  
**Personal details:** Preferred name/nickname, age group (prefer age group over exact DOB).  
**Location:** City and state; collect PIN code only if there is a clear need (delivery address is collected at checkout).  
**Interests:** Favourite project categories, hobbies and project interests.

Exact questions remain open for later review. Collect only information with a clear purpose.

Each card should have a short heading, concise explanation, 3–4 questions maximum, Continue, Skip for now, Back where applicable and a compact progress indicator. Avoid repeated interruptions. Let users edit details later.

### 6.4 Completion percentage and personalisation

Show optional profile completion from 0% to 100%. It is informational only and never gates features.

- When class and board are available, prioritise matching products on the homepage.
- If they are missing, show general popular/relevant products.
- A Class 5 profile may prioritise Class 5 projects by default.
- An explicit search for Class 12 must still return Class 12 results.
- Users can update class and board.
- **Open decision:** whether to show an annual class-update reminder. Never automatically change class without confirmation.

## 7. Academic user classification

Use five primary groups for navigation and merchandising while retaining exact class (1–12) in profiles and product data.

| Academic group | Classes | Focus |
|---|---:|---|
| Early Learners | 1–2 | Foundational, simple, creative activities |
| Primary School | 3–5 | Exploration and basic subject projects |
| Middle School | 6–8 | Concept building, experiments and models |
| Secondary School | 9–10 | Subject application and practical projects |
| Senior Secondary | 11–12 | Advanced subject and investigatory projects |

These are navigation groupings, not age verification or access restrictions.

## 8. Product catalogue taxonomy

### 8.1 Product attributes

Each product should support:
- Product name, short description and full description
- Product images
- Academic group
- Applicable class/classes (one or more of 1–12)
- Applicable board(s) (CBSE and/or ICSE)
- Subject(s)
- Project category
- Product format/type
- Difficulty level
- Search keywords and English synonyms
- Price
- Stock/availability
- Publication status
- Delivery weight/dimensions where needed

A product can apply to multiple classes, subjects and boards. Do not force one product into a single class or board.

### 8.2 Early Learners – Classes 1–2

Possible categories:
- Drawing and Colouring
- Paper Craft
- Shapes and Numbers
- Alphabet and Word Activities
- My Family and My School
- Plants and Animals
- Seasons and Festivals
- Simple Charts
- Clay Modelling
- Scrapbooks and Activity Files

### 8.3 Primary School – Classes 3–5

Possible categories:
- Science Models
- Plant and Animal Projects
- Solar System and Space
- Mathematics Models
- English Grammar and Language Projects
- Hindi Language and Literature Projects
- EVS and Environment Projects
- Social Studies, Geography and Maps
- Art and Craft
- Scrapbooks and Assignments
- Models and Dioramas

### 8.4 Middle School – Classes 6–8

Possible categories:
- Physics Basics, Force and Motion
- Living Organisms, Human Body and Nutrition
- Cell and Microorganism Models
- Solar System, Earth and Space Science
- Electricity and Magnetism
- Mathematics, Algebra, Geometry and Mensuration
- English Language and Literature
- Hindi and Sanskrit Projects where curriculum-relevant
- History and Geography
- Ecology, Biodiversity, Climate and Sustainability
- Science Experiments
- STEM and Innovation
- Art and Design
- Project Files, Assignments and Exhibitions

### 8.5 Secondary School – Classes 9–10

Possible categories:
- Physics Models and Experiments
- Chemistry Models and Experiments
- Biology and Life Science
- Cell, Genetics and Biotechnology
- Mathematics Projects
- Statistics and Geometry
- English Projects and Literature
- Hindi and Sanskrit Projects where curriculum-relevant
- History and Political Science
- Geography and Economics
- Environmental Science
- Robotics and STEM
- Science Exhibition Projects
- Practical Files and Assignments

### 8.6 Senior Secondary – Classes 11–12

Possible categories:
- Physics Practical Models
- Chemistry Practical Projects
- Biology, Botany and Biotechnology
- Mathematics and Statistics
- Computer Science and Technology
- Electronics and Robotics
- English Literature and Research Projects
- Hindi and Sanskrit Projects where curriculum-relevant
- Economics
- Accountancy and Business Studies
- Geography and Environmental Studies
- Psychology
- Sociology
- Practical Files and Records
- Research and Investigatory Projects
- Advanced Exhibition and Competition Projects

Validate subject/category applicability against the relevant CBSE/ICSE curriculum. Do not imply that every subject is available in every class or board.

### 8.7 Common product formats

- Working Models
- Charts and Posters
- 3D Models and Dioramas
- Project Files and Scrapbooks
- Experiment Kits
- Art and Craft Kits
- STEM and Robotics Kits
- Exhibition Projects

Difficulty levels: Beginner, Intermediate and Advanced. Difficulty is a discovery aid, not a substitute for class applicability.

### 8.8 Catalogue hierarchy

**Academic Group → Class → Subject → Project Category → Products**

Example: `Primary School → Class 5 → Science → Space & Astronomy → Solar System Working Model`

Products may appear under multiple applicable paths.

School Exhibition & Competition products should be discoverable across all five groups. **Open decision:** final homepage placement of a dedicated cross-class exhibition section.

## 9. Website navigation and public pages

Keep navigation concise. Proposed primary navigation:
- Home
- Explore Projects / Shop
- Browse by Class
- Categories
- About Us
- Contact Us

Search, account and cart access should be easy to find.

Required public pages, accessible without login:
- Home
- About Us
- Our Mission
- Our Vision
- Contact Us
- Privacy Policy
- Child Safety & Data Protection
- Parent/Guardian Consent Policy
- Terms & Conditions
- Shipping & Delivery Policy
- Returns & Refunds Policy
- Sitemap

Use clear, genuine copy. Do not make unsupported claims about learning outcomes, certifications, delivery guarantees or legal compliance.

Provide a human-readable HTML sitemap and an XML sitemap for public pages and published products. Exclude private account, checkout and unpublished product URLs.

## 10. Homepage

Suggested sections:
1. Header with approved logo, navigation, account and cart
2. Prominent search bar
3. Hero with concise value proposition and clear CTA
4. Browse Projects by Class (five academic groups)
5. Popular project categories
6. Featured/popular products
7. Browse by subject
8. School Exhibition & Competition projects
9. Why ProjectBee
10. Simple ordering/delivery explanation
11. Parent-focused trust and privacy information
12. Footer with public pages and policies

Keep the page clean and avoid excessive length. Use cards/carousels only where they improve browsing. Do not fabricate reviews, ratings, testimonials, sales figures or trust badges. Clearly separate development demo data from real production inventory.

## 11. Search – core capability

### 11.1 Scope

- English-only search.
- CBSE and ICSE only in initial release.
- Search against backend/database data, not by loading the entire catalogue into the browser.
- Products for Hindi/Sanskrit subjects may exist; that does not make the interface multilingual.

### 11.2 Searchable fields

Product title, short/full description, subject, class, board, category, product format, tags, keywords and English synonyms.

### 11.3 Capabilities

Use Supabase PostgreSQL:
- Full Text Search
- Typo-tolerant approximate matching using `pg_trgm`
- Managed English synonyms/related terms
- Autocomplete and suggestions
- Class, board, subject and product-type filters
- Relevance ranking
- Pagination or infinite scroll
- Search analytics and zero-result tracking

Typo examples: “Scince Project” should find Science Project; “Soler System” should find Solar System.

Example searches:
- Class 5 CBSE Science Project
- ICSE Class 8 Mathematics Model
- Solar System Working Model
- Human Heart 3D Model
- Class 7 English Grammar Chart

### 11.4 Ranking

Suggested order:
1. Exact title match
2. Title phrase match
3. Strong class/subject/board match
4. Category and product-format match
5. Synonym/keyword match
6. Typo-tolerant match
7. Other related matches

Profile class must not suppress results from an explicit search.

### 11.5 Filters and performance

Potential filters: class, board, subject, project category, product format, difficulty, price range and availability. Show only relevant filters.

- Debounce approximately 250–350 ms.
- Use a sensible minimum query length.
- Avoid a backend request for every keystroke.
- Use indexed fields and parameterised queries/RPC.
- Initial target: typical indexed searches around 500 ms under normal expected load; validate with realistic catalogue size.
- Provide loading, error and no-result states.

### 11.6 Search analytics and child privacy

Capture only necessary query/result/click/zero-result information. Treat linked search history as personal data. Do not use children’s search behaviour for targeted advertising or behavioural profiling. Apply access and retention controls.

## 12. Product listings and details

### 12.1 Listing card

May show:
- Product image and name
- Applicable class/classes and board(s)
- Subject
- Short descriptor
- Price
- Reliable availability indicator
- Wishlist action for signed-in users

### 12.2 Product detail page

Potential content:
- Product name and image gallery
- Price
- Applicable classes and boards
- Subject and category
- Product format and difficulty
- Full description
- Package contents
- Dimensions/materials where relevant
- Preparation/use information where supplied
- Delivery information and availability
- Add to Cart / Buy Now
- Related products

Never invent specifications, package contents or delivery promises.

### 12.3 Guest access

The initial concept proposes limited guest previews and fuller details for signed-in users. Confirm the precise boundary before production. Keep basic discovery and search usable without forced login.

## 12A. Product ratings, reviews and customer engagement

ProjectBee should provide a trustworthy e-commerce product feedback and engagement experience.

### 12A.1 Verified-purchase-only reviews

**Confirmed policy: only verified purchasers may submit product ratings and reviews.**

- A customer may review a product only when the backend confirms an eligible purchase of that product.
- The order must have reached Delivered status.
- Cancelled, failed, undelivered and returned orders are not eligible.
- Eligibility must be checked server-side using order records; never trust a client-side flag.
- Initial duplicate-prevention rule: one review per customer/product/order combination. Prevent repeated or abusive submissions.
- A customer may submit a 1–5 star rating and written review.
- Optional review photographs may be uploaded, subject to file validation, moderation and privacy safeguards.
- Customers may edit their own review subject to reasonable controls and retained moderation/audit history.
- Display a **Verified Purchase** label only when eligibility is derived from trusted order data.

Do not allow open reviews from visitors or customers who have not purchased the product.

### 12A.2 Review display and discovery

Product detail pages should show, when real review data exists:
- Average star rating and total review count.
- Rating distribution from 5 stars to 1 star.
- Published customer reviews.
- Verified Purchase label.
- Review date and privacy-preserving display name.
- Optional approved review photographs.
- Sorting by most recent, highest rated and lowest rated.
- A helpful vote control for reviews.
- A report-review action for inappropriate content.

Do not fabricate ratings, reviews, review counts or customer photographs. If a product has no reviews, show a clear “No reviews yet” state rather than placeholder ratings.

### 12A.3 Review privacy and moderation

- Never publicly expose a child's full name, email, phone number, school, address or other identifying details.
- Use a privacy-preserving display name and allow safe display-name rules.
- Validate and moderate uploaded review images to prevent exposure of identifying information or unsafe content.
- Customers can report a review.
- Admin moderation, replies and policy-based removal are defined in `ADMIN_PRD.md`.
- Legitimate negative reviews must not be hidden merely because they are negative.
- Helpful votes must include duplicate/abuse prevention.

### 12A.4 Wishlist and favourites

- Signed-in customers can add/remove products using a heart/favourite control.
- Wishlist is account-specific and synchronised across the customer's signed-in sessions/devices.
- Guests may be prompted to log in when they try to save a product; return them to the same product after login.
- Customers can view and manage their saved products in the account area.
- Wishlist actions must not be presented as public ratings or verified product endorsements.
- Do not expose individual children's wishlist or browsing activity publicly.

### 12A.5 Product questions and answers

Provide a product-specific questions-and-answers experience, subject to moderation and privacy controls:
- Signed-in customers can submit a question about a product.
- Admin/authorised staff can publish an answer.
- Public questions and answers must not reveal personal information.
- Provide reporting/moderation for spam, unsafe content and personal data.
- If Q&A is deferred from V1, do not show a non-functional control; keep it documented as a planned feature.

## 12B. Product demonstration videos and external social media links

Product detail pages should support demonstration content hosted on external social platforms, reducing the need to store large video files on ProjectBee infrastructure.

Supported platform types:
- YouTube videos and Shorts.
- Instagram Reels and posts.
- Facebook videos and posts.

Customer experience:
- Show a “Watch Project Demo” or similar media section when a product has linked content.
- Embed content only through official/supported embed mechanisms and where the platform permits.
- Provide a clear link to open the original post/video on its platform.
- If embedding is unavailable, blocked, private or unsupported, show a safe thumbnail/link fallback.
- Support multiple media links per product where provided.
- Do not download or re-upload social media videos to ProjectBee storage.
- Do not promise that every Instagram/Facebook post can be embedded; visibility, platform rules and permissions can limit previews.

Links are managed through the separate Admin Dashboard. Validate URLs and restrict embeds to approved platform domains. Do not allow arbitrary HTML or scripts supplied through product data.

## 12C. Product sharing, recommendations and browsing conveniences

- Allow customers to share product pages using the device/browser share feature where supported, with a copy-link fallback.
- Provide direct share links for common channels such as WhatsApp, subject to safe URL handling.
- Show related products based on meaningful catalogue relationships such as class, board, subject, category or product format.
- Support featured products, new arrivals and popular products when the underlying data supports those labels.
- Do not fabricate “best seller”, “popular” or “trending” labels without a defined, real data basis.
- A recently viewed section may be offered to signed-in users; keep it optional and privacy-conscious. Do not use children's browsing history for targeted advertising or behavioural profiling.
- Recommendations must not restrict explicit search results and must follow the child privacy principles in Section 15.

## 13. Cart and COD checkout

### 13.1 Payment in V1

**COD only.** Do not integrate or expose UPI, cards, net banking, wallets or another online payment gateway. A future gateway can be considered after legal, parental authorisation, provider and operational review.

### 13.2 Mandatory checkout details

- Student/customer name
- Parent/guardian full name – mandatory
- Parent/guardian WhatsApp number – mandatory
- Delivery address
- PIN code
- City
- State
- Order items and quantities
- COD payment method

Provide useful address fields such as house/flat number, street and landmark as appropriate. An order cannot be placed without the guardian name.

### 13.3 WhatsApp OTP

Before accepting/confirming a COD order:
1. Enter parent/guardian name and WhatsApp number.
2. Send OTP through an approved WhatsApp Business Platform integration/provider.
3. Parent/guardian enters OTP.
4. Backend validates OTP.
5. Show final order summary.
6. On confirmation, create order and order ID.
7. Send order confirmation to verified WhatsApp number, subject to approved provider templates and rules.

Security:
- OTP expiry and single-use
- Resend cooldown and attempt limits
- Rate limiting
- Secure OTP storage; never store plaintext OTPs
- Server-side validation
- Clear retry/error states
- No silent bypass if WhatsApp delivery fails

**Important:** WhatsApp OTP verifies control of the WhatsApp number. It does not independently prove the person is the child’s parent/guardian or constitute legally sufficient parental consent. Do not label it as proof of guardianship or legal consent.

### 13.4 Order confirmation and COD operations

Do not create a confirmed order until checkout validation and WhatsApp OTP verification succeed. Show a final summary before placing the order.

A delivery OTP may be considered later, but is not required for initial checkout unless separately approved.

COD serviceability, shipping charges, cancellation, failed delivery, return and refund rules must be supplied by the business. Do not invent these values. If not configured, show a clear development placeholder or disable the affected action rather than misleading customers.

## 14. Customer account area

Potential sections:
- My Profile
- Academic Details
- Profile Completion
- My Orders
- Order Details and Status
- Saved Products / Wishlist
- Recently Viewed (optional and privacy-conscious)
- Edit Profile
- Logout

Only expose implemented features backed by secure data. Users may access and manage only their own information and orders.

## 15. Child safety, privacy and legal requirements

### 15.1 Privacy-first principle

ProjectBee serves students in Classes 1–12, including children under 18. Privacy is a core product and engineering requirement, not merely a footer policy.

Design for applicable Indian law, including the Digital Personal Data Protection Act, 2023 and Digital Personal Data Protection Rules, 2025, according to their applicable commencement/implementation schedule. Obtain qualified Indian legal/privacy counsel review before launch. This PRD is not legal advice.

### 15.2 Data minimisation

- Collect only data necessary for a clear purpose.
- Prefer age group over exact DOB unless a specific lawful need is established.
- Do not require city, gender, school name, section or interests merely to browse.
- Optional profile fields must remain optional.
- Collect delivery address at checkout, not as a profile-completion condition.
- Define retention and deletion procedures.

### 15.3 Parent/guardian consent

Support an appropriate, legally reviewed parental/guardian consent process before processing children’s personal data where required by applicable law.

Distinguish clearly:
- Email OTP = account authentication.
- WhatsApp OTP = control of a phone number.
- Guardian name = checkout information.
- None of these alone automatically proves parental identity or legally sufficient verifiable parental consent.

The exact verification method, evidence, user journey, exceptions and retention must be designed after legal review. Do not claim compliance merely because a checkbox or OTP exists.

### 15.4 Child protection

- Do not use targeted advertising directed at children.
- Do not use behavioural tracking or monitoring of children except where a legally reviewed permitted basis applies.
- Do not sell children’s personal data.
- Do not share personal data without a lawful basis, appropriate disclosure and processor safeguards.
- Avoid unnecessary advertising trackers and third-party SDKs.
- Prefer privacy-friendly, aggregate analytics.
- Explain privacy in language parents and children can understand.
- Provide a clear privacy contact and grievance process.

### 15.5 Security

- HTTPS throughout.
- Secure authentication and sessions.
- Server-side authorisation for private data.
- Supabase Row Level Security (RLS) for customer-owned records.
- No public access to private profiles, addresses, phone numbers or orders.
- Future staff access must use role-based least privilege.
- Use platform-supported encryption in transit and at rest.
- Secrets management; no privileged keys in frontend.
- Rate limiting and abuse protection.
- Audit important access and changes where appropriate.
- Document breach detection, response and legally required notifications.
- Review all external processors and integrations before enabling them.

### 15.6 Rights and support

Provide a clear process for parents/users to contact ProjectBee about access, correction, erasure where applicable, consent withdrawal, grievances and privacy complaints. Final policy must state actual contact details and applicable process/timelines. Do not invent a grievance officer or contact address.

Legal policies must be drafted and reviewed for the actual business. Do not publish generic placeholder legal copy as final legal advice.

## 16. Public trust and content

Explain what ProjectBee offers, who it serves, how to browse by class/subject, how COD works, why guardian details are requested, how child data is protected and how to contact the business.

Use honest language. Do not claim “100% secure”, “fully compliant” or “guaranteed” without substantiation.

## 17. Technical architecture direction

### 17.1 Backend

Supabase is the selected backend/database direction.

High-level direction:
- Responsive web frontend
- Supabase PostgreSQL
- Supabase Auth or suitable server-side email OTP implementation
- Supabase Storage for product images with appropriate access policies
- Server-side functions/RPC for sensitive operations
- WhatsApp Business Platform/provider integration for checkout OTP
- Future integration points for fulfilment and administration

Inspect the existing repository and preserve its established framework/hosting unless the project owner approves a change. Do not silently replace an existing stack.

### 17.2 Security architecture

- Privileged operations run server-side.
- Never expose Supabase service-role keys in browser code.
- RLS for user-owned profiles, addresses, carts and orders.
- Users can read/update only their permitted records.
- Order creation validates price, product status, stock/serviceability and OTP server-side.
- Never trust price, role, order status or verification flags from the browser.
- Prevent access to another user’s data by changing IDs.
- OTP generation and validation run in trusted server-side code.
- Use parameterised database operations.

### 17.3 Conceptual data entities

Conceptual only; not a final schema:
- `products`
- `product_classes` (many-to-many)
- `product_boards` (many-to-many)
- `product_subjects` (many-to-many)
- `academic_groups`
- `subjects`
- `project_categories`
- `product_formats`
- `product_keywords`
- `search_synonyms`
- `user_profiles`
- `user_addresses`
- `carts`
- `cart_items`
- `orders`
- `order_items`
- `order_verification_events`
- `search_events`
- `privacy_consent_records` (designed after legal review)

Keep stable IDs, relational links, exact class numbers, publication status and stock status distinct. Store order item price/name snapshots so historical orders remain accurate if catalogue data changes. Keep private customer data separate from public catalogue data.

## 18. Performance, accessibility and quality

Performance:
- Optimise and responsively size images.
- Lazy-load below-the-fold imagery.
- Avoid unnecessarily large frontend bundles.
- Paginate catalogue/search results.
- Index common search/filter fields.
- Provide loading states.
- Test on mid-range mobile devices and slower connections.

Accessibility:
- Semantic structure and headings.
- Keyboard navigation and visible focus.
- Proper labels and accessible validation messages.
- Sufficient contrast.
- Alt text for meaningful images.
- Do not communicate status by colour alone.
- Respect reduced-motion preferences.

Design friendly states for no results, empty categories, unavailable products, network errors, expired/invalid email OTP, WhatsApp delivery/verification failure, empty cart, no orders and skipped/incomplete profiles. Never expose secrets or internal errors.

## 19. Explicitly out of scope

Deferred to later specifications:
- Detailed Admin dashboard
- Detailed Super Admin dashboard
- Admin/Super Admin permissions and approval workflows
- Product and inventory management interfaces
- Order management dashboard
- Admin analytics/reports
- Supplier/vendor portal
- Online payment gateway
- Native mobile apps
- State-board expansion
- Multilingual website/search
- Loyalty, referral and reward systems
- Advanced AI recommendations

Do not build deferred dashboards/features without a separate approved specification.

## 20. Suggested implementation phases

**Phase 1 – Foundation:** inspect repository; preserve stack; establish design tokens, reusable layout, approved logo, header/footer.

**Phase 2 – Public browsing:** homepage, academic group/class browsing, subjects/categories, product listings/details and public pages.

**Phase 3 – Search:** backend search, suggestions, filters, typo tolerance, synonyms, pagination and empty/error states.

**Phase 4 – Authentication/profile:** email OTP, secure sessions, optional progressive profile cards, completion indicator and account area.

**Phase 5 – Cart/checkout:** cart, address form, mandatory guardian details, WhatsApp OTP, final summary, COD order creation and confirmation.

**Phase 6 – Privacy/security/QA:** legal-reviewed consent workflow, RLS/security tests, mobile/accessibility, search/performance and end-to-end checkout tests.

Do not treat legal review as optional post-launch work. Do not process children’s personal data in production until the required compliance design has been reviewed and implemented.

## 21. Acceptance criteria

The customer-facing release is ready for business review when:
1. Responsive on mobile, tablet and desktop.
2. Approved logo used without modification.
3. Public pages and browsing work without login.
4. Users can browse academic groups, classes and categories.
5. Search uses backend catalogue data and agreed filters.
6. Products support multiple classes and boards.
7. Login is passwordless email OTP only.
8. Profile onboarding is card-based, optional and skippable.
9. Profile percentage does not gate features.
10. Explicit searches are not restricted by profile class.
11. Checkout is COD only.
12. Guardian name and WhatsApp number are mandatory.
13. WhatsApp OTP is validated server-side before COD order confirmation.
14. WhatsApp OTP is not represented as proof of guardianship or legal consent.
15. Private profile/address/order data is not exposed to other users.
16. RLS and server-side authorisation are tested.
17. Privacy and child-safety requirements are legally reviewed before launch.
18. No fabricated inventory, testimonials, ratings, legal claims or delivery promises.
19. Admin and Super Admin dashboards remain out of scope. 20. Product ratings and reviews are restricted to eligible verified purchasers with delivered orders. 21. Review eligibility is validated server-side and cancelled, failed, undelivered and returned orders are excluded. 22. Product pages show genuine rating summaries and published reviews without fabricated data. 23. Review display protects children's personal information. 24. Signed-in customers can add/remove products from a wishlist. 25. Product pages can display supported external YouTube, Instagram and Facebook links with safe embed or fallback behaviour; videos are not rehosted. 26. Customers can share product links. 27. Related/featured/popular product labels are based on real catalogue or engagement data. 28. Product Q&A, if enabled, is moderated and privacy-safe.

## 22. Open decisions

1. Can guests view complete product details, or only previews?
2. Exact optional profile card questions and wording.
3. Whether to show annual class-update reminders.
4. Homepage prominence of a cross-class Exhibition & Competition section.
5. Final subject/category mapping per class and board, validated against curriculum.
6. COD serviceability, shipping charges and delivery rules.
7. WhatsApp Business provider, templates, pricing and operational setup.
8. Legally reviewed parental consent verification method.
9. Final privacy policy, grievance contact and retention periods.
10. Frontend framework/hosting if not already established in the repository.

## 23. Instructions to Antigravity

1. Read this PRD completely before implementation.
2. Inspect the existing repository, dependencies and current implementation first.
3. Preserve the existing stack and working functionality unless a change is justified and approved.
4. This is a customer-facing PRD; do not invent or implement detailed Admin/Super Admin dashboards.
5. Build reusable, maintainable components.
6. Implement mobile-first responsive layouts.
7. Use the approved ProjectBee logo; never redesign it.
8. Clearly separate development demo data from production inventory.
9. Never hardcode secrets, OTPs, privileged keys or sensitive business rules in frontend code.
10. Do not simulate successful authentication, WhatsApp verification or order placement in production. If integrations are unavailable, label the flow as a development mock and document requirements.
11. Do not invent legal copy or claim compliance. Flag legal review requirements.
12. Keep open decisions visible rather than silently making irreversible assumptions.
13. Before major implementation stages, present the proposed structure and key decisions for review.
14. At each phase end, report completed work, files changed, tests, known gaps and next steps.

**End of PRD – Version 1.0**
