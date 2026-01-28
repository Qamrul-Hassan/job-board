import { Input } from "@/components/ui/input";

export default function JobFilter({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <Input
        placeholder="Search jobs by title…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}