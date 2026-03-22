# Your Copywriter Portfolio — Astro + Netlify

A warm, editorial-styled freelance copywriter portfolio built with [Astro](https://astro.build) and deployable to [Netlify](https://netlify.com) in minutes.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:4321
```

---

## Personalizing Your Site

### 1. Replace placeholder text

Search for `Your Name` across all files and replace with your real name:
- `src/layouts/BaseLayout.astro` — page title & meta description  
- `src/components/Nav.astro` — logo name  
- `src/components/Footer.astro` — footer name  
- `src/pages/index.astro` — page title prop  

### 2. Update contact info

In `src/components/Contact.astro`, update:
- Email address (`hello@yourname.com`)
- LinkedIn and Twitter/X URLs

### 3. Add your photo

In `src/components/About.astro`, replace the `portrait-placeholder` div:
```html
<!-- Replace this div: -->
<div class="portrait-placeholder" aria-label="Portrait photo">
  <span class="portrait-initials">YN</span>
</div>

<!-- With this: -->
<img src="/portrait.jpg" alt="Your Name, Copywriter" class="portrait-img" />
```
Then add `portrait.jpg` to the `/public` folder and add this CSS:
```css
.portrait-img { width: 100%; height: 100%; object-fit: cover; }
```

### 4. Update the stats

In `src/components/About.astro`, update the years of experience, clients, and specializations.

### 5. Replace portfolio samples

In `src/components/Portfolio.astro`, edit the `samples` array at the top of the file. Each sample has:
- `title` — project name
- `category` — must match one of the filter tab names
- `description` — 1–2 sentence summary
- `excerpt` — a pull quote or sample line from the work
- `skills` — tags shown at the bottom of the card

### 6. Update the Hero copy

In `src/components/Hero.astro`, update:
- The subheadline paragraph to reflect your own voice
- The credential pills at the bottom

---

## Deploying to Netlify

### Option A — Drag & Drop (fastest)

1. Run `npm run build` — this creates a `dist/` folder
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the Netlify dashboard

### Option B — Git Deploy (recommended for ongoing updates)

1. Push this project to a GitHub (or GitLab/Bitbucket) repo
2. In Netlify: **Add new site → Import an existing project**
3. Connect your repo
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**

### Contact Form

The contact form uses **Netlify Forms** — no backend needed. It works automatically when deployed to Netlify. Just make sure:
- The `<form>` has `data-netlify="true"` ✓ (already set)
- The hidden `<input name="form-name">` field is present ✓ (already set)

Submissions appear in your Netlify dashboard under **Forms**.

---

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro        # Sticky navigation with mobile menu
│   │   ├── Hero.astro       # Full-height landing hero
│   │   ├── Portfolio.astro  # Filterable work samples grid
│   │   ├── About.astro      # Bio, services, stats
│   │   ├── Contact.astro    # Netlify contact form
│   │   └── Footer.astro     # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, fonts, meta
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── styles/
│       └── global.css       # Design tokens, typography, utilities
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## Design Tokens (CSS Variables)

All colors and fonts live in `src/styles/global.css`:

| Variable         | Value     | Use                      |
|------------------|-----------|--------------------------|
| `--cream`        | `#FAF6EF` | Page background          |
| `--terracotta`   | `#C5714A` | Primary accent / CTA     |
| `--rust`         | `#A3472A` | Hover states             |
| `--umber`        | `#5C3D2E` | Body text / secondary    |
| `--sage`         | `#7A8C6E` | Tags, available status   |
| `--ink`          | `#2A1F1A` | Headings / dark text     |
| `--font-display` | Cormorant Garamond | Headings      |
| `--font-body`    | DM Sans   | Body text / UI           |

---

## Scripts

| Command           | Action                              |
|-------------------|-------------------------------------|
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Build production site to `dist/`    |
| `npm run preview` | Preview the production build locally|
