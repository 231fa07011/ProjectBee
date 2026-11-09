# ProjectBee – Super Admin Dashboard
## Product Requirements Document (SUPER_ADMIN_PRD.md)

**Version:** 1.0  
**Status:** Initial requirements baseline  
**Product:** ProjectBee  
**Tagline:** School Projects Made Easy!  
**Platform:** Responsive web application  
**Primary market:** India  
**Initial academic boards:** CBSE and ICSE  
**Currency:** INR (₹)  
**Primary development tool:** Antigravity

---

## 1. Purpose

This document defines the requirements for the ProjectBee Super Admin experience. The Super Admin dashboard is the central control centre for the ProjectBee business and platform.

The Super Admin has complete authority over the platform, including business operations, catalogue, orders, customers, inventory, marketing, website content, Admin accounts, permissions, global settings, integrations, security, audit records, monitoring and backup recovery.

This PRD complements:

- `PRD.md` – Customer-facing ProjectBee website.
- `ADMIN_PRD.md` – Admin dashboard and daily operational workflows.

All three documents must be implemented as one coherent application with a shared data model, authentication foundation, design system and authorization layer.

## 2. Product principles

1. **One Super Admin:** ProjectBee supports exactly one designated Super Admin account in the initial system.
2. **Complete authority:** Super Admin can access and manage every business and platform module.
3. **Unified dashboard:** Super Admin and Admin users use the same dashboard application shell. Navigation and actions adapt to the authenticated user's permissions.
4. **Least privilege for Admins:** Admin access is denied by default and granted explicitly through roles and individual permissions.
5. **No approval workflow:** Admins can perform actions permitted by their assigned permissions without waiting for Super Admin approval.
6. **Comprehensive auditability:** Important Admin and Super Admin actions are recorded in protected audit logs.
7. **Configuration-driven operation:** Global settings and feature toggles should be changeable without code changes or redeployment wherever technically feasible.
8. **Secure by design:** Hiding a menu or button is not authorization. Every protected operation must be validated server-side.
9. **Operational clarity:** Business performance and technical health must be visible together.
10. **Future-ready, not overengineered:** Build modular foundations that support growth without introducing unnecessary complexity in the initial release.

## 3. Scope

### 3.1 In scope

- Super Admin authentication using registered email OTP only.
- Single Super Admin identity and account bootstrap.
- Unified role-aware dashboard.
- Full business and platform access for Super Admin.
- Admin account creation and lifecycle management.
- Predefined roles and custom roles.
- Granular module/action permissions.
- Business and system overview dashboard.
- Complete access to catalogue, orders, customers, inventory, reviews, website content and marketing.
- Global settings.
- Basic feature toggles.
- Comprehensive audit logs.
- Detailed system monitoring.
- Dashboard and email alerts.
- Backup status monitoring and controlled manual recovery initiation.
- Reports and exports.
- Security and session controls.
- Responsive interface and accessibility.

### 3.2 Out of scope for initial release

- Multiple Super Admin accounts.
- Admin-to-Super-Admin promotion.
- Admin approval queues for routine or major actions.
- Advanced anomaly detection or predictive monitoring.
- Complex feature rollout by user segment or scheduled feature activation.
- A custom backup storage engine.
- Building a replacement for Supabase, hosting-provider or third-party provider consoles.
- Multiple separate dashboard applications for Admin and Super Admin.
- Native mobile apps; the dashboard is a responsive web application.

## 4. User types and authority model

### 4.1 Super Admin

There is exactly one designated Super Admin account. It has complete access to all ProjectBee modules and all permitted operations.

Super Admin can:

- Create, edit, suspend, deactivate and reactivate Admin accounts.
- Assign predefined roles and custom permissions.
- Override Admin permissions.
- Access all products, categories, inventory, orders, customers, reviews, promotions, content, reports and settings.
- Perform any business operation available to an Admin.
- Access system monitoring, audit logs and backup/recovery controls.
- Configure global settings and feature toggles.
- Review and override Admin actions where business rules permit.

### 4.2 Admin

Admin accounts are created only by Super Admin. Admin users can access only the modules and operations granted to them.

Admins:

- Cannot create or promote a Super Admin.
- Cannot alter their own role or permissions.
- Cannot access Super Admin-only security, integration-secret or recovery controls unless a specifically safe permission is later defined.
- Can perform permitted actions without approval.
- Have their important actions recorded in audit logs.

### 4.3 Single Super Admin bootstrap

The first Super Admin must be provisioned through a secure deployment/bootstrap process, not public registration.

Requirements:

- No public Super Admin registration page or endpoint.
- Super Admin identity must be stored and enforced server-side.
- The Super Admin email must be configurable securely during initial deployment.
- Changing the Super Admin email must require a secure, documented administrative procedure and must be audited.
- Application logic must prevent creation of a second Super Admin.
- Database constraints and server-side authorization must enforce the single-account rule; do not rely only on UI restrictions.
- If the Super Admin account becomes inaccessible, account recovery must follow a documented infrastructure-owner recovery procedure. Do not create a hidden second Super Admin account.

