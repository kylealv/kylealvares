# kylealvares.com

Personal portfolio — built with Next.js 14, Tailwind CSS, deployed on Vercel.

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### One-time setup

1. Push this folder to a GitHub repo (e.g. `github.com/yourusername/kylealvares`)
2. Go to [vercel.com](https://vercel.com) → New Project → Import that repo
3. Vercel auto-detects Next.js — click Deploy
4. Once deployed, go to Settings → Domains → Add `kylealvares.com`
5. Follow Vercel's DNS instructions (add CNAME/A records at your domain registrar)

### Every future update

```bash
git add .
git commit -m "your message"
git push
```

Vercel auto-deploys on every push to `main`.

## Before going live — fill these placeholders

- `app/contact/page.tsx` — update LinkedIn handle
- `public/resume.pdf` — add your resume PDF
- `app/projects/page.tsx` — add Fiit description once write-up is ready
- `app/writing/page.tsx` — add essays as they're published

## File structure

```
app/
  layout.tsx        # Root layout, loads Nav
  page.tsx          # Home
  about/page.tsx    # About
  projects/page.tsx # Projects
  writing/page.tsx  # Writing
  contact/page.tsx  # Contact
  globals.css       # Design system (colors, fonts, shared classes)
components/
  Nav.tsx           # Sticky nav, highlights active page
public/
  resume.pdf        # Drop your resume here
```
