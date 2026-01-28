"use client";

import { useEffect, useState } from "react";
import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";
import { Job } from "@/lib/types";
import { getJobs } from "@/lib/api";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getJobs().then((data) => setJobs(data.jobs));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* HEADER */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold">
            Find your next opportunity
          </h1>
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <JobFilter query={query} setQuery={setQuery} />
      </section>

      {/* RESULTS */}
      <section className="bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </>
  );
}