## 5. Authentication and session security

### 5.1 Login method

**Decision: Email OTP only.** No permanent password and no authenticator-app requirement for the initial release.

Login flow:

1. User opens the dashboard login page.
2. User enters an email address.
3. Server checks whether the email belongs to an active Super Admin or Admin account.
4. A one-time code is sent to the registered email address.
5. User enters the OTP.
6. Server validates the OTP, expiry, attempt count and account status.
7. A secure authenticated session is created.
8. Dashboard navigation and permissions are loaded from trusted server-side data.

### 5.2 Security requirements

- OTP must be cryptographically unpredictable.
- OTP must expire after a configurable, short validity period.
- Enforce resend cooldowns, per-account and per-IP rate limits, and maximum verification attempts.
- Do not reveal whether an arbitrary email address has an account in public-facing error messages.
- Store OTPs securely; do not store plaintext OTP values.
- Invalidate an OTP after successful use.
- Protect OTP requests and verification against brute-force and replay attempts.
- Use secure, HTTP-only, same-site cookies for browser sessions where supported.
- Protect state-changing requests against CSRF where applicable.
- Rotate sessions after authentication and privilege changes.
- Support logout and server-side session revocation.
- Enforce session expiry and inactivity timeout through configurable settings.
- Record successful and failed login attempts.
- Do not expose session tokens, OTPs or secrets in logs.
- Use HTTPS in production.

### 5.3 Account status

Admin account statuses should include:

- Invitation Pending
- Active
- Suspended
- Deactivated
- Invitation Expired

Suspended or deactivated users must be denied new authentication and have active sessions revoked.

## 6. Unified dashboard application

### 6.1 One dashboard shell

Build one dashboard application and navigation framework for both Super Admin and Admin users.

- Super Admin sees every permitted module and action.
- Admin users see only modules and actions allowed by their effective permissions.
- The same page components should be reused wherever practical.
- The UI must not imply that hiding a feature protects it; authorization is enforced by the backend.
- Direct URL access to an unauthorised page must be denied.
- Direct API calls without permission must be denied.

### 6.2 Navigation groups

Recommended navigation structure:

**Overview**
- Overview Dashboard

**People & Access**
- Admin & Staff Management
- Roles & Permissions

**Business Operations**
- Catalogue
- Categories & Academic Structure
- Orders
- Inventory
- Customers
- Reviews & Moderation
- Marketing & Promotions
- Website & Content
- Reports & Analytics

**Platform Configuration**
- Global Settings
- Feature Management
- Integrations

**Security & System**
- Audit Logs
- System Health
- Notifications
- Backup & Recovery

Navigation should be responsive, searchable where useful, and consistent with the Admin dashboard.

## 7. Super Admin overview dashboard

The default landing page combines business performance and technical administration.

### 7.1 Business KPI cards

Show, where data is available:

- Total revenue for selected period.
- Total orders.
- Total customers.
- Total products.
- Published, draft and inactive products.
- Pending, processing, shipped and delivered orders.
- Cancelled and returned orders.
- Low-stock and out-of-stock product counts.
- New customer registrations.
- Repeat-customer indicators, if reliable data exists.

Revenue metrics must clearly distinguish order value, collected revenue and net revenue. COD orders that have not been collected must not be represented as collected revenue.

### 7.2 Business trends and summaries

- Sales trend over selected date range.
- Order trend.
- Customer registration trend.
- Best-selling products.
- Best-performing categories.
- Sales by academic board or class when data supports it.
- Coupon and promotion performance.

### 7.3 Administration summary

- Total Admin accounts.
- Active, suspended, deactivated and pending-invitation counts.
- Recent Admin logins.
- Recent failed login attempts.
- Recent role and permission changes.
- Recent important Admin activities.
- Recent changes to products, orders and global settings.

### 7.4 System health summary

- Website availability.
- Database connection status.
- API/service health.
- Storage usage.
- Email delivery/integration status.
- WhatsApp/SMS integration status.
- Background job failures.
- Backup status and last successful backup.
- Recent application errors and critical alerts.

### 7.5 Quick actions

- Create Admin.
- Manage roles and permissions.
- Add or manage products.
- View orders.
- Manage categories and academic structure.
- Open global settings.
- View audit logs.
- Open system health.

### 7.6 Date filters

Provide Today, Yesterday, Last 7 Days, Last 30 Days, This Month, Previous Month and Custom Date Range where appropriate. Display the timezone used for date aggregation. Use India Standard Time for business-facing date presentation unless the platform's configured timezone is changed.

### 7.7 Dashboard behaviour

