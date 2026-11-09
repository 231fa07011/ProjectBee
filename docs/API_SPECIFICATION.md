# ProjectBee – API Specification
## Unified REST & Server Action API Contract

**Version:** 1.0  
**Status:** Canonical API specification for implementation  
**Product:** ProjectBee — *School Projects Made Easy!*  
**Base Route:** `/api/v1`  
**Data Format:** `application/json` (UTF-8)  
**Security Standard:** Bearer Token / Supabase Auth Session Cookie, Row Level Security, CSRF protection  
**Monetary Standard:** Integer in Paise (1 INR = 100 paise)  

---

## 1. Global Conventions & Standards

### 1.1 Standard Request Headers
```http
Content-Type: application/json
Accept: application/json
Authorization: Bearer <supabase_access_token>
X-Request-Id: <uuid_v4>
Idempotency-Key: <unique_client_generated_key> (Required for POST /checkout and POST /orders)
```

### 1.2 Standard Success Response Format
```json
{
  "success": true,
  "data": {},
  "meta": {
    "requestId": "a9b1c2d3-...",
    "timestamp": "2026-11-09T08:00:00Z",
    "pagination": {
      "page": 1,
      "limit": 20,
      "totalRecords": 85,
      "totalPages": 5,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  }
}
```

### 1.3 Standard Error Response Format
All errors return uniform status codes with actionable, privacy-conscious error details.
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Invalid input provided.",
    "details": [
      {
        "field": "parent_whatsapp",
        "issue": "Must be a valid 10-digit Indian mobile number."
      }
    ]
  },
  "meta": {
    "requestId": "a9b1c2d3-...",
    "timestamp": "2026-11-09T08:00:00Z"
  }
}
```

### Common HTTP Status Codes
- `200 OK`: Request succeeded.
- `201 Created`: Resource created.
- `400 Bad Request`: Malformed payload or validation error.
- `401 Unauthorized`: Authentication missing or expired token.
- `403 Forbidden`: Authenticated, but insufficient role permissions.
- `404 Not Found`: Resource does not exist.
- `409 Conflict`: Conflict (e.g. duplicate review, stock exhaustion).
- `422 Unprocessable Entity`: Business rule failure (e.g. COD not allowed for pincode).
- `429 Too Many Requests`: Rate limit exceeded (OTP, search bursts).
- `500 Internal Server Error`: Server error (internal trace logged securely, not exposed).

---

## 2. Authentication & Identity (`/api/v1/auth`)

### 2.1 Send Email OTP
`POST /api/v1/auth/otp/send`  
Sends a 6-digit one-time passcode to the user's email address. Passwordless authentication for all roles.

**Request:**
```json
{
  "email": "parent@example.com",
  "intent": "customer_login" // "customer_login" | "admin_login"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "message": "OTP has been dispatched to your email.",
    "cooldownSeconds": 60,
    "expiresInSeconds": 600
  }
}
```

---

### 2.2 Verify Email OTP
`POST /api/v1/auth/otp/verify`  
Validates the email OTP and establishes an authenticated Supabase session.

**Request:**
```json
{
  "email": "parent@example.com",
  "otp": "482910"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOi...",
    "refreshToken": "v1.MrQ...",
    "expiresAt": 1793988000,
    "user": {
      "id": "e3b0c442-...",
      "email": "parent@example.com",
      "userType": "customer",
      "displayName": "Priya Sharma",
      "accountStatus": "active"
    }
  }
}
```

---

### 2.3 Get Current User Session & Effective Permissions
`GET /api/v1/auth/me`  
Returns authenticated user identity and resolved RBAC permissions.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "e3b0c442-...",
      "email": "admin@projectbee.in",
      "userType": "admin",
      "displayName": "Kavitha R.",
      "isSuperAdmin": false,
      "roles": ["Operations Manager"],
      "permissions": [
        "products.view",
        "products.update",
        "orders.view",
        "orders.update_status",
        "inventory.adjust",
        "reviews.moderate"
      ]
    }
  }
}
```

---

### 2.4 Logout
`POST /api/v1/auth/logout`  
Revokes the current session token.

---

