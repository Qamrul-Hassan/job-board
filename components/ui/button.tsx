import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary via-blue-500 to-cyan-400 text-primary-foreground shadow-[0_10px_24px_rgba(38,98,216,0.35),inset_0_1px_0_rgba(255,255,255,0.45)] before:bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.5)_48%,transparent_68%)] hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(38,98,216,0.42),inset_0_1px_0_rgba(255,255,255,0.55)] hover:before:opacity-100",
        destructive:
          "bg-destructive text-white shadow-[0_10px_20px_rgba(214,58,43,0.3)] hover:bg-destructive/90 hover:-translate-y-0.5",
        outline:
          "border border-primary/25 bg-white/75 text-foreground backdrop-blur-sm shadow-[0_6px_16px_rgba(31,73,157,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] before:bg-[radial-gradient(circle_at_top,rgba(130,185,255,0.28),transparent_55%)] hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:before:opacity-100",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_6px_14px_rgba(31,73,157,0.1),inset_0_1px_0_rgba(255,255,255,0.85)] hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-[0_8px_18px_rgba(24,62,131,0.12)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-11 rounded-xl px-6",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
