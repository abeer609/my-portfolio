import {
  SiTypescript,
  SiVuetify,
  SiNuxt,
  SiNextdotjs,
  SiDjango,
} from "react-icons/si";
import { Globe } from "lucide-react";
import { coreStack } from "@/data/content";
import { cn } from "@/lib/cn";

const iconStyles: Record<string, string> = {
  Next: "text-[#3178C6]",
  Nuxt: "text-[#00DC82]",
  Vuetify: "text-[#1697F6]",
  Typescript: "text-[#3178C6]",
  i18n: "text-accent",
};

const icons: Record<string, React.ReactNode> = {
  django: <SiDjango className="size-4" aria-hidden="true"/>,
  Next: <SiNextdotjs className="size-4" aria-hidden="true" />,
  Nuxt: <SiNuxt className="size-4" aria-hidden="true" />,
  Vuetify: <SiVuetify className="size-4" aria-hidden="true" />,
  Typescript: <SiTypescript className="size-4" aria-hidden="true" />,
  i18n: <Globe className="size-4" aria-hidden="true" />,
};

export function CoreStackCard() {
  return (
    <div className="card-surface w-full rounded-2xl p-5">
      <p className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
        Core Stack
      </p>

      <ul className="mt-3">
        {coreStack.map((item, index) => (
          <li
            key={item.name}
            className={cn(
              "flex items-center justify-between gap-4 py-2.5",
              index > 0 && "border-t border-line",
            )}
          >
            <span className="flex items-center gap-2.5">
              <span
                className={cn(
                  "grid size-4 shrink-0 place-items-center",
                  iconStyles[item.name],
                )}
              >
                {icons[item.name]}
              </span>
              <span className="text-sm font-semibold text-ink">
                {item.name}
              </span>
            </span>
            <span className="text-right text-xs text-muted">{item.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
