"use client";

import Image from "next/image";
import { useState } from "react";
import JobCard from "@/components/JobCard";
import { Job } from "@/lib/types";

export default function SavedJobsPage() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      return JSON.parse(localStorage.getItem("savedJobs") || "[]");
    } catch {
      return [];
    }
  });

  function handleRemove(id: number) {
    const updated = jobs.filter((job) => job.id !== id);
    setJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  }

  return (
    <>
      <section className="relative h-[320px] overflow-hidden md:h-[400px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/banner.jpg"
            alt="Hiring banner"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,16,34,0.74)_10%,rgba(10,24,52,0.57)_42%,rgba(10,24,52,0.32)_72%,rgba(10,24,52,0.16)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Saved Jobs</h1>
            <p className="mt-3 text-white/85">Your shortlist of roles to revisit.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          {jobs.length === 0 ? (
            <div className="rounded-2xl border border-white/75 bg-white/80 p-14 text-center shadow-[0_16px_34px_rgba(24,62,131,0.1)]">
              <h2 className="text-2xl font-semibold">No saved jobs</h2>
              <p className="mt-2 text-muted-foreground">Save jobs to keep track of the opportunities you like.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} showRemove onRemove={handleRemove} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
