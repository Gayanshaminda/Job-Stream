import { fetchFilteredJobs } from "../actions/searchActions";
import JobsClient from "./JobsClient";

export default async function JobsPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  
  const filters: any = {};

  if (searchParams.searchQuery) {
    filters.searchQuery = searchParams.searchQuery;
  }

  const initialJobs = await fetchFilteredJobs(filters);

  return <JobsClient initialJobs={initialJobs} />;
}
