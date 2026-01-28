import { getJobs } from "@/lib/api";
import JobCard from "@/components/JobCard";
import { Job } from "@/lib/types";

export default async function JobsPage() {
  const data = await getJobs();

  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Open Positions</h1>
        <p className="text-muted-foreground mt-2">
          Explore jobs from companies worldwide
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}