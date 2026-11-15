"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <div className="page-container">
        <nav
          aria-label="Primary"
          className="flex h-12 items-center justify-between gap-6 rounded-xl border border-line px-3 backdrop-blur-xl"
          style={{ backgroundColor: "var(--nav-bg)" }}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Image
              src="/avatar-2.jpg"
              alt=""
              width={56}
              height={56}
              priority
              className="size-7 rounded-lg object-cover ring-1 ring-accent"
            />
            <span className="text-sm font-semibold text-ink">{site.name}</span>
          </a>

          <div className="flex items-center gap-3 sm:gap-6">
            <ul className="hidden items-center gap-6 md:flex">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-body transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-8 place-items-center rounded-lg border border-line bg-surface text-body transition-colors duration-200 hover:border-line-strong hover:text-ink md:hidden"
            >
              {open ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-nav"
          className={cn(
            "mt-2 overflow-hidden rounded-xl border border-line bg-surface shadow-lg transition-[max-height,opacity] duration-200 ease-out md:hidden",
            open
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 border-transparent opacity-0",
          )}
        >
          <ul className="flex flex-col p-2">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:bg-subtle hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
