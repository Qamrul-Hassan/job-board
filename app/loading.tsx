export default function Loading() {
  return (
    <div className="container py-10">
      <div className="space-y-4">
        <div className="h-6 w-1/3 bg-muted animate-pulse rounded" />
        <div className="h-4 w-full bg-muted animate-pulse rounded" />
        <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
      </div>
    </div>
  );
}