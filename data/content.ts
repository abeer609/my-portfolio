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
    "I bridge the gap between user experience, product logic, and high-performance web development. Specializing in React, Next.js, and Django, I build scalable, feature-rich web applications, intuitive dashboards, and data-driven interfaces that transform complex workflows into seamless user experiences. I focus on clean architecture, maintainable code, optimized performance, and production-ready solutions.",
  primaryCta: { label: "Contact Me", href: "#contact" },
  secondaryCta: { label: "Resume", href: "/resume.pdf" },
};

export const coreStack = [
  {name: "django", desc: "Python web framework"},
  { name: "Next", desc: "UI framework" },
  { name: "Tailwind", desc: "Tailwind css" },
  { name: "Node.js", desc: "Node.js" },
  { name: "Python", desc: "Python language" },
  { name: "Typescript", desc: "Type-safe development" },
];

export const about = {
  label: "01 / ABOUT",
  // highlighted words: "complex", "clean"
  title: "From complex requirements to clean, scalable applications.",
  highlights: ["complex", "clean"],
  intro:
    "Building product-focused web experiences with React, Next.js, and Django — from interactive dashboards and admin panels to data-driven platforms and feature-rich applications.",
  paragraphs: [
    "Great development isn't just about writing code or turning designs into interfaces. It's about understanding the problem, the people using the product, and the experience you're trying to deliver. My work focuses on building responsive, maintainable, and scalable applications where performance, usability, and reliability matter.",
    "I care deeply about clean architecture, efficient state management, API design, and real-world edge cases. From crafting dynamic frontend experiences with React and Next.js to building robust backend systems and RESTful APIs with Django, my goal is to deliver applications that are fast, accessible, and built to scale.",
  ],
  cta: { label: "My Resume (PDF)", href: "/resume.pdf" },
  highlights_cards: [
    { title: "React & Next.js Ecosystem", detail: "Modern UI Development, SSR, SEO & Performance Optimization" },
    {
      title: "Django Backend Engineering",
      detail: "RESTful APIs, Database Design & Scalable Backend Architecture",
    },
    { title: "Product & UX Focus", detail: "Responsive Design, Accessibility (a11y) & Seamless User Experiences" },
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
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwindcss",
        "Design Systems",
      ],
    },
    {
      index: "02",
      title: "Backend & API",
      chips: [
        "Nodejs",
        "Django",
        "Django rest framework",
        "Rest API",
        "JWT",
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
      title: "Booknook",
      description:
        "BookNook is a user-friendly online library management platform that makes discovering, borrowing, and managing books simple and convenient. Users can explore books by category, search for their favorites, add and manage their own collections, and borrow or return books with ease. With secure authentication, personalized borrowing history, and an admin dashboard, BookNook provides a seamless digital library experience for both readers and administrators.",
      meta: "",
      href: "https://bazardor-tau-ten.vercel.app",
      image: "/projects/booknook.png",
      imageAlt: "Screenshot of the booknook",
    },
    {
      id: "PROJECT 02",
      category: "Enterprise SaaS",
      title: "Bazardor",
      description:
        "BazarDor is a responsive Bengali-language market price tracking platform that helps users explore essential product prices, compare rates across markets, and monitor daily price fluctuations in Bangladesh. Built with Next.js, TypeScript, Tailwind CSS, and Better Auth, it delivers a seamless and intuitive experience across desktop, tablet, and mobile devices.",
      meta: "",
      href: "https://bazardor-tau-ten.vercel.app",
      image: "/projects/bazar-dor.png",
      imageAlt: "Screenshot of the bazardir landing page",
    },
    {
      id: "PROJECT 03",
      category: "Sustainability Tech",
      title: "Bytespace",
      description:
        "ByteSpace is an online learning platform that provides access to a wide range of courses designed to help users develop new skills, expand their knowledge, and unlock their potential. Whether you're looking to explore your creativity, advance your career, or grow your business, ByteSpace makes learning accessible and engaging.",
      meta: "",
      href: "https://bytespace-gules.vercel.app",
      image: "/projects/bytespace.png",
      imageAlt: "Screenshot of the bytespace landing page",
    },
    {
      id: "PROJECT 04",
      category: "Sustainability Tech",
      title: "Fit log",
      description:
        "FitLog is a modern workout library and fitness planning application designed to help users organize their fitness routines and stay consistent with their goals. Users can explore workouts, view exercise details, create daily workout plans, save favorite routines, and track completed sessions. Built with Next.js, React, TypeScript, and Tailwind CSS, FitLog offers a responsive interface with persistent data storage for a seamless fitness tracking experience.",
      meta: "",
      href: "https://fitlog-alpha-six.vercel.app/",
      image: "/projects/fit-log.png",
      imageAlt: "Screenshot of the fitlog landing page",
    },
    {
      id: "PROJECT 05",
      category: "Desktop Utility",
      title: "Dev stack",
      description:
        "DevStack is an interactive technology stack builder that helps developers explore, compare, and select the right technologies for their projects. Users can discover frontend frameworks, backend tools, databases, and development utilities, compare their features side by side, and build a personalized development stack that fits their project requirements.",
      meta: "",
      href: "https://devstack-two-chi.vercel.app/",
      image: "/projects/dev-stack.png",
      imageAlt: "Screenshot of devstack landing page",
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
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abeer-hasan-4434331b2/" },
    { name: "GitHub", href: "https://github.com/abeer609" },
    { name: "WhatsApp", href: "https://wa.me/+8801968971251" },
  ],
};

export const footer = {
  copyright: "© 2026 Abeer Hasan",
  built: "Built with Next.js, TypeScript & Tailwind CSS"
};
