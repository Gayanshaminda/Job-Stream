"use client"; // Make sure this is present to indicate that this is a Client Component
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobFilters({ onFilter, className = "" }: { onFilter: (filters: any) => void; className?: string }) {
  const [minSalary, setMinSalary] = useState<number | undefined>(undefined);
  const [maxSalary, setMaxSalary] = useState<number | undefined>(undefined);
  const [jobType, setJobType] = useState<string[]>([]);
  const [workStyles, setWorkStyles] = useState<string[]>([]);

  const router = useRouter();

  const handleApplyFilters = () => {
    onFilter({
      minSalary,
      maxSalary,
      jobType,
      workStyles,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const { checked, value } = e.target;

    if (category === "jobType") {
      setJobType((prev) => 
        checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    } else if (category === "workStyles") {
      setWorkStyles((prev) => 
        checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className={`p-4 bg-white ${className}`}>
      <h2 className="font-bold mb-4">Filter Jobs</h2>

      {/* Job Type */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Job Type</h3>
        <div className="flex flex-col gap-2">
          {["Full-time", "Part-time", "Project"].map(type => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                value={type}
                onChange={e => handleCheckboxChange(e, "jobType")}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Work Styles */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Work Styles</h3>
        <div className="flex flex-col gap-2">
          {["Fully remote", "On-site", "Hybrid-remote"].map(style => (
            <label key={style} className="flex items-center">
              <input
                type="checkbox"
                value={style}
                onChange={e => handleCheckboxChange(e, "workStyles")}
                className="mr-2"
              />
              {style}
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Salary Range ($)</h3>
        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minSalary || ""}
            onChange={e => setMinSalary(Number(e.target.value))}
            className="w-1/2 border rounded p-1"
            min={0}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxSalary || ""}
            onChange={e => setMaxSalary(Number(e.target.value))}
            className="w-1/2 border rounded p-1"
            min={0}
          />
        </div>
      </div>

      {/* Apply Filters Button */}
      <button onClick={handleApplyFilters} className="bg-blue-600 text-white px-4 py-2 rounded">
        Apply Filters
      </button>
    </div>
  );
}
