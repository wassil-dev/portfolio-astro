# Portfolio Project Analysis Report

**Project**: portfolio-v4 (Astro Portfolio)
**Owner**: Ouassil Dahimene
**Domain**: ouassil-dahimene.dev
**Analysis Date**: December 8, 2025

---

## 1. Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Astro | 5.13.7 |
| UI Library | React | 19.1.1 |
| Language | TypeScript | strict mode |
| Styling | Tailwind CSS | 3.4.17 |
| Content | MDX | 4.3.5 |
| Icons | Lucide React, Simple Icons | 0.544.0, 15.14.0 |
| UI Components | shadcn/ui (Radix UI) | new-york style |

**Key Integrations**: @astrojs/sitemap, @astrojs/rss, @astrojs/partytown (GA)

---

## 2. Project Structure

```
portfolio-astro/
├── src/
│   ├── pages/           # 6 routes (index, blog, projects, uses, rss)
│   ├── components/      # 23 components
│   ├── layouts/         # Layout.astro (main wrapper)
│   ├── content/         # MDX content (projects & blog)
│   ├── data/            # JSON data (skills, experiences, etc.)
│   ├── lib/             # Utility functions (cn helper)
│   ├── styles/          # global.css (design tokens)
│   └── assets/          # SVG assets
├── public/
│   ├── icons/           # 12 custom technology icons
│   ├── images/          # Project cover images
│   ├── favicon.svg
│   ├── resume.pdf
│   └── CNAME
├── .github/workflows/   # deploy.yml (GitHub Actions)
└── Config files         # astro, tailwind, tsconfig, postcss
```

---

## 3. Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `index.astro` | Home page with 7 sections |
| `/blog` | `blog/index.astro` | Blog listing with tag filtering |
| `/blog/[slug]` | `blog/[slug].astro` | Individual blog posts (dynamic) |
| `/projects` | `projects/index.astro` | All projects grid |
| `/projects/[slug]` | `projects/[slug].astro` | Individual project pages (dynamic) |
| `/uses` | `uses.astro` | Tools & setup page |
| `/rss.xml` | `rss.xml.ts` | RSS feed endpoint |

**Home Page Sections**: Hero, About, Projects, Skills, Experience, Certifications, Contact

---

## 4. Components Inventory

### Layout & Navigation
- `Layout.astro` - Main wrapper (meta, analytics, theme)
- `Navigation.astro` - Fixed header with mobile menu

### Page Sections
- `AboutMe.astro` - Bio, stats, resume download
- `SkillGrid.astro` - Technology icons grid (20+ skills)
- `Timeline.astro` - Work experience timeline
- `Certifications.astro` - Certification cards
- `Footer.astro` - Multi-column footer

### Cards
- `ProjectCard.astro` - Project showcase
- `BlogCard.astro` - Blog post preview

### Interactive
- `ThemeToggle.astro` - Dark/light mode
- `ScrollToTop.astro` - Back to top button
- `ContactForm.astro` - Validated contact form
- `ImageGallery.astro/.tsx` - Project image galleries

### UI (shadcn/ui)
- `ui/button.tsx`
- `ui/card.tsx`
- `ui/scroll-area.tsx`

---

## 5. Content Management

### Data Files (`/src/data/`)

| File | Purpose | Items |
|------|---------|-------|
| `skills.json` | Technology skills | 20+ skills with icons |
| `experiences.json` | Work history | 4 positions |
| `certifications.json` | Professional certs | 2 certifications |
| `about.json` | Bio & stats | Profile info |
| `contact.json` | Contact links | Email, social, location |

### MDX Content (`/src/content/`)

**Projects (8 files)**:
- simbox-fraud.mdx - SIMBox fraud detection
- credit-risk-modeling.mdx
- customer-churn-prediction.mdx
- job-aggregation-platform.mdx
- person-clustering-fuzzy.mdx
- recommendation-engine.mdx
- sales-forecasting-dashboard.mdx
- sentiment-analysis-nlp.mdx

