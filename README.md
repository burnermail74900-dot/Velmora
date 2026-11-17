# Velmora — Personalised Erotic Fiction

A premium, enquiry-first 18+ erotic fiction studio built with Next.js App Router, TypeScript, Tailwind CSS v4 and Supabase.

## Brand and visual system

**Velmora** — *Your fantasies. Your characters. Your story.* Charcoal `#111014`, plum `#1B171F`, burgundy `#642B43`, champagne `#C5A46D`, warm ivory `#F4EFF2`; Playfair Display + DM Sans.

## Current website behavior

- Responsive homepage, 18+ erotic-fiction service catalogue, six individual service pages, fictional adult roleplay explainer, original non-graphic adult-fiction samples, about, privacy, terms, FAQ and contact pages.
- Six services and exact INR prices: Short Custom Erotica ₹199; Detailed Erotic Story ₹399; Long Erotic Story ₹699; Custom Erotic Character Creation ₹299; Personalised Erotic Chat — 15 minutes ₹149; Personalised Erotic Chat — 30 minutes ₹249.
- Every service card and detail page opens a service-specific contact selector for Instagram, Telegram, Reddit and email.
- Email and Reddit support pre-filled enquiry drafts. Instagram and Telegram open the supplied profiles; the visitor must initiate the message manually. No message is sent automatically.
- Optional general enquiry form with preferred nickname, optional email, service, preferred contact platform, brief and additional instructions.
- Homepage and footer contact cards use the exact supplied channels.
- Authenticated administrator overview and enquiry list, backed by Supabase Row Level Security.
- The brand and catalogue are positioned exclusively around erotic fiction for adults 18+. All characters must be fictional adults. Adult categories remain hard-disabled for acceptance/fulfilment until appropriate legal review and any required written platform/provider approvals are complete.

## No checkout or payment system

This project is a service catalogue and lead-generation website only. There is no shopping cart, checkout page, payment gateway, card form, payment redirect, payment confirmation state or payment processing code. Clicking an enquiry button does not create a purchase or confirmed order. Availability and acceptance are confirmed through direct communication.

## Contact channels

- Email: `burnermail74900@gmail.com` — `mailto:burnermail74900@gmail.com`
- Instagram: `@burnermail74900` — https://www.instagram.com/burnermail74900/
- Telegram: `@VV74900` — https://t.me/VV74900
- Reddit: `u/Afraid-Flatworm4041` — https://www.reddit.com/user/Afraid-Flatworm4041/

No additional social accounts are configured.

## Run locally

1. Install Node.js 20+.
2. Copy `.env.example` to `.env.local`.
3. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
4. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.
5. Create the owner user in Supabase Authentication. In the Supabase dashboard, set that user's **app_metadata** claim to `{ "role": "admin" }`. Do not put the admin role in user-editable metadata.
6. Run `npm install`, then `npm run dev`.

The public catalogue and direct contact links work without Supabase. The site is positioned as an 18+ erotic fiction enquiry catalogue, not a general romance or fiction studio. The optional enquiry form reports that the inbox is not configured and directs visitors to the four contact channels until Supabase is connected. It displays a received confirmation only after a successful database insert.

## Database migration

Run the complete `supabase/schema.sql`. On an existing installation, the final migration statements make the contact email optional and add `preferred_platform`, `instructions` and `service_slug` to `contact_messages`. Existing legacy `inquiries` records are retained; the active website now submits and displays centralised `contact_messages`.

## Environment variables

- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase publishable/anon key (safe for browser use when RLS is correct).
- `SUPABASE_SERVICE_ROLE_KEY` — reserved for future trusted server-only administrative jobs; not used by this starter. Never expose it in `NEXT_PUBLIC_*`.
- `NEXT_PUBLIC_SITE_URL` — canonical site origin.

## Deployment

1. Push this folder to a private Git repository.
2. Import it into Vercel as a Next.js project.
3. Add the environment variables in Vercel Project Settings.
4. Set `NEXT_PUBLIC_SITE_URL` to the production HTTPS origin.
5. Run the latest SQL schema in Supabase and verify RLS policies.
6. Deploy and test direct links, mobile layouts, form submissions, admin login and RLS from anon/authenticated/admin accounts.
