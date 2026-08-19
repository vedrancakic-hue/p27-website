import Link from "next/link";
import { type ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:brightness-110 shadow-[0_0_0_1px_rgba(50,213,255,0.25),0_0_40px_-12px_rgba(50,213,255,0.55)]",
  secondary:
    "bg-transparent text-text border border-border-strong hover:border-accent/50 hover:bg-white/[0.03]",
  ghost: "bg-transparent text-muted hover:text-text",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: ComponentProps<"button">["onClick"];
} & Omit<ComponentProps<"button">, "className" | "children" | "onClick">;

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick as ComponentProps<"a">["onClick"]}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as ComponentProps<typeof Link>["onClick"]}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