## 3. Public Storefront Catalogue (`/api/v1/catalog`)

### 3.1 Get Academic Taxonomy Lookups
`GET /api/v1/catalog/taxonomy`  
Returns all active boards, classes, academic groups, subjects, and categories.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "boards": [
      { "code": "CBSE", "name": "Central Board of Secondary Education" },
      { "code": "ICSE", "name": "Indian Certificate of Secondary Education" }
    ],
    "classes": [
      { "grade": 1, "name": "Class 1", "group": "early_learners" },
      { "grade": 6, "name": "Class 6", "group": "middle_school" },
      { "grade": 10, "name": "Class 10", "group": "secondary" }
    ],
    "subjects": [
      { "id": "s-phys", "slug": "physics", "name": "Physics" },
      { "id": "s-bio", "slug": "biology", "name": "Biology" },
      { "id": "s-chem", "slug": "chemistry", "name": "Chemistry" },
      { "id": "s-evs", "slug": "environmental-science", "name": "Environmental Science" }
    ],
    "formats": [
      { "id": "working_model", "name": "Working Model" },
      { "id": "diy_kit", "name": "DIY Assembly Kit" },
      { "id": "science_fair_display", "name": "Science Fair Display" }
    ]
  }
}
```

---

### 3.2 List & Search Products
`GET /api/v1/catalog/products`  
Full-text search with trigram typo-tolerance and multidisciplinary academic filters.

**Query Parameters:**
- `q`: Search keyword (e.g. `hydraulics`, `solr sysstem`)
- `board`: `CBSE` | `ICSE`
- `grade`: `1` to `12`
- `academicGroup`: `early_learners` | `primary` | `middle_school` | `secondary` | `senior_secondary`
- `subject`: Subject slug
- `format`: Format ID
- `difficulty`: `beginner` | `intermediate` | `advanced`
- `minPrice`: in paise
- `maxPrice`: in paise
- `sort`: `relevance` | `price_asc` | `price_desc` | `rating_desc` | `newest`
- `page`: default 1
- `limit`: default 20 (max 50)

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "products": [
      {
        "id": "p-101",
        "slug": "working-hydraulic-lift-model",
        "sku": "PB-MOD-HYD-01",
        "title": "Working Hydraulic Lift Model",
        "shortDescription": "Pre-assembled dual-syringe hydraulic platform demonstrating Pascal's Law.",
        "mrpPaise": 89900,
        "sellingPricePaise": 64900,
        "format": "working_model",
        "difficulty": "beginner",
        "ratingAvg": 4.8,
        "ratingCount": 24,
        "primaryImage": "https://cdn.projectbee.in/products/hydraulic-lift-1.webp",
        "inStock": true,
        "applicableClasses": [6, 7, 8, 9],
        "applicableBoards": ["CBSE", "ICSE"]
      }
    ]
  },
  "meta": { "pagination": { "page": 1, "limit": 20, "totalRecords": 1, "totalPages": 1 } }
}
```

---

