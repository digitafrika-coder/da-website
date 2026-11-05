import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  className?: string;
  color?: "lime" | "muted" | "white";
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  className,
  color = "lime",
}) => {
  const colorStyles = {
    lime: "text-kinetic-lime",
    muted: "text-editorial-muted",
    white: "text-white",
  };

  return (
    <span
      className={cn(
        "font-body text-label-technical uppercase tracking-widest block mb-2 font-medium select-none",
        colorStyles[color],
        className
      )}
    >
      {label}
    </span>
  );
};
