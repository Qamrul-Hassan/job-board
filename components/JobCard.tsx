// components/JobCard.tsx
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/lib/types";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <Card className="group rounded-xl border bg-white p-6
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl">
      
      <div className="space-y-5">
        <div>
          <h2 className="text-lg font-semibold leading-snug
            group-hover:text-primary transition">
            {job.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {job.company_name}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>{job.job_type}</Badge>
          <Badge variant="secondary">{job.category}</Badge>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground">
            {job.candidate_required_location}
          </span>

          <Link
            href={`/jobs/${job.id}`}
            className="text-sm font-medium text-primary"
          >
            View →
          </Link>
        </div>
      </div>
    </Card>
  );
}