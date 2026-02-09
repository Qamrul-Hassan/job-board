export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <div className="glow-card rounded-3xl p-8">
        <div className="h-6 w-1/3 animate-pulse rounded bg-muted" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-5/6 animate-pulse rounded bg-muted" />
        <div className="mt-8 h-44 w-full animate-pulse rounded-2xl bg-muted" />
      </div>
    </div>
  );
}
