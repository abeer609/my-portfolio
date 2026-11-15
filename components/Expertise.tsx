import { expertise } from "@/data/content";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightedText } from "@/components/ui/Highlight";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="border-b border-line"
    >
      <div className="page-container pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[90px] lg:pb-[59px]">
        <Reveal>
          <SectionLabel>{expertise.label}</SectionLabel>
          <h2
            id="expertise-title"
            className="mt-5 text-display-sm font-semibold sm:text-display-md"
          >
            <HighlightedText text={expertise.title} words={expertise.highlights} />
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.groups.map((group, index) => (
            <Reveal
              key={group.index}
              delay={index * 70}
              className={index === 2 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <Card className="flex h-full min-h-[172px] flex-col p-4">
                <span className="text-xs text-muted">{group.index}</span>
                <h3 className="mt-2 text-md font-semibold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {group.chips.map((chip) => (
                    <li key={chip}>
                      <Chip>{chip}</Chip>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
