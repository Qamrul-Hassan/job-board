import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/lib/types";
import { getCompanyLogo } from "@/lib/companyLogo";

export default function JobCard({ job }: { job: Job }) {
  return (
    <Card className="group rounded-xl bg-white p-6 border
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 rounded-md bg-gray-100 overflow-hidden">
          <Image
            src={getCompanyLogo(job.company_name)}
            alt={job.company_name}
            fill
            className="object-contain p-1"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">
            {job.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {job.company_name}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>{job.job_type}</Badge>
        <Badge variant="secondary">{job.category}</Badge>
      </div>

      <div className="mt-6 flex items-center justify-between">
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
    </Card>
  );
}