- KPI values must be derived from authoritative database records.
- Show loading, empty, stale-data and error states.
- Do not display fabricated or placeholder business metrics as real data.
- Explain metric definitions through tooltips or help text.
- Dashboard filters should apply consistently to relevant widgets.
- Avoid excessive charts and visual clutter.

## 8. Admin and staff management

### 8.1 Create Admin

Super Admin manually creates each Admin account.

Required workflow:

1. Open Admin & Staff Management.
2. Select Create New Admin.
3. Enter Admin's name and email address.
4. Assign a predefined role and/or custom permissions.
5. Review access summary.
6. Send invitation.
7. Admin receives an email invitation.
8. Admin verifies the invited email through OTP.
9. Account becomes active after successful verification and acceptance.

### 8.2 Admin account fields

- Full name.
- Email address (unique).
- Account status.
- Assigned role(s), if multiple roles are supported by the chosen authorization design.
- Effective permissions.
- Invitation created/expiry/accepted timestamps.
- Created by.
- Last login.
- Last activity.
- Internal notes, optional and restricted.

Avoid collecting unnecessary personal information.

### 8.3 Account actions

Super Admin can:

- Create Admin.
- View Admin profile and access summary.
- Edit name and permitted account details.
- Change assigned role.
- Override individual permissions.
- Suspend or reactivate account.
- Deactivate account.
- Resend invitation.
- Revoke pending invitation.
- Revoke active sessions.
- Review Admin activity history.

### 8.4 Invitation safeguards

- Prevent duplicate Admin email addresses.
- Invitations must expire after a configurable period.
- Resending an invitation invalidates older invitation tokens.
- Invitation tokens must be single-use and securely stored.
- An unaccepted invitation must not grant dashboard access.
- Do not send secrets or passwords in email.

### 8.5 Admin listing

Provide search, filters and sorting by name, email, role, status, creation date and last login. Clearly distinguish pending, active, suspended and deactivated accounts.

## 9. Roles and granular permissions

### 9.1 Permission model

Support both predefined roles and custom roles.

Super Admin can:

- Create custom roles.
- Edit role names and descriptions.
- Assign permissions to roles.
- Duplicate a role as a starting point.
- Assign roles to Admins.
- Apply individual permission overrides to an Admin.
- Inspect the final effective permission set for an Admin.
- Disable or archive unused custom roles.

### 9.2 Suggested predefined roles

- Catalogue Manager
- Order Manager
- Inventory Manager
- Marketing Manager
- Customer Support Manager
- Content Manager
- Accounts & Finance Manager
- Operations Manager

These are starting templates, not rigid permission boundaries. Super Admin can edit their permissions.

### 9.3 Permission actions

Where relevant, support granular actions such as:

- View
- Create
- Edit
- Delete
- Publish/unpublish
- Approve or moderate (where the business workflow itself requires moderation, not Super Admin approval)
- Export
- Import
- Update status
- Manage configuration

### 9.4 Permission domains

Permissions should be defined for each module, including:

- Products and catalogue.
- Categories and academic structure.
- Inventory.
- Orders.
- Customers.
- Reviews.
- Coupons and promotions.
- Website content.
- Shipping.
- Customer support.
- Reports.
- Notifications.
- Business settings.
- User and Admin management.
- Audit logs.
- Integrations.
- System health.
- Backup and recovery.

### 9.5 Authorization rules

- Deny by default.
- Check permissions on the server for every protected operation.
- UI visibility is not a security boundary.
- Prevent self-escalation.
- Admins cannot modify roles or permissions unless explicitly granted a safe role-management permission; Super Admin retains exclusive authority over account creation and platform-level role governance.
- Super Admin access is unconditional within the application’s defined authority.
- Record all permission changes in audit logs.
- When permissions change, invalidate or refresh affected sessions/authorization caches promptly.

## 10. Complete business operations access

Super Admin has full access to the modules defined in `ADMIN_PRD.md` and `PRD.md`.

### 10.1 Catalogue and products

- View, create, edit, publish, unpublish, archive and delete products.
- Manage product names, descriptions, pricing, images, specifications and stock.
- Manage external YouTube, Instagram and Facebook product media links.
- Manage product variants and attributes where supported.
- Perform bulk operations.
- Review product change history through audit logs.

### 10.2 Categories and academic taxonomy

- Manage categories and subcategories.
- Manage subjects.
- Manage CBSE and ICSE board values.
- Manage classes 1–12 and academic groups.
- Configure relationships between categories, classes and subjects.
- Add or deactivate taxonomy values without code changes wherever feasible.
- Prevent deletion of taxonomy records that are still referenced by products or orders; use safe deactivation or migration workflows.

### 10.3 Orders

- View and manage all orders.
- Update order status and fulfilment information.
- Manage cancellations, returns and exceptional order handling.
- View COD collection and reconciliation information where available.
- Access order history and relevant customer support context.
- Apply the same business rules and validation as the Admin order module.

