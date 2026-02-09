import { Input } from "@/components/ui/input";

export default function JobFilter({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  return (
    <div className="glass-surface rounded-2xl p-4 shadow-[0_20px_40px_rgba(26,64,136,0.16)] md:p-6">
      <Input
        placeholder="Search jobs by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
