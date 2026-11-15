import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="card-surface group flex h-full flex-col rounded-2xl p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-line-strong">
      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-line bg-subtle">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, var(--accent-glow), transparent 40%)",
          }}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="text-xs tracking-[0.08em] text-accent uppercase">
          {project.id}
        </span>
        <span className="text-right text-xs text-muted">{project.category}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-ink">{project.title}</h3>

      <p className="mt-3 text-xs leading-[18px] text-body text-justify">
        {project.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <span className="text-xs font-semibold text-ink">{project.meta}</span>
        <a
          href={project.href}
          aria-label={`View ${project.title}`}
          {...(project.href.startsWith("#")
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-body transition-colors duration-200 hover:border-line-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
