# Census 2027 – Bhawraguri Rural Charge Portal

This is a Cloudflare Pages + Pages Functions + D1 starter designed around the requested navigation:

Public Home → Phase I or Phase II → only that phase's modules; Admin Login → protected Admin Dashboard → Add/Edit/Delete/manage data.

## Cloudflare setup
1. Create a D1 database named `census2027`.
2. Run `migrations/0001_init.sql` against that D1 database.
3. Put the D1 database ID into `wrangler.toml` or configure the `DB` binding in the Pages project settings. Cloudflare Pages Functions support D1 bindings. See the official docs: https://developers.cloudflare.com/pages/functions/bindings/
4. Set these production secrets/environment variables in the Pages project:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `ADMIN_SESSION_SECRET` (long random secret)
5. Deploy the repository as a Cloudflare Pages project. Pages Functions are deployed with the project; direct dashboard upload is not supported for Functions, so use Git integration or Wrangler.
6. For real photo/file uploads, create an R2 bucket and bind it as `BUCKET`; then extend the gallery endpoint to upload/delete objects. R2 can be bound to Pages Functions.

## Important
- Do NOT put the admin password in `app.js` or public HTML.
- The included admin session uses an HttpOnly, Secure, SameSite cookie signed with HMAC.
- Replace the placeholder gallery titles with the actual photos you want.
- Import your actual Phase I/Phase II CSV/XLSX data into D1 after the schema is confirmed.

## Local development
Install Wrangler, authenticate with Cloudflare, then use Pages local development with the D1 binding. The project uses a static `public/` directory plus `/functions` routes.