**Blog Posts (3 files)**:
- fraud-detection-ml.mdx
- data-analysis-python.mdx
- data-visualization-tips.mdx

### Content Schema
- **Projects**: title, description, tags, cover, date, github, demo, tech, gallery
- **Blog**: title, description, pubDate, author, cover, tags, draft

---

## 6. Styling System

### Design Tokens (CSS Variables)
- **Light/Dark themes** with automatic switching
- **Color palette**: primary, secondary, muted, accent, destructive
- **Border radius**: configurable via `--radius`

### Custom Animations
- `animate-fade-in` - Entry animation (0.8s)
- `animate-fade-in-delay` (1-3) - Staggered delays
- `animate-gradient` - Hero background animation

### Tailwind Configuration
- Dark mode: `class` strategy
- Typography plugin for prose
- Animation plugin
- Line-clamp plugin

---

## 7. Features

### Visual
- Dark/light theme toggle (localStorage persistence)
- Animated hero with pulsing gradients
- Smooth scroll navigation
- Hover effects and transitions
- Responsive design (mobile-first)

### SEO
- Open Graph meta tags
- Twitter Card metadata
- Schema.org structured data (Person)
- Sitemap generation
- RSS feed
- Canonical URLs

### Performance
- Static site generation
- Partytown for third-party scripts
- Image optimization
- Non-blocking analytics

### Interactive
- Blog tag filtering
- Contact form with validation
- Mobile hamburger menu
- Reading time estimation

---

## 8. Analytics & Tracking

- **Google Analytics**: GA-M6RRDN1JV3
- **Implementation**: Via @astrojs/partytown (web worker isolation)
- **Events**: dataLayer.push forwarding

---

## 9. Build & Deployment

### Scripts
```json
"dev": "astro dev"       // Development server
"build": "astro build"   // Production build
"preview": "astro preview" // Preview build
```

### CI/CD Pipeline (GitHub Actions)
1. Trigger: Push to main/master
2. Environment: ubuntu-latest, Node.js 20
3. Steps: checkout → setup node → npm ci → build → deploy

### Deployment Target
- **Platform**: GitHub Pages
- **Custom Domain**: ouassil-dahimene.dev
- **Output**: Static HTML in `./dist/`

---

## 10. Configuration Summary

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Site URL, integrations, Vite alias |
| `tailwind.config.js` | Theme, plugins, dark mode |
| `tsconfig.json` | Strict mode, path aliases |
| `postcss.config.cjs` | Tailwind + Autoprefixer |
| `components.json` | shadcn/ui configuration |

---

## 11. Professional Profile Extracted

- **Name**: Ouassil Dahimene
- **Role**: Python Developer & Data Scientist
- **Location**: Chéraga, Algiers, Algeria
- **Experience**: 4+ years
- **Projects**: 20+ completed
- **Technologies**: 20+ mastered
- **ETL Pipelines**: 50+ built

### Contact
- Email: ouassil.dahimene@gmail.com
- GitHub: github.com/wassil-dev
- LinkedIn: linkedin.com/in/ouassildahimene/

---

## 12. Strengths & Architecture Highlights

1. **Modern Stack**: Astro 5 + React 19 + TypeScript
2. **Content-First**: MDX for rich project documentation
3. **Performance**: Static generation + Partytown isolation
4. **Maintainability**: JSON data separation from code
5. **Design System**: CSS variables + Tailwind + shadcn/ui
6. **SEO Ready**: Structured data, sitemap, RSS
7. **CI/CD**: Automated GitHub Pages deployment
8. **Accessibility**: Semantic HTML, proper ARIA labels
9. **Theme Support**: Dark/light modes with persistence
10. **Scalable Content**: Easy to add projects/posts via MDX

---

## 13. File Statistics

| Category | Count |
|----------|-------|
| Astro Pages | 6 |
| Components | 23 |
| MDX Projects | 8 |
| MDX Blog Posts | 3 |
| JSON Data Files | 5 |
| Custom Icons | 12 |
| Total Dependencies | 34 |

---

*Report generated by Claude Code analysis*
