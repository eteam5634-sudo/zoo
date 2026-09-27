import type { ReactNode } from "react";

const variants = {
  cream:
    "bg-cream text-forest hover:bg-sand focus-visible:bg-sand",
  outline:
    "border border-cream/45 text-cream hover:border-cream hover:bg-cream hover:text-forest",
  forest:
    "bg-forest text-cream hover:bg-forest-mid",
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex min-h-12 items-center justify-center px-6 text-[0.72rem] font-medium tracking-[0.2em] uppercase transition-colors duration-300";

export function Button({
  children,
  variant = "cream",
  className = "",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
