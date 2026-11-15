import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightedText } from "@/components/ui/Highlight";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-b border-line"
    >
      <div className="page-container pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[99px] lg:pb-[82px]">
        <Reveal>
          <SectionLabel>{projects.label}</SectionLabel>
          <h2
            id="projects-title"
            className="mt-5 text-display-sm font-semibold sm:text-display-md"
          >
            <HighlightedText
              text={projects.title.replace(/\.$/, "")}
              words={projects.highlights}
            />
            <span className="text-accent">.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
