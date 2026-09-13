# Census 2027 – Bhawraguri Rural Charge Portal

Fresh Cloudflare Pages + Pages Functions + D1 rebuild focused on:
- heavy professional government-portal UI
- working Phase I module navigation
- Phase I / Phase II data isolation
- Phase II shows **No Data Found** until Phase II records exist
- public read/search only
- single authorized Admin login
- admin CRUD for portal tables

## Cloudflare bindings/secrets
D1 binding: `DB` → `census-2027-bhawraguri`
Secrets: `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`

## Important
This build is additive and does not contain a destructive database reset. It is designed to reuse the existing D1 schema/data, including the official Phase I HLB records already loaded in D1.
