# ShiftCare marketing site (Motionweb)

Next.js 15 marketing site for **ShiftCare** — clinical decision intelligence for nursing education. Includes an embedded public simulator preview (`public/ShiftCare_v11.html`).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](.env.example). Public vars:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CAL_BOOKING_URL` | Optional. Cal.com / Calendly link shown on [`/book`](app/book/page.tsx). |
| `NEXT_PUBLIC_SALES_EMAIL` | Optional. Defaults to `hello@shiftcare.io` for mailto pilot requests. |

## Book a demo / CRM

- **Scheduling:** Set `NEXT_PUBLIC_CAL_BOOKING_URL` after you create a Cal.com or Calendly event.
- **Qualification without a backend:** The [`/book`](app/book/page.tsx) page includes a mailto-based pilot request form (no data stored on this site).
- **CRM handoff:** Connect your scheduler to Airtable or Notion (Zapier/Make) so new bookings create leads. For email-only leads, forward to a shared inbox or parse with a simple automation.

## Billing roadmap (product app, not this repo)

This site is **marketing only**; paid access and seat limits belong on the authenticated product (e.g. `app.shiftcare.io`).

1. **Phase 0 — First revenue:** Manual quotes, invoice or bank transfer, or Stripe **Payment Links**; grant pilot access manually (magic links / allowlist).
2. **Phase 1:** Stripe **Checkout** for a fixed pilot SKU; webhooks update **org entitlements** (`seat_limit`, `contract_end`) in the product API.
3. **Phase 2:** Annual seats, Stripe **Invoicing** or offline PO; Customer Portal for self-serve card updates where appropriate.

Keep marketing copy aligned with what you can deliver (institution pilots vs self-serve trial).

## Deploy on Vercel (free Hobby to start)

1. Push this repo to **GitHub** (private or public). Do not commit `.env` or secrets.
2. In [Vercel](https://vercel.com): **Add New → Project** → Import the repository. Framework preset: Next.js.
3. Add environment variables from `.env.example` if needed.
4. Deploy; production tracks your default branch (usually `main`).

Upgrade to **Pro** when you need team access, higher limits, or clearer commercial terms.

## GitHub

If this folder is not yet a repository:

```bash
git init
git add .
git commit -m "Initial commit: ShiftCare marketing site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Then connect the repo in Vercel as above.
