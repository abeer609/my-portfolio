import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3">
      <span aria-hidden="true" className="block h-px w-6 bg-accent" />
      <span className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
        {children}
      </span>
    </p>
  );
}
