import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
});

const description =
  "I bridge the gap between user experience, product logic, and high-performance frontend engineering. Specializing in Vue & Nuxt, I build resilient and feature-rich web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abeer Hasan – Product-Minded Front-End Engineer",
    template: "%s – Abeer Hasan",
  },
  description,
  applicationName: "Abeer Hasan",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Abeer Hasan",
    "Front-End Engineer",
    "Vue",
    "Nuxt",
    "TypeScript",
    "Pinia",
    "Dashboard Development",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0C0F" },
  ],
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [
    "https://www.linkedin.com/",
    "https://github.com/",
    "https://stackoverflow.com/",
  ],
  knowsAbout: [
    "Vue.js",
    "Nuxt",
    "TypeScript",
    "Pinia",
    "Vuetify",
    "Front-End Engineering",
    "Accessibility",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} antialiased`}
    >
      <body className="min-h-dvh bg-canvas font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
