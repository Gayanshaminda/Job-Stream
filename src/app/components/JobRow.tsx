"use client";
import TimeAgo from "@/app/components/TimeAgo";
import { Job } from "@/models/Job";
import { faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function JobRow({ jobDoc }: { jobDoc: Job }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await axios.delete("/api/jobs?id=" + jobDoc._id);
      alert("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Failed to delete the job. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-200 relative h-[260px] hover:scale-105 flex flex-col">
      <div className="absolute top-4 right-4 cursor-pointer">
        <FontAwesomeIcon
          className="text-gray-300 hover:text-red-500"
          icon={faHeart}
        />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex gap-3">
          <img
            className="w-12 h-12 object-cover rounded-md -ml-2"
            src={jobDoc?.jobIcon || "/fallback-image.png"}
            alt={`${jobDoc.title} icon`}
            onError={(e) => (e.currentTarget.src = "/fallback-image.png")}
          />
          <div className="flex-grow">
            <Link
              href={`/jobs/${jobDoc.orgId}`}
              className="text-lg text-gray-500 hover:underline"
            >
              {jobDoc.orgName || "?"}
            </Link>
            <h3 className="text-lg font-semibold mt-1 truncate">
              <Link className="hover:underline" href={"/show/" + jobDoc._id}>
                {jobDoc.title}
              </Link>
            </h3>

            {/* Remote and Job Type Sections */}
            <div className="flex space-x-6 mt-2 -ml-6">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm">
                {jobDoc.remote}
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm">
                {jobDoc.type}-time
              </span>
            </div>

            {/* Location Section */}
            <div className="text-sm capitalize mt-2">
              <div className="text-gray-400">
                {jobDoc.city}, {jobDoc.state}
              </div>
              <div className="text-black">{jobDoc.country}</div>
            </div>

            {/* Time Posted Section */}
            {jobDoc.createdAt && (
              <div className="mt-2 text-sm text-gray-500">
                <TimeAgo createdAt={jobDoc.createdAt} />
              </div>
            )}
          </div>
        </div>

        {/* Edit and Delete Options */}
        {jobDoc.isAdmin && (
          <div className="mt-auto flex justify-between ">
            <Link
              href={`/jobs/edit/${jobDoc._id}`}
              className="text-blue-600 hover:underline mr-2 hover:scale-105"
            >
              <FontAwesomeIcon icon={faEdit} />
            </Link>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isLoading}
              className="text-red-500 hover:underline hover:scale-105"
            >
              {isLoading ? "Deleting..." : <FontAwesomeIcon icon={faTrash} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
