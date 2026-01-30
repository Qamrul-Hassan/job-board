import axios from "axios";

const api = axios.create({
  baseURL: "https://remotive.com/api",
});

export async function getJobs() {
  const res = await api.get("/remote-jobs");
  return res.data;
}
