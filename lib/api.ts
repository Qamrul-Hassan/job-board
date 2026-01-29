export async function getJobs() {
  const res = await fetch(
    "https://remotive.com/api/remote-jobs"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json(); // MUST return { jobs: [] }
}