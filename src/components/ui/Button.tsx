import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-green disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-green text-white hover:bg-brand-green-light shadow-sm":
              variant === "primary",
            "bg-brand-sage text-white hover:bg-brand-sage/90 shadow-sm":
              variant === "secondary",
            "border border-brand-border bg-transparent hover:bg-brand-gray text-brand-ink":
              variant === "outline",
            "hover:bg-brand-gray text-brand-ink": variant === "ghost",
            "text-brand-green underline-offset-4 hover:underline":
              variant === "link",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-6 py-2": size === "md",
            "h-12 px-8 py-3 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
