"use client";

import { useState } from "react";
import { Job } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function SaveJobButton({ job }: { job: Job }) {
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const existing: Job[] = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    return existing.some((j) => j.id === job.id);
  });

  function handleSave() {
    const existing: Job[] = JSON.parse(localStorage.getItem("savedJobs") || "[]");

    if (!existing.find((j) => j.id === job.id)) {
      localStorage.setItem("savedJobs", JSON.stringify([...existing, job]));
      setSaved(true);
    }
  }

  return (
    <Button size="sm" variant={saved ? "secondary" : "default"} onClick={handleSave} disabled={saved}>
      {saved ? "Saved" : "Save"}
    </Button>
  );
}
