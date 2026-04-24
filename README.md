# Configurable Portfolio Website

This portfolio is built with Next.js, TypeScript, and Tailwind CSS.
All personal information is controlled from one config file, so you can edit your details without touching UI components.

## 1) Quick Start

Prerequisite: Node.js with `npm` installed.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2) Edit Your Details

Main file to edit:

- `content/site.config.ts`

Update sections in that file:

- `person`: name, title, bio, email, resume, location
- `socials`: GitHub, LinkedIn, X, etc.
- `skills`: grouped skills
- `experience`: jobs and achievements
- `projects`: project cards + detail pages
- `education`: schools/degrees
- `seo`: metadata and social preview defaults

The website automatically renders using these values.

## 3) Project Structure

- `app/page.tsx` - Home page composed from reusable sections
- `app/projects/[slug]/page.tsx` - Dynamic project detail pages
- `components/sections/*` - Reusable portfolio sections
- `lib/types.ts` - Typed schema for portfolio content
- `lib/site.ts` - Config validation and exported data
- `content/site.config.ts` - Your editable source of truth

## 4) Validation Rules

`lib/site.ts` includes basic runtime checks (name, email, projects, skills) to catch missing required fields early.

## 5) Build and Production Commands

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## 6) Deploy to Vercel

1. Push this code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Keep default framework settings (Next.js auto-detected).
5. Click **Deploy**.

Vercel will create:

- Production deployment from `main`
- Preview deployments for pull requests

## 7) Connect Custom Domain

1. In your Vercel project, go to **Settings > Domains**.
2. Add your domain (for example `yourname.dev`).
3. Follow Vercel DNS instructions at your domain registrar.
4. Wait for DNS propagation and SSL provisioning.

## 8) Brazil Deployment Notes

- Vercel serves static and edge-cached content globally, including Brazil.
- Keep pages statically generated where possible for best latency.
- Compress large media assets (images under 300KB when possible).
- Prefer `webp`/`avif` images for faster load in lower-bandwidth conditions.

## 9) Suggested Next Improvements

- Add real avatar and Open Graph image assets in `/public`.
- Add analytics (Vercel Analytics, Plausible, or GA4).
- Add a contact form via Formspree or Resend.
