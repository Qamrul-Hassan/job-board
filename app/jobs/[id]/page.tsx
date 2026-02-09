import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getJobs } from "@/lib/api";
import { Job } from "@/lib/types";

function sanitizeHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "");
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getJobs();
  const job = (data.jobs || []).find((item: Job) => String(item.id) === id);

  if (!job) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <div className="glow-card rounded-3xl p-8 md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">{job.company_name}</p>
            <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">{job.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{job.candidate_required_location}</p>
          </div>

          <div className="flex gap-2">
            <Badge>{job.job_type}</Badge>
            <Badge variant="secondary">{job.category}</Badge>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/70 bg-white/75 p-6 text-sm leading-7 text-foreground/90 shadow-[0_12px_24px_rgba(24,62,131,0.08)]">
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(job.description) }} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/jobs">Back to Jobs</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/saved">View Saved Jobs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
