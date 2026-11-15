import { ArrowUpRight } from "lucide-react";
import { about } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightedText } from "@/components/ui/Highlight";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-b border-line"
    >
      <div className="page-container pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[90px] lg:pb-[72px]">
        <Reveal>
          <SectionLabel>{about.label}</SectionLabel>
          <h2
            id="about-title"
            className="mt-5 text-display-sm font-semibold sm:text-display-md"
          >
            <HighlightedText text={about.title} words={about.highlights} />
          </h2>
          <p className="mt-7 text-sm text-body">{about.intro}</p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-sm text-body">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button
              href={about.cta.href}
              variant="primary"
              className="mt-8"
              icon={<ArrowUpRight />}
              target="_blank"
              rel="noopener noreferrer"
            >
              {about.cta.label}
            </Button>
          </Reveal>

          <Reveal delay={80}>
            <ul className="flex flex-col gap-2.5">
              {about.highlights_cards.map((card) => (
                <li
                  key={card.title}
                  className="card-surface flex items-center justify-between gap-3 rounded-xl px-4 py-4"
                >
                  <span className="whitespace-nowrap text-xs font-semibold text-ink">
                    {card.title}
                  </span>
                  <span className="text-right text-xs text-muted">
                    {card.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