### 10.4 Inventory

- View stock levels and stock movement history.
- Adjust stock.
- Manage low-stock thresholds.
- Review inventory discrepancies.
- Perform bulk stock operations with confirmation.
- Preserve stock movement records.

### 10.5 Customers

- View and manage customer accounts.
- Suspend or reactivate accounts.
- Handle customer support escalations.
- Review account deletion or data requests.
- Access sensitive customer data only through authorised screens and log sensitive access/export events.
- Respect applicable privacy requirements and data minimisation.

### 10.6 Reviews and moderation

- View all product reviews.
- View reported reviews.
- Moderate content that violates published policies.
- Preserve legitimate negative reviews.
- Enforce verified-purchase-only eligibility through backend validation.
- Review moderation history.

### 10.7 Marketing and promotions

- Create and manage coupons.
- Configure discount rules and validity.
- Manage promotional campaigns and homepage placements.
- Review campaign performance.
- Enforce limits and prevent invalid coupon combinations as defined by business rules.

### 10.8 Website and content

- Manage homepage sections, banners and featured products.
- Manage About, Contact, FAQ, policy and other static pages.
- Manage navigation and footer links.
- Manage SEO defaults and page metadata.
- Preview content before publication.
- Maintain clear draft/published states.

## 11. Global settings management

Super Admin has direct control over global settings. There is no mandatory approval step for Super Admin settings changes. Important changes must be recorded in audit logs.

### 11.1 Business settings

- Business display name.
- Contact email and phone.
- Business address and operational details.
- Currency (INR initially).
- Timezone (Asia/Kolkata initially).
- Regional display preferences.

### 11.2 Website settings

- Site name and tagline.
- Approved logo and brand assets.
- Contact details.
- Global SEO defaults.
- Public site announcement settings.
- Maintenance mode and maintenance message.

The approved ProjectBee logo is authoritative. Do not recreate, recolour, distort or replace it. Use the approved asset supplied to the project; if it is not available, use a clearly marked placeholder.

### 11.3 Academic settings

- Boards: CBSE and ICSE initially.
- Classes 1–12.
- Academic groups.
- Subjects.
- Category and subject mappings.

Do not silently introduce additional boards in the initial release.

### 11.4 Shipping settings

- Shipping charge rules.
- Free-shipping threshold.
- Delivery zones.
- Serviceability rules.
- Handling or packaging charges if required.
- Delivery estimate configuration.

### 11.5 COD settings

- Enable/disable COD.
- Minimum and maximum COD order value.
- COD availability restrictions.
- Any applicable COD fee or handling rules.

Initial customer checkout is COD-only as defined in the customer PRD. Do not expose online payment methods until the relevant payment gateway and workflows are implemented and enabled.

### 11.6 Notification settings

- Email provider configuration status.
- WhatsApp/SMS provider configuration status.
- OTP expiry and resend rules.
- Notification template management.
- Operational notification preferences.

Secrets must be stored securely server-side and never displayed in full after saving.

### 11.7 Review settings

- Verified-purchase-only review policy.
- Review eligibility rules.
- Review reporting and moderation settings.
- Review display settings.

### 11.8 Security settings

- OTP expiry.
- OTP resend cooldown.
- Maximum verification attempts.
- Login rate limits.
- Session lifetime.
- Inactivity timeout.
- Session revocation controls.

### 11.9 Maintenance mode

- Enable/disable public website maintenance mode.
- Configure public maintenance message.
- Preserve authorised dashboard access where technically appropriate.
- Provide a clear warning and confirmation before activation.
- Record activation/deactivation in audit logs.

### 11.10 Settings implementation

- Validate settings on the server.
- Use typed configuration values and safe defaults.
- Apply changes without redeployment wherever feasible.
- Do not allow arbitrary code or SQL to be entered into settings.
- Avoid displaying secret values.
- Record actor, timestamp, setting key and safe before/after values in audit logs. Redact secrets and personal data.

## 12. Feature management

Provide simple ON/OFF toggles for supported product features.

Initial feature toggles:

- Customer registration.
- Guest browsing.
- Guest checkout.
- Wishlist.
- Product ratings and reviews.
- Product questions and answers.
- Product videos and social links.
- Recently viewed products.
- Coupons and promotions.
- WhatsApp OTP.
- Cash on Delivery.

Requirements:

- Clearly show current state.
- Confirm high-impact changes.
- Apply changes without redeployment wherever feasible.
- Enforce feature state in both frontend and backend.
- Disabling a feature must not delete its existing data.
- Existing orders and historical records must remain accessible.
- Define safe fallback behaviour for in-progress user workflows.
- Record every toggle change in audit logs.
- If a feature depends on another service or feature, explain the dependency before allowing an unsafe configuration.

## 13. Approval policy

