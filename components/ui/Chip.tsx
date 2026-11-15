import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border border-line bg-subtle px-2 text-xs text-body transition-colors duration-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
