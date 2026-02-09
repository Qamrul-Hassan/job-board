"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SaveJobButton from "@/components/SaveJobButton";
import { Job } from "@/lib/types";
import { getCompanyLogo } from "@/lib/companyLogo";

interface JobCardProps {
  job: Job;
  showRemove?: boolean;
  onRemove?: (id: number) => void;
}

export default function JobCard({ job, showRemove, onRemove }: JobCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1">
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-primary/15 blur-2xl" />

      <div className="flex items-start gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-white/70 bg-white">
          <Image
            src={getCompanyLogo(job.company_name)}
            alt={job.company_name}
            fill
            className="object-contain p-1"
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />

          <span className="absolute text-sm font-semibold text-gray-500">{job.company_name?.charAt(0)}</span>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{job.title}</h3>
          <p className="text-sm text-muted-foreground">{job.company_name}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{job.job_type}</Badge>
        <Badge variant="secondary">{job.category}</Badge>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-sm text-muted-foreground">{job.candidate_required_location}</span>

        <div className="flex items-center gap-3">
          <Link href={`/jobs/${job.id}`} className="text-sm font-semibold text-primary transition-opacity hover:opacity-80">
            View
          </Link>

          {showRemove && onRemove ? (
            <button
              onClick={() => onRemove(job.id)}
              className="text-sm font-semibold text-destructive transition-opacity hover:opacity-80"
            >
              Remove
            </button>
          ) : (
            <SaveJobButton job={job} />
          )}
        </div>
      </div>
    </Card>
  );
}
