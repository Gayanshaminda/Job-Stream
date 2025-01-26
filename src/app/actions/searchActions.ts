
"use server";

import { addOrgAndUserData, JobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";

export async function fetchFilteredJobs(filters: any) {
    await mongoose.connect(process.env.MONGO_URI as string);
    
    const { user } = await getUser(); 

    const filteredJobs = await addOrgAndUserData(
        await JobModel.find(filters, {}, { sort: "-createdAt" }),
        user
    );

    return filteredJobs;
}
