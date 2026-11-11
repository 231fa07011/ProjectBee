# ProjectBee – Environment Setup & Configuration Runbook

**Document:** `ENVIRONMENT_SETUP.md`  
**Version:** 1.0  
**Target Environment:** Local Development, Staging & Production  
**Updated:** November 2026  

---

## 1. Prerequisites

Ensure your development machine has the following tools installed:

- **Node.js:** v18.17.0 or newer (v20+ / v24 LTS recommended)
- **Package Manager:** npm v9+ (or pnpm / yarn)
- **Git:** v2.30+
- **Supabase CLI** (optional for local database containerization): `npm install -g supabase`

---

## 2. Environment Variables Specification

Create `.env.local` in the project root by copying the template below:

```bash
# ==============================================================================
# PROJECTBEE — CORE CONFIGURATION
# ==============================================================================
NEXT_PUBLIC_STORE_NAME="ProjectBee"
NEXT_PUBLIC_STORE_CITY="Bengaluru"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# ==============================================================================
# REAL-TIME WHATSAPP INTEGRATION
# ==============================================================================
# Enter your 10 or 12-digit WhatsApp phone number with country code.
# E.g. 919876543210 for India (+91 98765-43210)
NEXT_PUBLIC_WHATSAPP_NUMBER="919845012345"

# ==============================================================================
# SUPABASE POSTGRESQL & AUTH
# ==============================================================================
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# ==============================================================================
# SHIPROCKET LOGISTICS (CARRIER FULFILLMENT)
# ==============================================================================
SHIPROCKET_EMAIL="logistics@projectbee.in"
SHIPROCKET_PASSWORD="your-shiprocket-password"
SHIPROCKET_API_URL="https://apiv2.shiprocket.in/v1/external"

# ==============================================================================
# SMS & WHATSAPP OTP GATEWAY (PROD COD VERIFICATION)
# ==============================================================================
MSG91_AUTH_KEY="your-msg91-auth-key"
MSG91_OTP_TEMPLATE_ID="64f9b8c9..."
# Set to 'true' in development to mock OTP as 1234 without consuming SMS credits
MOCK_OTP_MODE="true"
```

---

## 3. Database Initialization (Supabase PostgreSQL)

1. Log in to [Supabase Console](https://supabase.com) and create a new project named `projectbee-prod`.
2. Navigate to **SQL Editor** in the Supabase Dashboard.
3. Open `supabase/migrations/00001_initial_schema.sql` and execute the script. This creates:
   - All 14 normalized tables (`products`, `categories`, `orders`, `order_items`, `inventory`, `audit_logs`, `reviews`, etc.)
   - Row Level Security (RLS) policies for customers, admins, and the super admin.
   - Atomic database triggers (`update_updated_at_column`) and stored procedures (`reserve_stock_for_order`).
4. Optionally, run `supabase/seed.sql` to populate sample orders, admin users, and initial reviews.

---

## 4. Local Development Runbook

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Unit Tests
Validate monetary paise math, pincode regex, and stock reservations:
```bash
node --test tests/unit.test.mjs
```
*Expected: 7 tests passed (0 failures).*

### Step 3: Start Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 5. Verifying Real-Time WhatsApp Integration

1. Visit [http://localhost:3000](http://localhost:3000).
2. Click the floating green **"Chat on WhatsApp"** button in the lower-right corner.
3. Click the **⚙️ Settings** icon in the popup header.
4. Enter your personal phone number (e.g. `919876543210`) and click **Save & Connect WhatsApp**.
5. Click **"Test Ping"**: WhatsApp Web or the WhatsApp desktop application will launch with a pre-filled test message.
6. Verify that visiting any product page (e.g. `/products/working-hydraulic-lift-model`) and clicking **"Inquire & Order via WhatsApp"** populates your phone number with the product title and SKU.

---

## 6. Production Deployment (Vercel)

1. Push your repository to GitHub:
   ```bash
   git push origin master
   ```
2. Import repository in [Vercel](https://vercel.com).
3. Under **Project Settings > Environment Variables**, add the production keys defined in Section 2.
4. Click **Deploy**. Vercel will automatically build the Next.js App Router application and propagate it globally across edge nodes.
5. In Cloudflare or your DNS registrar, add CNAME records pointing `projectbee.in` to `cname.vercel-dns.com`.