### 3.3 Get Product Detail
`GET /api/v1/catalog/products/:slug`  
Full product specifications, package contents, photo gallery, demonstration media links, and verified rating summary.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "p-101",
    "slug": "working-hydraulic-lift-model",
    "sku": "PB-MOD-HYD-01",
    "title": "Working Hydraulic Lift Model",
    "shortDescription": "Pre-assembled dual-syringe hydraulic platform demonstrating Pascal's Law.",
    "fullDescription": "A robust wooden-base hydraulic model showing fluid power transmission...",
    "packageContents": "- Pre-assembled hydraulic lift\n- 2x medical-grade fluid syringes\n- Flexible silicon tubing\n- Printed Concept & Viva Question Guide",
    "preparationGuide": "Fill syringe with colored water (optional food color included) to visualize pressure flow.",
    "safetyNotes": "Non-toxic materials. No sharp pins or hazardous chemicals.",
    "dimensionsCm": "25 x 15 x 20",
    "weightGrams": 450,
    "mrpPaise": 89900,
    "sellingPricePaise": 64900,
    "inStock": true,
    "stockAvailable": 18,
    "ratingSummary": {
      "average": 4.8,
      "totalReviews": 24,
      "distribution": { "5": 20, "4": 3, "3": 1, "2": 0, "1": 0 }
    },
    "images": [
      { "id": "img-1", "url": "https://cdn.projectbee.in/products/hydraulic-1.webp", "alt": "Front view", "isPrimary": true },
      { "id": "img-2", "url": "https://cdn.projectbee.in/products/hydraulic-2.webp", "alt": "Demonstration in action", "isPrimary": false }
    ],
    "demonstrationVideos": [
      {
        "id": "v-1",
        "platform": "youtube_shorts",
        "videoUrl": "https://youtube.com/shorts/example123",
        "title": "30-Second Working Lift Demonstration"
      }
    ],
    "relatedProducts": [
      { "slug": "pneumatic-arm-project", "title": "Pneumatic Robotic Crane", "sellingPricePaise": 79900 }
    ]
  }
}
```

---

### 3.4 Pincode Delivery & COD Serviceability Check
`GET /api/v1/catalog/pincodes/:pincode`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "pincode": "560034",
    "city": "Bengaluru",
    "state": "Karnataka",
    "isServiceable": true,
    "isCodAllowed": true,
    "estimatedDays": { "min": 2, "max": 4 }
  }
}
```

---

## 4. Cart & Cash on Delivery Checkout (`/api/v1/cart`, `/api/v1/checkout`)

### 4.1 Get Cart
`GET /api/v1/cart`  
Fetches the active cart (guest token or customer session). Prices and stock availability are freshly validated.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "cartId": "c-901",
    "items": [
      {
        "productId": "p-101",
        "title": "Working Hydraulic Lift Model",
        "quantity": 1,
        "unitPricePaise": 64900,
        "totalPaise": 64900,
        "inStock": true
      }
    ],
    "summary": {
      "subtotalPaise": 64900,
      "discountPaise": 0,
      "shippingFeePaise": 7000,
      "totalPayablePaise": 71900
    }
  }
}
```

---

### 4.2 Update Cart Item
`POST /api/v1/cart/items`

**Request:**
```json
{
  "productId": "p-101",
  "quantity": 2
}
```

---

### 4.3 Validate Checkout Details
`POST /api/v1/checkout/validate`  
Pre-validates delivery address, stock reservation availability, and coupon validity.

**Request:**
```json
{
  "parentName": "Rajesh Kumar",
  "parentPhone": "9876543210",
  "parentWhatsapp": "9876543210",
  "shippingAddress": {
    "addressLine1": "No. 42, 3rd Cross, Koramangala 4th Block",
    "city": "Bengaluru",
    "state": "Karnataka",
    "pincode": "560034"
  },
  "couponCode": "WELCOME10"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "isValid": true,
    "finalSummary": {
      "subtotalPaise": 64900,
      "discountPaise": 6490,
      "shippingFeePaise": 7000,
      "totalPayablePaise": 65410
    }
  }
}
```

---

### 4.4 Send COD WhatsApp OTP
`POST /api/v1/checkout/cod/send-otp`  
Initiates WhatsApp OTP verification for the parent/guardian phone number before COD order placement.

**Request:**
```json
{
  "parentWhatsapp": "9876543210"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "verificationToken": "vt_98a7b6c5d4...",
    "cooldownSeconds": 60,
    "message": "Verification passcode sent via WhatsApp."
  }
}
```

---

### 4.5 Verify OTP & Place COD Order (Atomic Transaction)
`POST /api/v1/checkout/cod/verify-and-order`  
Atomic execution: Verifies WhatsApp OTP hash, reserves inventory atomically, creates immutable order snapshots, and sets status to `confirmed`.

**Headers:**
`Idempotency-Key: idemp_order_12345678`

**Request:**
```json
{
  "verificationToken": "vt_98a7b6c5d4...",
  "otp": "739102",
  "parentName": "Rajesh Kumar",
  "parentPhone": "9876543210",
  "parentWhatsapp": "9876543210",
  "studentName": "Aarav Kumar",
  "studentClass": 7,
  "shippingAddress": {
    "recipientName": "Rajesh Kumar",
    "phone": "9876543210",
    "addressLine1": "No. 42, 3rd Cross, Koramangala 4th Block",
    "city": "Bengaluru",
    "state": "Karnataka",
    "pincode": "560034"
  },
  "couponCode": "WELCOME10"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "orderNumber": "PB-202611-0042",
    "status": "confirmed",
    "paymentMethod": "cod",
    "totalPayablePaise": 65410,
    "createdAt": "2026-11-09T08:15:30Z",
    "estimatedDelivery": "2026-11-12"
  }
}
```

---

## 5. Customer Account & Order History (`/api/v1/customer`)

### 5.1 Get Customer Orders
`GET /api/v1/customer/orders`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "ord-42",
        "orderNumber": "PB-202611-0042",
        "createdAt": "2026-11-09T08:15:30Z",
        "status": "delivered",
        "totalPayablePaise": 65410,
        "itemCount": 1,
        "items": [
          {
            "productId": "p-101",
            "title": "Working Hydraulic Lift Model",
            "quantity": 1,
            "unitPricePaise": 64900,
            "canReview": true
          }
        ]
      }
    ]
  }
}
```

