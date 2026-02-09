"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="glow-card rounded-2xl p-10">
        <h2 className="text-2xl font-semibold text-foreground">Something went wrong</h2>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Button onClick={() => reset()} className="mt-6">
          Try Again
        </Button>
      </div>
    </div>
  );
}
