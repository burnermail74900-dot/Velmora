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

## Administrator access

Supabase Auth handles login. The admin routes check the authenticated user server-side; database RLS independently checks `auth.jwt() -> 'app_metadata' ->> 'role' = 'admin'`. Assign this claim only to the owner in Supabase's trusted admin interface. Never hardcode an admin password or ship a service-role key to the client.

The admin dashboard provides a protected enquiry overview. Full detail editing, bulk deletion, portfolio/FAQ editing and service management UI are not implemented; use the Supabase dashboard as the trusted administration console until those interfaces are built.

## Before launch

- [ ] Obtain qualified legal review for the commercial offering of erotic fiction in India and each target market before accepting or fulfilling any commission.
- [ ] Obtain written approval from each relevant communication, hosting, AI and payment provider where required by its policies. Direct messaging or off-platform arrangements do not bypass applicable law or platform rules.
- [ ] Keep adult category flags disabled until the preceding legal and provider reviews are complete.
- [ ] Confirm service scope, delivery estimates, revision policy, cancellation/refund terms and the business contact channels are monitored.
- [ ] Replace the launch-stage privacy notice with a legally reviewed policy matching actual processors, retention and deletion operations.
- [ ] Configure production-grade rate limiting and abuse protection; the honeypot is only a basic deterrent.
- [ ] Configure backups, monitoring, error reporting and email notification delivery if desired.
- [ ] Test mobile breakpoints, navigation, valid/invalid form submissions, unauthenticated admin access and RLS.
- [ ] Keep the adult category hard-disabled until legal and platform-policy clearance is documented. All customers and characters must be adults; reject minors, non-consensual real-person sexual depictions, exploitation and other prohibited requests.
- [ ] Confirm brand availability for trademark/domain use before commercial launch.

## Known limitations

This is a deployable application source project, not a hosted live website. It requires Supabase configuration and a deployment account for persistent form submissions and admin access. No email notifications, production-grade rate limiting, live chat, full admin CMS, in-app customer deletion workflow or legal certification is claimed. The direct contact channels and service enquiry links work independently of the backend.
