import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground/90 selection:bg-primary selection:text-primary-foreground h-11 w-full min-w-0 rounded-xl border border-white/70 bg-white/85 px-4 py-2 text-base shadow-[0_8px_18px_rgba(24,62,131,0.08)] transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary/50 focus-visible:ring-[3px] focus-visible:ring-primary/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
