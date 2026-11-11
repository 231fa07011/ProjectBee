# ProjectBee – Technical Gap Analysis

**Document:** `TECHNICAL_GAP_ANALYSIS.md`  
**Version:** 1.0  
**Author:** Lead Software Architect (Antigravity)  
**Date:** November 2026  
**Status:** Complete Analysis & Mitigations Documented  

---

## 1. Architectural & Specification Contradictions Analyzed

During the technical review of `PRD.md`, `ADMIN_PRD.md`, `SUPER_ADMIN_PRD.md`, and `TECHNICAL_ARCHITECTURE.md`, four key areas of potential divergence were identified and resolved:

### 1.1 Payment Architecture: COD-Only vs. Multi-Gateway Online Payments
- **Potential Conflict:** `TECHNICAL_ARCHITECTURE.md` references Razorpay / Cashfree webhook listeners, while `PRD.md` explicitly specifies Cash on Delivery (COD) as the sole payment method for V1 launch to maximize parent trust across Tier-2/Tier-3 schools.
- **Resolution:**
  - V1 exclusively activates the Cash on Delivery (COD) checkout pipeline with zero upfront payment friction.
  - Payment code contracts in `src/types/index.ts` and `DATABASE_SCHEMA.md` retain the polymorphic `payment_method` enum (`['cod', 'razorpay', 'upi']`) and table schema (`payments`), allowing Razorpay / UPI activation in V2 via a single feature flag toggle (`featureFlags.online_payments`) without database schema migrations.

### 1.2 Administrative Role Hierarchy: Approvals vs. Autonomous Execution
- **Potential Conflict:** Some enterprise PRD drafts reference dual-control "maker-checker" approval workflows for price changes, whereas `ADMIN_PRD.md` and `SUPER_ADMIN_PRD.md` state that operations managers operate according to assigned permissions without a bottleneck approval queue.
- **Resolution:**
  - Standard Admin roles (Operations Manager, Support Rep) execute inventory adjustments and order status progressions directly.
  - Accountability is guaranteed by an immutable audit trail (`audit_logs` table) that captures every actor ID, timestamp, prior state, new state, and mandatory user-supplied reason string.
  - Destructive actions (user role changes, database exports, hard deletions) remain strictly restricted to the single Super Admin account via PostgreSQL Row Level Security (RLS).

### 1.3 Communication Architecture: Automated Bot vs. Real-Time WhatsApp Direct Chat
- **Potential Conflict:** Automated Meta WhatsApp Cloud API requires Facebook Business Verification (which can take 2–4 weeks), whereas parents and students preparing for science fairs need immediate real-time communication.
- **Resolution:**
  - Dual-mode architecture implemented in `src/lib/config.ts`:
    1. **Primary Immediate Mode:** Direct `wa.me/<phone>?text=...` deep-linking. Works immediately on day 1 with zero Meta approval overhead, routing customer inquiries directly to the store owner's WhatsApp application or WhatsApp Web.
    2. **Secondary Gateway Mode:** Pluggable adapter interfaces for Twilio / Msg91 / Meta Cloud API when volume scales beyond 500 messages per day.

---

## 2. Identified Gaps and Implemented Mitigations

| Gap Identified | Risk Level | Mitigation Implemented |
| :--- | :---: | :--- |
| **Catalog Grade Skew:** Initial catalog had dense coverage for Classes 6–10, but almost zero models for Classes 1–3 and Classes 11–12. | **HIGH** | Expanded catalog to **59 verified models** with dedicated kits for primary science (Abacus, Shadow Theatre, Bristle-Bot) and senior secondary (Conic Sections 3D, Reflex Arc Circuit). |
| **Static Navigation Perception:** Clicking Grade buttons felt non-responsive if products did not change immediately on page. | **MEDIUM** | Built an **Interactive Grade Selector Hub** on the homepage with dynamic state highlighting, live project counts, and instant preview shelves. |
| **COD Fraud & Ghost Orders:** Fraudulent Cash on Delivery bookings leading to high Return-to-Origin (RTO) courier costs. | **HIGH** | Implemented a mandatory **WhatsApp / SMS OTP Verification Modal** before order creation. Unverified phone numbers cannot generate an AWB. |
| **Child Data Protection (DPDP Act):** E-commerce transactions involving school minors could inadvertently collect minor PII. | **CRITICAL** | Strict parent/guardian consent gate at checkout. Minor information is strictly limited to non-PII academic context (Class and Curriculum Board). |
| **Physical Stock Overselling:** Simultaneous checkouts during peak science exhibition season causing negative stock counts. | **HIGH** | Implemented PostgreSQL atomic stored procedure `reserve_stock_for_order` using row-level pessimistic locking (`SELECT FOR UPDATE`). |

---

## 3. Logistics & Carrier Integration Assessment

- **Courier Aggregator:** Shiprocket API v2.
- **Failover Strategy:** If Shiprocket API experiences downtime during checkout, the pincode lookup falls back to an offline local database of 19,000+ Indian postal circles with estimated 3–5 day delivery SLA calculation.
- **Tracking Experience:** Visual milestone timeline on `/orders/[orderNumber]` showing *Order Confirmed → Packed → Dispatched → In Transit → Out for Delivery → Delivered*.

---

## 4. Conclusion

All identified gaps have been addressed in code. The architectural foundation is completely coherent with the business specifications and ready for operational use.

