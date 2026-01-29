"use client";

import { useEffect, useState } from "react";
import JobCard from "@/components/JobCard";
import { Job } from "@/lib/types";

export default function SavedJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );
    setJobs(saved);
  }, []);

  function handleRemove(id: number) {
    const updated = jobs.filter((job) => job.id !== id);
    setJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  }

  if (jobs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold">No saved jobs</h2>
        <p className="mt-2 text-muted-foreground">
          Save jobs to view them here later.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* BANNER (same style as jobs page) */}
      <section className="relative h-[260px] md:h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/career.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Saved Jobs
            </h1>
            <p className="mt-3 text-lg text-white/80">
              Jobs you want to come back to
            </p>
          </div>
        </div>
      </section>

      {/* SAVED JOBS */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              showRemove
              onRemove={handleRemove}
            />
          ))}
        </div>
      </section>
    </>
  );
}
