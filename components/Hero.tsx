import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { CoreStackCard } from "@/components/CoreStackCard";
import { Highlight } from "@/components/ui/Highlight";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0"
      />

      <div className="page-container relative pt-[102px] pb-16 sm:pb-24 lg:pb-[70px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_345px] lg:gap-16">
          <div>
            <p className="inline-flex h-6 items-center gap-2 rounded-full border border-line bg-subtle px-3 text-xs text-body">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              {hero.badge}
            </p>

            <h1
              id="hero-title"
              className="mt-[18px] text-display-lg font-semibold text-ink sm:text-display-xl lg:text-display-xl xl:text-hero"
            >
              {hero.titleLines.slice(0, -1).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                {hero.titleLines[hero.titleLines.length - 1]}{" "}
                <Highlight>{hero.highlight}</Highlight>
                <span className="text-ink">.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-md text-body">
              {hero.paragraph}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                className="w-full sm:w-auto"
                icon={<ArrowUpRight />}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                className="w-full sm:w-auto"
                icon={<ArrowDown />}
                download
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="lg:pt-[110px]">
            <CoreStackCard />
          </div>
        </div>
      </div>
    </section>
  );
}
