import { Rocket } from "lucide-react";
import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line sm:mt-20 lg:mt-[36px]">
      <div className="page-container py-8">
        <div className="flex flex-col items-center gap-2 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>{footer.copyright}</p>
          <p>{footer.built}</p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {footer.badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex h-12 items-center gap-3 rounded-xl border border-line bg-surface px-4"
            >
              {index === 0 ? (
                <Rocket className="size-4 text-accent" aria-hidden="true" />
              ) : (
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-accent"
                />
              )}
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold text-ink">
                  {badge.title}
                </span>
                <span className="text-xs text-muted">{badge.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
