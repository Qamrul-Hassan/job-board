"use client";

import { useEffect, useState } from "react";
import { Job } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function SaveJobButton({ job }: { job: Job }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const existing: Job[] = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(existing.some((j) => j.id === job.id));
  }, [job.id]);

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
    <Button
      size="sm"
      onClick={handleSave}
      disabled={saved}
    >
      {saved ? "Saved" : "Save"}
    </Button>
  );
}
