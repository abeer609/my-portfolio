import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Highlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("text-accent", className)}>{children}</span>;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Renders a sentence, highlighting the supplied words with the accent colour.
 * Matching is case-insensitive and keeps the original casing.
 */
export function HighlightedText({
  text,
  words = [],
}: {
  text: string;
  words?: string[];
}) {
  if (words.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${words.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
          <Highlight key={`${part}-${index}`}>{part}</Highlight>
        ) : (
          part
        ),
      )}
    </>
  );
}
