"use client";

import { useState } from "react";
import JobCard from "@/components/JobCard";
import { Job } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SavedJobsPage() {
  const [jobs] = useState<Job[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("savedJobs") || "[]");
  });

  return (
    <>
      {/* BANNER (same as Jobs page) */}
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
            <p className="mt-3 text-lg text-white/80 max-w-xl">
              Opportunities you bookmarked for later
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {jobs.length === 0 ? (
          <div className="text-center max-w-lg mx-auto">
            <div className="text-6xl mb-6">🔖</div>
            <h2 className="text-2xl font-semibold">
              No saved jobs yet
            </h2>
            <p className="mt-3 text-muted-foreground">
              Save jobs from the listings to keep track of opportunities.
            </p>

            <Link href="/jobs">
              <Button className="mt-8 px-8">
                Browse jobs
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold">
                Your saved jobs
              </h2>
              <p className="text-muted-foreground mt-1">
                {jobs.length} job{jobs.length > 1 ? "s" : ""} saved
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
