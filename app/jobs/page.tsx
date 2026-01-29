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
    getJobs()
      .then((data) => setJobs(data.jobs || []))
      .catch(() => setJobs([]));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* HERO */}
      <section className="relative h-[260px] md:h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/career.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Explore Jobs
            </h1>
            <p className="mt-3 text-lg text-white/80 max-w-xl">
              Hand-picked roles from companies hiring right now
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <JobFilter query={query} setQuery={setQuery} />
        </div>
      </section>

      {/* RESULTS */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-span-full text-center py-20">
                <h3 className="text-xl font-semibold">No jobs found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search keywords
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
