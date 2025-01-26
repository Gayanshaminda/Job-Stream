// src/app/actions/fetchJobs.ts
import { JobModel } from "@/models/Job"; // Adjust the path as necessary
import mongoose from "mongoose";

export async function fetchFilteredJobs(filters: any) {
  await mongoose.connect(process.env.MONGO_URI as string);

  const jobs = await JobModel.find(filters, {}, { sort: "-createdAt" }).lean(); // Use lean() for performance
  return jobs;
}