**Decision: No Super Admin approval workflow for Admin actions.**

- Admins may perform any action allowed by their assigned permissions.
- Admin actions do not wait in a Super Admin approval queue.
- Super Admin can review activities through audit logs.
- Super Admin can change or revoke permissions and can override business operations.
- Destructive or irreversible actions may require an immediate confirmation dialog, but this is not an approval workflow.
- Existing business validation rules remain mandatory.

Do not implement a pending-approval queue for product changes, price changes, bulk actions, order updates or content publishing in the initial release.

## 14. Comprehensive audit logs

### 14.1 Events to record

Record important actions by both Admin and Super Admin, including:

- Login and logout.
- Failed login and OTP attempts.
- Admin invitation, creation, update, suspension and deactivation.
- Role creation and modification.
- Permission grants, removals and overrides.
- Product creation, update, publication, archive and deletion.
- Category and academic taxonomy changes.
- Inventory adjustments and bulk stock changes.
- Order status changes, cancellations and exceptional handling.
- Customer account changes.
- Sensitive customer data access and exports.
- Review moderation actions.
- Coupon and campaign changes.
- Website content publication and edits.
- Global setting changes.
- Feature toggle changes.
- Integration configuration changes (without secret values).
- Maintenance mode changes.
- Backup and recovery operations.
- Export and report downloads where sensitive.

### 14.2 Audit record fields

Each audit event should capture, where applicable:

- Unique event ID.
- Actor user ID.
- Actor email or stable identity snapshot.
- Actor role at event time.
- Action name.
- Module/resource type.
- Affected record ID.
- Timestamp.
- Source IP address where available.
- User-agent/device/browser information where available.
- Success/failure outcome.
- Safe before/after change summary.
- Request/correlation ID for troubleshooting.
- Reason/comment for sensitive actions where appropriate.

### 14.3 Audit log interface

- Search by actor, email, action and affected record.
- Filter by date, module, action, role and outcome.
- Open event detail view.
- Compare safe previous and updated values.
- Export permitted records to CSV.
- Paginate large result sets.
- Use server-side filtering and export generation.
- Restrict audit-log access to Super Admin by default.

### 14.4 Audit log integrity and privacy

- Ordinary Admins cannot alter or delete audit logs.
- Super Admin should not have an ordinary UI action to silently rewrite history.
- Use append-only application behaviour and appropriate database protections.
- Redact OTPs, tokens, passwords, API secrets and unnecessary personal data.
- Apply documented retention and deletion policies.
- Restrict exports and log their use.
- Avoid logging full payment details or sensitive authentication material.

## 15. Notifications and alert centre

**Decision: Dashboard + Email notifications.**

### 15.1 Notification channels

- In-dashboard notification centre.
- Email alerts to the registered Super Admin email for important events.

WhatsApp alerts are not required for the initial release.

### 15.2 Events to notify

Security and access:
- Repeated failed login/OTP attempts.
- Successful Super Admin login from a new device where detectable.
- Admin account created, suspended or deactivated.
- Admin role or permission changed.
- Active session revoked.

System and infrastructure:
- Website unavailable.
- Database connection failure.
- Critical API failure.
- Email delivery failure.
- WhatsApp/SMS integration failure.
- Background job failure.
- Backup failure or stale backup warning.
- Storage or usage threshold warning where reliable provider data is available.

Business operations:
- Important configurable operational alerts, such as unusual order-processing backlog or inventory threshold breaches, where the underlying data is available and thresholds are defined.

### 15.3 Notification behaviour

- Show unread count and notification history.
- Allow marking notifications as read.
- Link notifications to the relevant dashboard module.
- Use severity levels such as Informational, Warning and Critical.
- Avoid sending repeated emails for the same ongoing incident; use deduplication and cooldowns.
- Record notification delivery status where available.
- Provide basic notification preferences for non-critical events.
- Critical security and availability alerts should remain enabled by default.
- Do not include secrets or sensitive customer details in alert emails.

## 16. Detailed system monitoring

Provide a dedicated System Health module. The dashboard monitors and reports issues; it is not a substitute for the hosting or database provider console.

### 16.1 Website availability

- Current availability status.
- Last successful check.
- Recent downtime/error history where measurable.
- Uptime summary for the configured monitoring period.

### 16.2 Database

- Supabase connection/health status.
- Database usage and quota indicators where provider APIs expose them.
- Relevant performance indicators where available.
- Connection failures and database error history.
- Never display credentials or service-role keys.

### 16.3 API health

- API endpoint/service health checks.
- Error counts and recent failure history.
- HTTP status/error summaries.
- Request correlation IDs where available.
- Do not expose request payloads containing secrets or personal data.

### 16.4 Storage

- Storage consumption.
- Bucket usage where provider data is available.
- Upload failures.
- Storage limit warnings where reliable limits are available.

### 16.5 Email and WhatsApp/SMS

