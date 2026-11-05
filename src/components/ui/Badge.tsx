import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "active" | "outline" | "editorial";
  showDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  showDot = false,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-3 py-1 font-body text-label-technical uppercase tracking-widest rounded-none select-none";

  const variantStyles = {
    default: "bg-surface-2 text-editorial-grey border border-white/10",
    active: "bg-surface-1 text-kinetic-lime border border-kinetic-lime/40",
    outline: "bg-transparent text-editorial-muted border border-white/20",
    editorial: "bg-white/5 text-editorial-grey border-b border-white/20 px-2 py-0.5",
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {showDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
      )}
      <span>{children}</span>
    </div>
  );
};
