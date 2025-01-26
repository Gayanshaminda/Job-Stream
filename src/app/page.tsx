import Hero from "@/app/components/Hero";
import Jobs from "@/app/components/Jobs";
import { addOrgAndUserData, JobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";

import JobCategories from "./components/Catogories";
import ConnectPage from "./components/Connect";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import HowItWorks from "./components/How";

export default async function Home() {
  const { user } = await getUser();
  await mongoose.connect(process.env.MONGO_URI as string);
  const latestJobs = await addOrgAndUserData(
    await JobModel.find({}, {}, { limit: 5, sort: "-createdAt" }),
    user
  );
  return (
    <>
      <div className="flex">
        <Hero />
      </div>

      <div className="relative overflow-hidden p-4">
        <HowItWorks />
      </div>

      <div>
        <JobCategories />
      </div>

      <div>
        <ConnectPage />
      </div>

      <div>
        <Choose />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
