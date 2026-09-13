# Cloudflare deployment plan

## Target navigation
HOME
├── Phase I → Phase I modules only
├── Phase II → Phase II modules only
└── Admin Login → protected Admin Panel

## Recommended production architecture
- Cloudflare Pages / Pages Functions for the portal UI and API routes.
- Cloudflare D1 for HLB, enumerator, supervisor, reports, maps, notices, officers and settings.
- Cloudflare R2 for PDF/image/map/gallery uploads.
- Admin credentials stored as Cloudflare secrets, never in frontend code.

## Secrets
Create these in the Pages/Worker environment:
ADMIN_USERNAME
ADMIN_PASSWORD
ADMIN_SESSION_SECRET

## D1
Create a D1 database and run migrations/0001_init.sql. Replace REPLACE_WITH_YOUR_D1_DATABASE_ID in wrangler.toml.

## R2
Create an R2 bucket and bind it to the Function as BUCKET. Use it for final maps, draft maps, gallery images and downloadable documents.

## Important data integration
The Library contains the previously prepared Bhawraguri portal specification and the official Phase I final list (178 HLBs, range 0001–0178) plus a 15-record reserve list. The actual Phase II master data is to be connected when the Phase II Excel/CSV is supplied.

The existing heavy Worker reference is included as REFERENCE_EXISTING_HEAVY_PORTAL_WORKER.txt for preserving the already-prepared official-list logic.

## Before public launch
1. Replace demo/placeholder credentials with Cloudflare secrets.
2. Connect D1 and R2.
3. Import the official Phase I final/reserve data.
4. Connect the actual Phase II master file when supplied.
5. Test every public route and every Admin CRUD/upload/delete operation.
6. Enable backups/versioning and review audit logging before official use.
