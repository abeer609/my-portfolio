# Abeer Hasan — Portfolio

A single-page portfolio for a product-minded front-end engineer, built with Next.js (App Router), TypeScript and Tailwind CSS v4. Dark theme by default, with a light theme toggle, a red accent system, and screenshot-led project cards.

All copy, project data and social links live in [`data/content.ts`](./data/content.ts), so the site can be re-skinned without touching components.

## Features

- **Sections:** sticky glass navbar, hero with core-stack card, about, expertise, selected work, contact and footer.
- **Theming:** `next-themes` class strategy, dark by default, no-flash theme toggle, CSS-variable tokens for both themes.
- **Projects:** 16:10 screenshots via `next/image`, hover zoom + accent overlay, equal-height cards with pinned footers and outbound links.
- **Interaction:** IntersectionObserver scroll reveals, clipboard "copy email" with confirmation, mobile slide-down nav.
- **Accessibility:** semantic landmarks, one `h1`, skip link, visible accent focus rings, `aria-label`s on icon-only controls, `prefers-reduced-motion` support.
- **SEO:** metadata + Open Graph/Twitter fields, canonical URL, `Person` JSON-LD, favicon and Apple icon entries, per-scheme `themeColor`.

## Tech stack

| Concern    | Choice                                                     |
| ---------- | ---------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)                          |
| Language   | TypeScript (strict)                                         |
| Styling    | Tailwind CSS v4 with CSS-first `@theme` tokens              |
| Fonts      | `next/font/google` — Plus Jakarta Sans (400/500/600/700)    |
| Icons      | `lucide-react` (UI) + `react-icons` (brand marks)           |
| Theme      | `next-themes`                                               |
| Linting    | ESLint (`eslint-config-next`)                               |
| Deployment | Vercel                                                      |

## Getting started

Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server (Turbopack) |
| `npm run build` | Production build                         |
| `npm run start` | Serve the production build               |
| `npm run lint`  | Run ESLint                               |

> In PowerShell, if `npm` is blocked by the execution policy, use `npm.cmd run <script>`.

## Project structure

```
app/
  layout.tsx          # fonts, ThemeProvider, metadata, Person JSON-LD
  page.tsx            # section composition + skip link
  globals.css         # design tokens, base styles, surfaces, reveal animation
components/
  Navbar.tsx          # fixed nav, mobile menu, theme toggle
  ThemeToggle.tsx
  Hero.tsx            # headline, CTAs, core-stack card
  CoreStackCard.tsx
  About.tsx
  Expertise.tsx
  Projects.tsx
  ProjectCard.tsx
  Contact.tsx
  CopyEmailButton.tsx
  SocialLinks.tsx
  Footer.tsx
  ThemeProvider.tsx
  ui/
    Button.tsx        # polymorphic link/button, primary + secondary
    Card.tsx
    Chip.tsx
    Highlight.tsx     # accent words (single + multi-word helper)
    Reveal.tsx        # scroll fade-up
    SectionLabel.tsx
data/
  content.ts          # all site copy, projects, links and badges
lib/
  cn.ts               # class merge helper
public/
  avatar.jpeg         # 270x270 contact portrait
  avatar-2.jpg        # 28x28 navbar avatar
  icon.png            # favicon / app icon
  resume.pdf
  projects/           # 16:10 project screenshots
reference.png         # design reference (git-ignored)
reference-crops/      # per-section comparison crops (git-ignored)
```

## Editing content

Everything user-facing is typed and centralised in `data/content.ts`:

- `site` — name, role, email, canonical URL (also drives metadata and JSON-LD).
- `nav`, `hero`, `coreStack` — navigation and hero copy, including the six core-stack rows.
- `about`, `expertise` — section labels, headings, highlighted words, paragraphs, chips.
- `projects.items` — project cards (`id`, `category`, `title`, `description`, `meta`, `href`, `image`, `imageAlt`). Add `satisfies Project[]` entries to grow the grid; cards are flex columns, so heights stay equal.
- `contact` — heading, paragraph, socials and their labels.
- `footer` — copyright, build note and the two badges.

Accent words in headings are declared per section via `highlights: string[]` and rendered by `HighlightedText`, so no markup changes are needed.

### Assets to replace

| File                             | Purpose                    | Suggested size    |
| -------------------------------- | -------------------------- | ----------------- |
| `public/avatar.jpeg`             | Contact portrait           | 540×540 (square)  |
| `public/avatar-2.jpg`            | Navbar avatar              | 112×112 (square)  |
| `public/resume.pdf`              | Downloadable résumé        | —                 |
| `public/icon.png`                | Favicon / app icon         | 512×512           |
| `public/projects/idex.png`       | Project 01 screenshot      | 1600×1000 (16:10) |
| `public/projects/procycons.png`  | Project 02 screenshot      | 1600×1000 (16:10) |
| `public/projects/iphone-backup-sync.png` | Project 03 screenshot | 1600×1000 (16:10) |

## Theming and design tokens

Tokens are defined as CSS custom properties in `app/globals.css`: `:root` holds the light palette, `.dark` overrides it, and an `@theme inline` block maps them to Tailwind utilities (`bg-canvas`, `text-body`, `border-line`, `bg-accent-strong`, …).

- Palette: `--bg`, `--bg-elevated`, `--bg-subtle`, `--border`, `--border-strong`, `--fg`, `--fg-body`, `--fg-muted`, `--accent`, `--accent-strong`, `--accent-hover`, plus glow/tint variants.
- Type scale: `text-display-2xl` … `text-xs` — each with its own line-height and letter-spacing; the hero uses a tuned `text-hero` token.
- Surfaces: `.page-container` (max-width 1168px, 24px gutters), `.card-surface`, `.contact-card-surface`, `.hero-glow`.

Changing the accent is an edit to the `--accent*` and `--accent-glow`/`--accent-tint` variables in `:root` and `.dark`; nothing else is hard-coded except the brand colours of the social icons.

## Accessibility and performance notes

- Skip-to-content link, `main`/`section[aria-labelledby]` landmarks, and `scroll-margin-top` for anchor targets under the fixed navbar.
- Only the navbar avatar and the first project card image are eager; remaining images are lazy with explicit `sizes`.
- Motion is disabled for users with `prefers-reduced-motion: reduce`.

## Deployment

Push the repository to GitHub and import it into Vercel — the defaults detect Next.js. Set the production domain, then update `site.url` in `data/content.ts` so the canonical URL and JSON-LD stay accurate.

## Known TODOs

- Project `href` values are `#` placeholders; set real product/GitHub URLs.
- LinkedIn, GitHub and WhatsApp entries in `contact.socials` — WhatsApp is wired, the rest are placeholders.
- The `sameAs` URLs in the JSON-LD (`app/layout.tsx`) are placeholders.
- No Open Graph image yet; add `app/opengraph-image.png` (1200×630) when artwork is ready.
