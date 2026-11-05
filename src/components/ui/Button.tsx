import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "editorial";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-body uppercase font-bold tracking-wider transition-all duration-200 rounded-none focus:outline-none focus:ring-1 focus:ring-primary-container disabled:opacity-50 disabled:pointer-events-none select-none";

    const variantStyles = {
      primary:
        "bg-primary-container text-on-primary-fixed hover:bg-primary hover:text-surface-container-lowest",
      secondary:
        "bg-surface-2 text-white border border-white/15 hover:border-primary-container hover:text-primary-container hover:bg-surface-1",
      ghost:
        "bg-transparent text-white border border-white/20 hover:border-primary-container hover:text-primary-container",
      editorial:
        "bg-transparent text-white hover:text-primary-container p-0 border-b border-white/30 hover:border-primary-container !tracking-widest",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-label-md",
      md: "px-6 py-3 text-label-lg",
      lg: "px-8 py-4 text-label-lg text-base",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "editorial" && sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="mr-2 inline-flex">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="ml-2 inline-flex">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