---

### 5.2 Cancel Order (Prior to Dispatch)
`POST /api/v1/customer/orders/:id/cancel`

**Request:**
```json
{
  "reasonCode": "changed_mind",
  "detailedReason": "School exhibition topic changed to solar energy."
}
```

---

### 5.3 Wishlist Operations
- `GET /api/v1/customer/wishlist`: Retrieve saved products.
- `POST /api/v1/customer/wishlist/:productId`: Add or remove a product from the wishlist.

---

## 6. Verified Product Reviews (`/api/v1/reviews`)

### 6.1 Check Customer Review Eligibility
`GET /api/v1/reviews/eligibility/:productId`  
Validates server-side if customer has a `delivered` order containing this product that has not already been reviewed.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "isEligible": true,
    "qualifyingOrderId": "ord-42",
    "qualifyingOrderItemId": "item-101"
  }
}
```

---

### 6.2 Submit Verified Purchase Review
`POST /api/v1/reviews`  
Protected server-side validation: Fails with `403 Forbidden` if user is not a verified delivered purchaser.

**Request:**
```json
{
  "productId": "p-101",
  "orderId": "ord-42",
  "rating": 5,
  "title": "Excellent model! My son secured 1st prize in science fair",
  "reviewText": "The hydraulic lift was completely sturdy and pre-assembled. The included concept card helped him explain Pascal's law clearly during viva questions.",
  "reviewerDisplayName": "Rajesh K., Class 7 Parent",
  "imageStorageKeys": [
    "reviews/p-101/ord-42-img1.webp"
  ]
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "reviewId": "rev-501",
    "status": "approved",
    "message": "Review submitted successfully."
  }
}
```

---

### 6.3 Vote Review Helpful
`POST /api/v1/reviews/:id/vote-helpful`  
Increments helpful counter (unique constraint per customer profile).

---

## 7. Admin Operations API (`/api/v1/admin`)

*All routes require authenticated session with corresponding permission.*

### 7.1 Catalogue Management
- `POST /api/v1/admin/products`: Create new draft product (`products.create`).
- `PUT /api/v1/admin/products/:id`: Update specifications, pricing, taxonomy (`products.update`).
- `POST /api/v1/admin/products/:id/publish`: Transition from `draft` to `published` (`products.publish`).
- `DELETE /api/v1/admin/products/:id`: Archive product (`products.delete`).

---

### 7.2 Order Fulfillment Operations
- `GET /api/v1/admin/orders`: List orders with filtering by status, date range, search query (`orders.view`).
- `GET /api/v1/admin/orders/:id`: Full order inspection (`orders.view`).
- `PUT /api/v1/admin/orders/:id/status`: Advance fulfillment status (`orders.update_status`).
  ```json
  {
    "newStatus": "shipped",
    "notes": "Packed in reinforced corrugated box with bubble cushioning."
  }
  ```
- `POST /api/v1/admin/orders/:id/shipment`: Create shipment via courier API adapter (`shipping.manage`).
  ```json
  {
    "courierName": "Shiprocket",
    "pickupLocation": "Bengaluru Warehouse",
    "packageWeightGrams": 450,
    "dimensions": { "length": 25, "width": 15, "height": 20 }
  }
  ```

---

### 7.3 Inventory Stock Adjustments
`POST /api/v1/admin/inventory/adjust` (`inventory.adjust`)  
Creates an atomic stock movement entry with mandatory reason and operator logging.

**Request:**
```json
{
  "productId": "p-101",
  "newStock": 25,
  "reason": "Physical stock intake from workshop batch #24"
}
```

---

### 7.4 Review Moderation
- `GET /api/v1/admin/reviews/pending`: List reviews awaiting image moderation (`reviews.moderate`).
- `PUT /api/v1/admin/reviews/:id/moderation`: Approve or reject (`reviews.moderate`).
  ```json
  {
    "action": "approve", // "approve" | "reject"
    "moderationNotes": "Child faces redacted / verified no identifying school badges shown."
  }
  ```

---

## 8. Super Admin Central Control API (`/api/v1/super-admin`)

*Strictly accessible ONLY by the designated singleton Super Admin identity (`is_super_admin(auth.uid()) = TRUE`).*

### 8.1 Executive Business Analytics
`GET /api/v1/super-admin/analytics/overview`  
Aggregated performance indicators.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "totalRevenuePaise": 48500000,
    "totalOrders": 750,
    "averageOrderValuePaise": 64667,
    "codCollectionRate": 0.94,
    "cancellationRate": 0.03,
    "topClasses": [
      { "grade": 7, "orderCount": 180 },
      { "grade": 8, "orderCount": 165 },
      { "grade": 10, "orderCount": 140 }
    ],
    "topSubjects": ["Physics", "Biology", "Robotics"]
  }
}
```

