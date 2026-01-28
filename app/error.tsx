"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="container py-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Something went wrong
      </h2>
      <p className="text-muted-foreground mb-6">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded bg-black text-white"
      >
        Try again
      </button>
    </div>
  );
}