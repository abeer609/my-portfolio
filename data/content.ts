export const site = {
  name: "Abeer Hasan",
  role: "Product-Minded Front-End Engineer",
  email: "hasanabeer609@gmail.com",
  url: "https://abeerhasan.dev",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Skills", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  // "Intentional" is highlighted (accent); final "." stays white
  titleLines: ["Building Web", "Products That", "Feel"],
  highlight: "Intentional",
  badge: "Product-Minded Front-End Engineer",
  paragraph:
    "I bridge the gap between user experience, product logic, and high-performance frontend engineering. Specializing in Vue & Nuxt, I build resilient and feature-rich web applications, intuitive and fast dashboards, data-dense interfaces, that turn complex workflows into effortless user experiences, with an emphasis on clean architecture, maintainability and production quality",
  primaryCta: { label: "Contact Me", href: "#contact" },
  secondaryCta: { label: "Resume", href: "/resume.pdf" },
};

export const coreStack = [
  {name: "django", desc: "Python web framework"},
  { name: "Next", desc: "UI framework" },
  { name: "Nuxt", desc: "Application framework" },
  { name: "Vuetify", desc: "Component systems" },
  { name: "Typescript", desc: "Type-safe development" },
  { name: "i18n", desc: "Internationalization" },
];

export const about = {
  label: "01 / ABOUT",
  // highlighted words: "complex", "clean"
  title: "From complex requirements to clean interfaces.",
  highlights: ["complex", "clean"],
  intro:
    "Product-minded development across dashboards, admin tools, data-heavy views and feature-rich web applications.",
  paragraphs: [
    "Great frontend engineering isn't just about rendering mockups, it's about understanding why a feature exists and who it serves. My day-to-day work covers data-heavy interfaces, internal tools, and customer-facing products where UX friction directly impacts adoption.",
    "I care deeply about edge cases: smooth empty states, optimistic updates, offline resilience, and accessible interactions. Whether architecting scalable state with Pinia or cutting initial load times with Nuxt SSR, my goal is always to deliver speed, clarity, and reliability to the end user.",
  ],
  cta: { label: "My Resume (PDF)", href: "/resume.pdf" },
  highlights_cards: [
    { title: "Vue & Nuxt Ecosystem", detail: "SSR & SEO-ready Web Products" },
    {
      title: "Architecture & Scale",
      detail: "Design Systems & Clean State Management",
    },
    { title: "Product & UX Focus", detail: "Accessibility (a11y) & Responsive UX" },
  ],
};

export const expertise = {
  label: "02 / EXPERTISE",
  // highlighted: "practical", "real"
  title: "A practical stack for shipping real products.",
  highlights: ["practical", "real"],
  groups: [
    {
      index: "01",
      title: "Front-end",
      chips: [
        "Vue",
        "Nuxt",
        "TypeScript",
        "JavaScript",
        "Pinia",
        "i18n",
        "VueUse",
        "Vue Router",
        "Design Systems",
      ],
    },
    {
      index: "02",
      title: "UI, UX & Styling",
      chips: [
        "Vuetify",
        "Tailwind",
        "Responsive Design",
        "Sass / CSS",
        "WCAG a11y",
        "LTR & RTL",
        "Light/Dark Themes",
      ],
    },
    {
      index: "03",
      title: "Tooling & Quality",
      chips: [
        "Git",
        "GitHub Actions",
        "Docker",
        "Vite",
        "Vitest",
        "Core Web Vitals",
        "ESLint & Prettier",
        "Bun & npm",
      ],
    },
  ],
};

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const projects = {
  label: "03 / SELECTED WORK",
  // highlighted: "focus", "quality" (the trailing "." is also accent here)
  title: "Projects with a focus on product quality.",
  highlights: ["focus", "quality"],
  items: [
    {
      id: "PROJECT 01",
      category: "Enterprise SaaS",
      title: "IDEX Platform",
      description:
        "An End-to-End Platform for Safety, Regulatory Compliance, and Operational Excellence Built for industry, construction, and the public sector, our unified platform streamlines safety workflows from field inspections to executive reporting. Digitize audits, manage dynamic site risks, automate incident reporting, and enforce ISO compliance in real time, eliminating paperwork bottlenecks, minimizing downtime, and protecting workforce.",
      meta: "Stockholm · Sweden",
      href: "#",
      image: "/projects/idex.png",
      imageAlt: "Screenshot of the IDEX Platform safety and compliance dashboard",
    },
    {
      id: "PROJECT 02",
      category: "Sustainability Tech",
      title: "Procycons",
      description:
        "The Intelligence Platform for Industrial Decarbonization and Ecological Compliance. an AI-powered sustainability engine designed to operationalize environmental stewardship. By transforming distributed operational data into verifiable climate action, the platform automates carbon footprint calculations, models predictive decarbonization pathways, and delivers real-time compliance reporting.",
      meta: "Offenbach · Germany",
      href: "#",
      image: "/projects/procycons.png",
      imageAlt: "Screenshot of the Procycons decarbonization platform",
    },
    {
      id: "PROJECT 03",
      category: "Desktop Utility",
      title: "iPhone Backup Sync",
      description:
        "A high-reliability Windows desktop utility built to solve iPhone photo and video backup freezes over USB. Explores AI-assisted systems engineering by pairing a reactive Vue 3 and TypeScript interface with a Rust and Tauri v2 streaming backend to communicate directly with Windows Portable Devices (WPD) protocols without cloud subscriptions.",
      meta: "Windows · Open Source",
      href: "#",
      image: "/projects/iphone-backup-sync.png",
      imageAlt: "Screenshot of the iPhone Backup Sync desktop app",
    },
  ] satisfies Project[],
};

export const contact = {
  label: "04 / CONTACT",
  // highlighted: "product", "strong"
  title: "Have a product that needs a strong front end?",
  highlights: ["product", "strong"],
  paragraph:
    "I'm open to new opportunities and interesting projects. For collaboration, freelance work or a technical conversation, get in touch.",
  socials: [
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "WhatsApp", href: "https://wa.me/+8801968971251" },
  ],
};

export const footer = {
  copyright: "© 2026 Abeer Hasan",
  built: "Built with Next.js, TypeScript & Tailwind CSS",
  badges: [
    {
      title: "Established online Oct 2026",
      sub: "Public launch record",
    },
    {
      title: "0.04g of CO₂/view · Website Carbon",
      sub: "Cleaner than 93% of pages tested",
    },
  ],
};
