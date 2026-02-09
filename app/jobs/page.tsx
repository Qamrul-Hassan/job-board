"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import JobCard from "@/components/JobCard";
import JobFilter from "@/components/JobFilter";
import { Job } from "@/lib/types";
import { getJobs } from "@/lib/api";

export default function JobsPage() {
  const searchParams = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState(() => searchParams.get("query") || "");

  useEffect(() => {
    getJobs()
      .then((data) => setJobs(data.jobs || []))
      .catch(() => setJobs([]));
  }, []);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) =>
        job.title.toLowerCase().includes(query.toLowerCase())
      ),
    [jobs, query]
  );

  return (
    <>
      <section className="relative h-[340px] overflow-hidden md:h-[420px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/banner.jpg"
            alt="Hiring banner"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,16,34,0.72)_10%,rgba(10,24,52,0.55)_42%,rgba(10,24,52,0.3)_72%,rgba(10,24,52,0.15)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Explore Jobs</h1>
            <p className="mt-3 max-w-xl text-white/85">Hand-picked opportunities with global teams hiring right now.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12">
        <div className="mx-auto max-w-5xl px-6">
          <JobFilter query={query} setQuery={setQuery} />
        </div>
      </section>

      <section className="mt-10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Available Roles</h2>
            <p className="text-sm text-muted-foreground">{filteredJobs.length} jobs found</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}

            {filteredJobs.length === 0 && (
              <div className="col-span-full rounded-2xl border border-white/70 bg-white/75 p-14 text-center shadow-[0_16px_30px_rgba(24,62,131,0.1)]">
                <h3 className="text-xl font-semibold">No jobs found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search keywords.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
