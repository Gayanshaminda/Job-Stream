"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Job } from "@/models/Job";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Jobs from "@/app/components/Jobs";
import JobFilters from "@/app/components/JobFilters";
import Toast from "@/app/components/Toast";
import { fetchFilteredJobs } from "../actions/searchActions";

interface JobsClientProps {
  initialJobs: Job[];
}

export default function JobsClient({ initialJobs }: JobsClientProps) {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParamsHook = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleDelete = (jobId: string) => {
    setFilteredJobs(prev => prev.filter(job => job._id !== jobId));
  };

  const handleToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500); // Clear after toast duration + buffer
  }; 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // If input becomes empty, clear the URL parameter immediately and fetch all jobs
    if (!value.trim()) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.delete("searchQuery");
      router.replace(`?${currentParams.toString()}`);
      
      // Fetch all jobs immediately
      fetchFilteredJobs({}).then(setFilteredJobs);
    }
  };

  // Fetch filtered jobs when search params change
  useEffect(() => {
    const currentQuery = searchParamsHook.get("searchQuery") || "";
    
    // Fetch jobs based on current query
    const filters: any = {};
    if (currentQuery) {
      filters.searchQuery = currentQuery;
      fetchFilteredJobs(filters).then(setFilteredJobs);
    }
  }, [searchParamsHook]);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentParams = new URLSearchParams(window.location.search);
    if (searchQuery.trim()) {
      currentParams.set("searchQuery", searchQuery.trim());
    } else {
      currentParams.delete("searchQuery");
    }
    router.push(`?${currentParams.toString()}`);
  };

  // Handle filter application
  const handleFilter = (filters: any) => {
    const currentQuery = searchParamsHook.get("searchQuery") || "";
    const queryFilters: any = {};

    if (currentQuery) {
      queryFilters.searchQuery = currentQuery;
    }

    if (filters.jobType && filters.jobType.length > 0) {
      queryFilters.type = { $in: filters.jobType };
    }

    if (filters.workStyles && filters.workStyles.length > 0) {
      queryFilters.remote = { $in: filters.workStyles };
    }

    if (filters.minSalary) {
      queryFilters.salary = { ...queryFilters.salary, $gte: filters.minSalary };
    }

    if (filters.maxSalary) {
      queryFilters.salary = { ...queryFilters.salary, $lte: filters.maxSalary };
    }

    fetchFilteredJobs(queryFilters).then(setFilteredJobs);
    setShowFilters(false);
  };

  // Toggle filter menu
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Fixed Header with Search Bar and Filter */}
      <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200 flex-shrink-0">
        <form onSubmit={handleSearch} className="flex items-center gap-4">
          <input
            type="text"
            name="searchQuery"
            placeholder="Search for Job"
            className="border p-2 rounded-[12px] w-full lg:w-1/2 max-w-[400px] "
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-[12px]" type="submit">
            Search
          </button>
        </form>
        <div className="relative" ref={filterRef}>
          <FontAwesomeIcon
            icon={faFilter}
            className="text-gray-600 cursor-pointer text-xl hover:text-blue-600"
            onClick={toggleFilters}
          />
          {showFilters && (
            <div className="absolute right-0 top-8 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-80">
              <JobFilters onFilter={handleFilter} className="w-full" />
            </div>
          )}
        </div>
      </div>

      {/* Scrollable Job Ads Area */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="p-6">
          <Jobs header="" jobs={filteredJobs} onDelete={handleDelete} onToast={handleToast} />
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}