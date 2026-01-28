"use client";

import { useState } from "react";
import JobCard from "@/components/JobCard";
import { Job } from "@/lib/types";

export default function SavedJobsPage() {
  const [jobs] = useState<Job[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("savedJobs") || "[]");
  });

  if (jobs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">No saved jobs</h2>
        <p className="text-muted-foreground mt-2">
          Save jobs to view them here later.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Saved Jobs</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}