---

### 8.2 Admin Account Provisioning & Invitations
- `GET /api/v1/super-admin/staff`: List all admin accounts, assigned roles, and override status.
- `POST /api/v1/super-admin/staff/invite`: Send single-use time-bound invitation email.
  ```json
  {
    "email": "operations@projectbee.in",
    "name": "Sunil Nair",
    "initialRoleId": "role-ops-manager"
  }
  ```
- `PUT /api/v1/super-admin/staff/:adminId/overrides`: Set individual granular allow/deny permissions.
  ```json
  {
    "permissionOverrides": [
      { "permissionId": "reports.export", "isAllowed": true },
      { "permissionId": "products.delete", "isAllowed": false }
    ]
  }
  ```
- `PUT /api/v1/super-admin/staff/:adminId/status`: Suspend or deactivate an admin account.

---

### 8.3 Global Platform Settings & Feature Toggles
- `GET /api/v1/super-admin/settings`: Retrieve global configuration dictionary.
- `PUT /api/v1/super-admin/settings`: Update settings (e.g. COD max order limit, support phone, free shipping threshold).
- `GET /api/v1/super-admin/feature-flags`: List feature flags.
- `PUT /api/v1/super-admin/feature-flags/:key`: Toggle feature state (`is_enabled: true/false`).

---

### 8.4 Security & Audit Trail Inspection
`GET /api/v1/super-admin/audit-logs`  
Protected, read-only search across the immutable audit ledger.

**Query Parameters:**
- `actorId`: UUID
- `module`: `catalog` | `orders` | `rbac` | `settings` | `inventory`
- `startDate`: ISO8601
- `endDate`: ISO8601
- `page`: 1
- `limit`: 50

---

### 8.5 System Health & Backup Monitoring
`GET /api/v1/super-admin/system/health`  
Checks active ping status with external integrations.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "database": { "status": "healthy", "latencyMs": 14 },
    "authProvider": { "status": "healthy" },
    "whatsappGateway": { "status": "connected", "provider": "Msg91/Twilio", "quotaRemaining": 8420 },
    "emailGateway": { "status": "connected", "provider": "Resend/SendGrid" },
    "shippingApi": { "status": "connected", "provider": "Shiprocket" },
    "backup": {
      "lastBackupTime": "2026-11-09T03:00:00Z",
      "status": "completed",
      "storageProvider": "Supabase Automated WAL / PITR"
    }
  }
}
```

