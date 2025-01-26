"use client"; // Add this line to mark this as a client component
import Jobs from "@/app/components/Jobs";
import JobFilters from "@/app/components/JobFilters";
import { fetchFilteredJobs } from "../actions/searchActions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Job } from "@/models/Job";

export default function JobsPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.searchQuery || "");
  const router = useRouter();

  // Fetch filtered jobs based on searchParams
  useEffect(() => {
    const fetchJobs = async () => {
      const filters: any = {};

      if (searchParams.searchQuery) {
        filters.title = { $regex: searchParams.searchQuery, $options: "i" };
      }

      // Add other filters as needed
      const jobs = await fetchFilteredJobs(filters);
      setFilteredJobs(jobs);
    };

    fetchJobs();
  }, [searchParams]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const currentParams = new URLSearchParams(window.location.search);
    if (searchQuery) {
      currentParams.set("searchQuery", searchQuery);
    } else {
      currentParams.delete("searchQuery");
    }
    router.push(`?${currentParams.toString()}`); // Update URL with the new search query
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row items-center gap-4 p-6 bg-white">
        <input
          type="text"
          name="searchQuery"
          placeholder="Search for Job"
          className="border p-2 rounded w-full lg:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Search
        </button>
      </form>

      <div className="flex flex-col lg:flex-row flex-1 gap-6 bg-gray-100">
        {/* Sidebar Filters */}
        <JobFilters onFilter={function (filters: any): void {
          throw new Error("Function not implemented.");
        } } />

        {/* Job Ads */}
        <div className="w-full lg:w-3/4 ml-5 max-h-[100vh] overflow-y-auto scrollable-container">
          <Jobs header="" jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}
