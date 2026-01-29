"use client";

import { Job } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SaveJobButton({ job }: { job: Job }) {
  const [saved, setSaved] = useState(() => {
    const existing = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );
    return existing.some((j: Job) => j.id === job.id);
  });

  function handleSave() {
    const existing: Job[] = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    if (!existing.find((j) => j.id === job.id)) {
      localStorage.setItem(
        "savedJobs",
        JSON.stringify([...existing, job])
      );
      setSaved(true);
    }
  }

  return (
    <Button onClick={handleSave} disabled={saved}>
      {saved ? "Saved" : "Save job"}
    </Button>
  );
}