- Provider connection/configuration status.
- Delivery failures where provider callbacks or logs support them.
- OTP delivery failure summaries.
- Recent integration errors.
- Do not expose OTP values or API credentials.

### 16.6 Background jobs

- Failed, delayed or interrupted jobs.
- Last run and status.
- Error summary and retry status where applicable.
- Avoid displaying sensitive job payloads.

### 16.7 Backups

- Last successful backup.
- Latest backup status.
- Backup history exposed by the configured backup provider.
- Backup failure alerts.
- Backup age/staleness warnings.

### 16.8 Error presentation

- Search and filter by service, severity and date.
- Display timestamp, safe error summary and correlation ID.
- Provide enough diagnostic information for troubleshooting.
- Redact secrets, authentication headers, OTPs and unnecessary personal data.
- Distinguish a confirmed failure from an unavailable monitoring signal.

### 16.9 Monitoring limitations

If a provider does not expose an API for a metric, show “Not available through current integration” rather than inventing a value. Do not imply that the dashboard can measure provider-level uptime or delivery status without a valid monitoring source.

## 17. Backup monitoring and manual recovery

**Decision: Backup Monitoring + Manual Recovery.**

### 17.1 Backup monitoring

- Display last successful backup date/time.
- Display available backup history.
- Display success/failure status.
- Display backup age and staleness warning.
- Display storage/retention information where provider data is available.
- Alert Super Admin when a backup fails or becomes stale.

### 17.2 Manual recovery workflow

1. Super Admin opens Backup & Recovery.
2. Selects an available recovery point exposed by the configured provider.
3. Reviews backup timestamp, source and scope.
4. Reads a clear warning describing potential data loss or overwrite impact.
5. Confirms the operation through a deliberate, multi-step confirmation.
6. Server validates authorization and provider support.
7. Recovery is initiated through a secure server-side integration.
8. Dashboard displays operation status and result.
9. Recovery event is written to the audit log.
10. Post-recovery health checks are performed where supported.

### 17.3 Recovery safeguards

- Only Super Admin can initiate recovery.
- No one-click destructive restore.
- Do not expose provider credentials to the browser.
- Preserve backups according to the configured provider retention policy.
- Clearly explain the recovery point and potential loss of newer data.
- Prevent concurrent or duplicate restore requests where possible.
- Record initiator, time, selected recovery point, provider operation ID and outcome.
- Verify application/database health after recovery where technically possible.

### 17.4 Provider dependency

Actual recovery depends on the configured Supabase/database/hosting backup capabilities and permissions. If an API does not support initiating restore, the dashboard must clearly explain that the operation must be completed in the provider console. Do not simulate or falsely report a successful restore.

## 18. Integrations and API management

Super Admin can view and manage integration configuration for:

- Supabase.
- Email provider.
- WhatsApp/SMS provider.
- Shipping/logistics services when integrated.
- Payment gateway for a future phase.
- Analytics and tracking tools.
- Webhooks and other approved services.

Requirements:

- Show connection/configuration status.
- Provide safe configuration forms for supported settings.
- Store secrets server-side in secure secret storage or protected environment configuration.
- Never return full secrets to the browser after saving.
- Mask secret values in the UI.
- Provide test-connection actions where provider APIs support them.
- Record configuration changes without logging secret values.
- Restrict access to integration management to Super Admin.
- Do not place service-role keys or private API keys in frontend code.

## 19. Reports and analytics

Super Admin has access to all reports available to Admin, plus platform-wide summaries.

Recommended reports:

- Daily, weekly, monthly and yearly sales.
- Order counts and fulfilment rates.
- Revenue by product and category.
- Sales by class and board where data exists.
- Customer growth and repeat purchases.
- Cancellation and return rates.
- COD collection/reconciliation where supported.
- Inventory performance and stock movement.
- Coupon and promotion performance.
- Product review/rating summaries.
- Admin activity and account status.
- System error and integration failure summaries.

Requirements:

- Date range and relevant dimension filters.
- CSV export initially; Excel may be added if supported by the shared reporting implementation.
- Exports must respect data permissions and privacy restrictions.
- Large exports should be generated server-side and handled safely.
- Record sensitive report exports in audit logs.
- Define each metric clearly and avoid misleading financial totals.

## 20. Search, filtering and usability

- Provide global dashboard search for accessible records where useful.
- Provide module-specific search and filters.
- Use server-side pagination for large datasets.
- Preserve filters when opening and returning from a record where practical.
- Show clear empty, loading, success and error states.
- Provide confirmation for destructive actions.
- Use consistent terminology across Super Admin and Admin experiences.
- Avoid clutter, excessive animations and unnecessary popups.

## 21. Design and user experience

### 21.1 Brand direction

Use the approved ProjectBee brand assets and visual direction:

- Navy: `#142B55` – primary navigation and text.
- Bee yellow: `#FFC928` – primary highlights and calls to action.
- Red: `#EA4335` – restrained warning/destructive accent.
- Green: `#34A853` – success accent.
- Blue: `#4285F4` – secondary information accent.
- White: `#FFFFFF` – primary background.

The approved logo asset takes precedence over approximated colours or recreated artwork.

### 21.2 Layout

- Clean, professional, simple and organized.
- Desktop-first administrative workspace that remains fully responsive.
- Collapsible sidebar on desktop.
- Mobile navigation adapted for smaller screens.
- Consistent page headers, breadcrumbs, action areas and tables.
- KPI cards and charts only where they add value.
- Readable typography and sufficient contrast.

### 21.3 Accessibility

- Keyboard-operable controls.
- Visible focus states.
- Accessible labels and error messages.
- Sufficient colour contrast.
- Do not communicate status using colour alone.
- Responsive tables or alternative mobile layouts.

## 22. Technical architecture requirements

The implementation must align with the shared ProjectBee architecture and the customer/Admin PRDs.

### 22.1 Backend and data

The planned backend is Supabase/PostgreSQL.

- Use a clear relational data model.
- Use migrations for schema changes.
- Use Row Level Security (RLS) for protected tables.
- Enforce authorization in trusted server-side code and database policies.
- Keep service-role credentials server-side only.
- Use secure server-side functions for privileged operations.
- Validate all input on the server.
- Use transactions for multi-step operations where appropriate.
- Maintain created_at, updated_at and actor metadata for relevant records.

### 22.2 Suggested logical entities

Final schema names and normalization should be defined in the shared technical architecture. The logical entities should include:

- `profiles` or equivalent user profile table.
- `admin_accounts` or role-bearing user records.
- `roles`.
- `permissions`.
- `role_permissions`.
- `admin_role_assignments`.
- `admin_permission_overrides`.
- `admin_invitations`.
- `sessions` or provider-managed session metadata where appropriate.
- `audit_logs`.
- `global_settings`.
- `feature_flags`.
- `system_alerts`.
- `notification_preferences`.
- `notification_delivery_logs`.
- `integration_status` (non-secret status metadata only).
- `backup_records` or provider backup metadata.
- `recovery_operations`.
- Existing ProjectBee products, categories, orders, customers, inventory, reviews and content entities.

Do not create redundant tables if equivalent secure structures already exist in the customer/Admin schema.

### 22.3 Security architecture

- Authorization must be enforced server-side.
- RLS policies must be tested for both Admin and Super Admin access.
- Protect privileged operations against direct API invocation by unauthorised users.
- Do not trust role values supplied by the browser.
- Do not hardcode Super Admin status in client-side code.
- Do not expose secrets through frontend bundles, logs or error messages.
- Validate file uploads and exports.
- Apply rate limits to authentication and sensitive endpoints.
- Maintain secure dependency and environment configuration.

### 22.4 Audit architecture

- Audit logging should be generated by trusted server-side operations.
- Client-provided audit messages must not be treated as authoritative.
- Use append-only patterns and database permissions to protect records.
- Ensure critical actions and their audit event are committed consistently where possible.
- Avoid audit logging secrets or unnecessary personal data.

### 22.5 Performance and reliability

- Paginate large tables.
- Index frequently filtered audit and operational fields.
- Avoid loading all records into the browser.
- Cache only safe, non-sensitive dashboard summaries.
- Invalidate relevant caches after permission or settings changes.
- Handle provider outages gracefully.
- Use retries and idempotency for external operations where appropriate.
- Make long-running exports and recovery operations asynchronous where needed.

## 23. Privacy and compliance considerations

ProjectBee serves school students, including minors, so privacy and child-safety requirements must be treated as important design constraints.

- Collect only necessary customer information.
- Restrict access to personal data by role.
- Log sensitive customer-data access and exports.
- Avoid unnecessary tracking and profiling.
- Provide processes for data access, correction and deletion requests as required by applicable law.
- Ensure customer communications and consent flows are reviewed for the applicable Indian legal requirements, including the Digital Personal Data Protection framework and rules in force at launch.
- Do not claim legal compliance solely because these technical controls exist; obtain appropriate legal review.
- Never place OTPs, authentication tokens or API secrets in logs or emails.

## 24. Error handling and operational safeguards

- Every operation must return a clear success or failure result.
- Display actionable error messages without exposing internal secrets or stack traces.
- Prevent duplicate submissions for sensitive operations.
- Use idempotency for retryable external actions where possible.
- Confirm irreversible actions.
- Clearly distinguish unavailable provider data from a healthy status.
- Do not show fake system health or backup data.
- Maintain a safe fallback if email or database services are unavailable.
- Ensure failed Admin actions are also auditable where technically possible.

## 25. Implementation phases

### Phase 1 – Identity and access foundation

