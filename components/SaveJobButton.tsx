"use client";

import { useEffect, useState } from "react";
import { Job } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function SaveJobButton({ job }: { job: Job }) {
  const [saved, setSaved] = useState(false);

  // ✅ Run ONLY on client
  useEffect(() => {
    const existing: Job[] = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    setSaved(existing.some((j) => j.id === job.id));
  }, [job.id]);

  function handleSave() {
    const existing: Job[] = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    if (!existing.find((j) => j.id === job.id)) {
      const updated = [...existing, job];
      localStorage.setItem("savedJobs", JSON.stringify(updated));
      setSaved(true);
    }
  }

  return (
    <Button
      size="sm"
      onClick={handleSave}
      disabled={saved}
    >
      {saved ? "Saved" : "Save"}
    </Button>
  );
}
