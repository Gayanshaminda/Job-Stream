import JobRow from "@/app/components/JobRow";
import type { Job } from "@/models/Job";

export default function Jobs({
  header,
  jobs,
  onDelete,
  onToast,
}: {
  header: string;
  jobs: Job[];
  onDelete?: (jobId: string) => void;
  onToast?: (message: string, type: "success" | "error") => void;
}) {
  return (
    <div className="bg-gray-100 min-h-screen py-6 px-3">
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl mb-6">{header || ""}</h2>

        {/* Grid layout for job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!jobs?.length && (
            <div className="col-span-full text-center">No jobs found</div>
          )}
          {jobs && jobs.map((job) => <JobRow key={job._id} jobDoc={job} onDelete={onDelete} onToast={onToast} />)}
        </div>
      </div>
    </div>
  );
}
