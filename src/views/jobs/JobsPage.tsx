import Title from "../../components/Title";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFetchJobsQuery } from "../../store/jobs/jobService";
import JobCard from "../../components/JobCard";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { ImCancelCircle } from "react-icons/im";

const JobsPage = () => {
  const { data: jobs, isLoading, error } = useFetchJobsQuery();
  const [search, setSearch] = useState<string>("");
  //creating fuse instance
  const fuse = useMemo(() => {
    if (!jobs) return null;
    return new Fuse(jobs, {
      keys: [
        "title",
        "description",
        "job_category",
        "category",
        "company",
        "location",
      ],
      threshold: 0.3,
    });
  }, [jobs]);

  //performing search using fuse

  const filteredJobs = useMemo(() => {
    if (!fuse || !search) return jobs;
    const results = fuse.search(search.trim());
    return results.map((result) => result.item);
  }, [search, fuse, jobs]);
  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;



  return (
    <div className="px-6 py-4 m-auto">
      <Title
        text1="Find & Hire Experts for any Job"
        text2="Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years."
      />

      <div className="relative w-[90%] bg-white rounded-2xl mt-8 flex p-1 items-center justify-center m-auto mb-6">
        <SearchIcon
          className="absolute left-4 text-gray-500"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />

        <input
          autoFocus
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 h-12 pl-12 pr-4 rounded-2xl border-none outline-none text-lg text-black bg-transparent"
          placeholder="Job title,Location, company or keywords..."
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: "9999px", textTransform: "none", px: 3 }}
          endIcon={<ImCancelCircle />}
          onClick={()=>setSearch("")}
        >
          CLEAR
        </Button>
      </div>

      <p className="h-[2px] rounded-2xl bg-slate-400/50" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 !ml-12">
        {filteredJobs?.length ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
