import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card-surface rounded-2xl transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-line-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}
