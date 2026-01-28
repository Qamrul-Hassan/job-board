import { getJobs } from "@/lib/api";
import JobCard from "@/components/JobCard";

export default async function JobsPage() {
  const data = await getJobs();

  return (
    <section className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.jobs.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}