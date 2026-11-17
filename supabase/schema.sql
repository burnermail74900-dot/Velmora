-- Velmora enquiry schema. Run in the Supabase SQL editor.
create extension if not exists pgcrypto;
create table if not exists public.contact_messages (
 id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
 name text, email text not null, topic text not null, message text not null, status text not null default 'new'
);
create table if not exists public.portfolio_samples (
 id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(),
 slug text unique not null, title text not null, genre text not null, synopsis text not null, excerpt text not null,
 reading_time text, published boolean not null default false
);
alter table public.contact_messages enable row level security;
alter table public.portfolio_samples enable row level security;
-- Public visitors can submit inquiries/messages only. They cannot read customer data.
drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages" on public.contact_messages for insert to anon, authenticated with check (true);
drop policy if exists "Admins can read contact messages" on public.contact_messages;
create policy "Admins can read contact messages" on public.contact_messages for select to authenticated using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');
drop policy if exists "Published portfolio is public" on public.portfolio_samples;
create policy "Published portfolio is public" on public.portfolio_samples for select to anon, authenticated using (published = true);
drop policy if exists "Admins manage portfolio" on public.portfolio_samples;
create policy "Admins manage portfolio" on public.portfolio_samples for all to authenticated using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin') with check (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');
-- Do not expose the service-role key to the browser. Set app_metadata.role='admin'
-- for the owner's Auth user from the Supabase dashboard (never user_metadata).

-- Centralised multi-platform enquiry system (safe to run on an existing install).
alter table public.contact_messages alter column email drop not null;
alter table public.contact_messages add column if not exists preferred_platform text;
alter table public.contact_messages add column if not exists instructions text;
alter table public.contact_messages add column if not exists service_slug text;