- Secure Super Admin bootstrap.
- Email OTP login.
- Admin invitation and account lifecycle.
- Single Super Admin enforcement.
- Unified dashboard shell.
- Roles and granular permissions.
- Server-side authorization and RLS.

### Phase 2 – Business administration and overview

- Super Admin access to all Admin modules.
- Combined business overview.
- Admin management screens.
- Global settings.
- Feature toggles.

### Phase 3 – Audit and notifications

- Comprehensive audit logging.
- Audit log search, filters and CSV export.
- In-dashboard notification centre.
- Email alerts and delivery status.

### Phase 4 – Monitoring and integrations

- Website, database and API monitoring.
- Storage, background job and integration monitoring.
- System health dashboard.
- Provider-aware error reporting.

### Phase 5 – Backup and recovery

- Backup status and history.
- Failure/staleness alerts.
- Controlled manual recovery integration where provider APIs support it.
- Recovery operation history and post-recovery checks.

### Phase 6 – Reporting, hardening and launch

- Consolidated reports and exports.
- Security testing.
- Permission and RLS testing.
- Responsive/accessibility testing.
- Load and failure testing.
- Documentation and operational handover.

## 26. Acceptance criteria

The Super Admin implementation is acceptable when:

1. Exactly one Super Admin account can exist.
2. No public Super Admin registration or promotion path exists.
3. Super Admin can authenticate using registered email OTP only.
4. OTP expiry, rate limits, attempt limits and session controls are enforced.
5. Super Admin can manually create Admin accounts by email invitation.
6. Invitations expire and cannot be reused.
7. Super Admin can create predefined and custom roles.
8. Granular permissions are enforced server-side.
9. Admins cannot escalate their own privileges.
10. Admin and Super Admin use one unified dashboard shell.
11. Dashboard navigation and actions adapt to permissions.
12. Super Admin can access every business module.
13. The landing dashboard combines business, administration and system health information.
14. Admins can perform permitted actions without Super Admin approval.
15. Important Admin and Super Admin actions are recorded in audit logs.
16. Audit logs support search, filters, details and CSV export.
17. Global settings can be changed by Super Admin and are validated server-side.
18. Feature toggles affect frontend and backend behaviour without deleting existing data.
19. Super Admin receives dashboard and email alerts for configured critical events.
20. System monitoring reports only metrics supported by actual data sources.
21. Backup status and history are visible where the provider exposes them.
22. Manual recovery is available only when the provider supports a secure integration; otherwise the dashboard explains the provider-console procedure.
23. Secrets are never exposed in browser code or ordinary logs.
24. Sensitive customer-data access and exports are permission-controlled and audited.
25. The interface is responsive and usable on desktop, tablet and mobile.
26. All critical flows have automated or documented tests.

## 27. Open implementation decisions

These items should be resolved during technical architecture or implementation only when necessary. Do not invent provider capabilities.

- Exact OTP provider and email delivery configuration.
- Exact Super Admin bootstrap mechanism and deployment procedure.
- Exact session duration and OTP expiry values.
- Exact monitoring provider/API and polling intervals.
- Exact backup provider capabilities and recovery API support.
- Audit log retention duration.
- Exact thresholds for system and business alerts.
- Exact set of permissions for each predefined role.
- Exact global settings schema and validation ranges.
- Whether multiple roles per Admin are needed; default to one primary role plus individual permission overrides unless the architecture has a clear reason to support multiple roles.

## 28. Instructions to Antigravity

Build the ProjectBee Super Admin capabilities as part of the existing ProjectBee application, not as an unrelated standalone product.

Before implementation:

1. Read `PRD.md`, `ADMIN_PRD.md` and this `SUPER_ADMIN_PRD.md` completely.
2. Identify shared requirements and resolve them consistently.
3. Inspect the existing repository, framework, database schema, authentication and design system before changing anything.
4. Do not overwrite existing working functionality without understanding it.
5. Create or update a shared technical architecture and database plan before implementing major schema changes.
6. Use migrations for database changes.
7. Implement server-side authorization and RLS before relying on dashboard UI restrictions.
8. Do not expose service-role keys, OTPs or integration secrets in frontend code.
9. Do not invent provider API capabilities. If a feature depends on provider support, implement a truthful status/fallback and document the limitation.
10. Use the approved ProjectBee logo asset without modifying it.
11. Preserve the agreed brand direction and clean, simple, responsive UI.
12. Implement in phases and test each phase.
13. Do not create a Super Admin approval queue for Admin actions.
14. Do not create a second Super Admin account or public Super Admin registration.
15. Do not mark a feature complete until its backend enforcement, error states and acceptance criteria are tested.

**Final instruction:** The three PRDs define one integrated ProjectBee platform. Reuse shared components, data entities and business rules. Do not build duplicate product, order, customer, catalogue or authentication systems for each dashboard.
