import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2",
        {
          "border-transparent bg-brand-green text-white hover:bg-brand-green-light":
            variant === "default",
          "border-transparent bg-brand-sage text-white hover:bg-brand-sage/80":
            variant === "secondary",
          "text-brand-ink border-brand-border": variant === "outline",
        },
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
