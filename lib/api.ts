import axios from "axios";

const api = axios.create({
  baseURL: "https://remotive.com/api",
});

export async function getJobs() {
  try {
    const res = await api.get("/remote-jobs");
    return res.data;
  } catch (error) {
    console.error("Failed to fetch jobs", error);
    return { jobs: [] };
  }
}
