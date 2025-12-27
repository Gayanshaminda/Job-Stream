
"use server";

import { addOrgAndUserData, JobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";

export async function fetchFilteredJobs(filters: any) {
    await mongoose.connect(process.env.MONGO_URI as string);

    const { user } = await getUser();

    if (filters.searchQuery) {
        const searchRegex = new RegExp(filters.searchQuery, 'i'); // case-insensitive regex

        // Search across multiple fields: title, company name, job type, location, etc.
        filters.$or = [
            { title: searchRegex },           
            { orgName: searchRegex },         
            { type: searchRegex },           
            { remote: searchRegex },          
            { city: searchRegex },          
            { state: searchRegex },         
            { country: searchRegex },         
            { description: searchRegex }      
        ];

        delete filters.searchQuery;
    }

    const filteredJobs = await addOrgAndUserData(
        await JobModel.find(filters, {}, { sort: "-createdAt" }),
        user
    );
    return filteredJobs;
}
