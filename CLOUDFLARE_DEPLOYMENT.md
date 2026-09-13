# Deployment

1. Replace the files in the GitHub repository with this project.
2. Keep the existing Cloudflare Pages project connected to the same GitHub repo.
3. Keep D1 binding `DB` unchanged.
4. Keep secrets `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` unchanged (or update them in Cloudflare if desired).
5. Commit to `main` and wait for the Pages production deployment to succeed.
6. No D1 reset is required. If you want the optional indexes, run `migrations/0002_safe_indexes.sql` in the existing D1 database.

Do not create a second Worker project for this portal.
