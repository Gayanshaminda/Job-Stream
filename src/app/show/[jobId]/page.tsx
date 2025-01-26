import { JobModel } from "@/models/Job";
import mongoose from "mongoose";
import Image from "next/image";

type PageProps = {
  params: {
    jobId: string;
  };
};

export default async function SingleJobPage(props: PageProps) {
  const jobId = props.params.jobId;
  await mongoose.connect(process.env.MONGO_URI as string);
  const jobDoc = await JobModel.findById(jobId);
  return (
    <div className=" mt-8 my-6 mx-28">
      <div className="">
        <div className="grow">
          <h1 className="text-5xl mb-5 font-medium ">{jobDoc.title}</h1>
          <div className="flex space-x-6 mt-2">
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-lg">
              {jobDoc.remote}
            </span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-lg">
              {jobDoc.type}-time
            </span>
          </div>

          <div className="text-lg capitalize mt-5">
            <div className="text-gray-700">
              {jobDoc.city}, {jobDoc.state}
            </div>
            <div className="text-black text-2xl">{jobDoc.country}</div>
          </div>

          <div className="text-lg">{jobDoc.salary}$ k/year</div>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 -mt-36">
            <Image
              src={jobDoc?.jobIcon}
              alt={"job icon"}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="whitespace-pre-line text-lg text-gray-600 mt-16">
        {jobDoc.description}
      </div>

      <div className="mt-4 bg-gray-200 p-8 rounded-lg">
        <h3 className="font-bold text-lg -mt-2 mb-4">Apply by contacting us</h3>
        <div className="flex gap-4">
          <Image
            src={jobDoc.contactPhoto}
            alt={"contact person"}
            width={500}
            height={500}
            className="w-auto h-auto max-w-24 max-h-24"
          />

          <div className="grid grid-cols-2 gap-2 -ml-20">
            <div className="text-right pr-2">Name:</div>
            <div>{jobDoc.contactName}</div>

            <div className="text-right pr-2"> Email :</div>
            <div>{jobDoc.contactEmail}</div>

            <div className="text-right pr-2">Phone:</div>
            <div>{jobDoc.contactPhone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
