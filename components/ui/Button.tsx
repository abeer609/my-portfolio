import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
};

type LinkProps = BaseProps & {
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  >;

type ActionProps = BaseProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-strong text-white hover:bg-accent-hover border border-transparent",
  secondary:
    "border border-line bg-surface text-ink hover:border-line-strong hover:bg-subtle",
};

const base =
  "inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Button(props: LinkProps | ActionProps) {
  const {
    children,
    variant = "secondary",
    icon,
    className,
    href,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span aria-hidden="true" className="inline-flex [&>svg]:size-3.5">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (typeof href === "string") {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
