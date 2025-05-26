import Title from "../../components/Title";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SiAdblock } from "react-icons/si";
import { useState } from "react";
import { useFetchJobsByCategoryQuery } from "../../store/jobs/jobService";
import JobCard from "../../components/JobCard";

const categories = [
  {
    icon: <FaMoneyCheckDollar size={40} />,
    title: "Accounting",
    value: "Accounting",
  },
  { icon: <AiFillSound size={40} />, title: "Marketing", value: "Marketing" },
  {
    icon: <MdDesignServices size={40} />,
    title: "Design",
    value: "Design",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Development",
    value: "Development",
  },
  {
    icon: <SiAdblock size={40} />,
    title: "Human Resource",
    value: "Human Resource",
  },
];

const Category = () => {
    const [cate, setCate] = useState<string>("");
    console.log(cate);
    const { data: jobs, isLoading, error } = useFetchJobsByCategoryQuery(cate);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong.</p>;
    

  return (
    <div className="p-4">
      <Title
        text1="Popular Job Categories"
        text2="Choose a category to get started"
      />

      <div className="w-full mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md transition duration-300 cursor-pointer text-center ${
              cate === cat.value
                ? "bg-purple-200 text-purple-900 shadow-2xl shadow-2xl"
                : "bg-white text-gray-700 hover:bg-purple-100"
            }`}
            onClick={() => setCate(cat.value)}
          >
            <div className="mb-3 text-purple-700">{cat.icon}</div>
            <span className="text-sm font-semibold">{cat.title}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14  ">
          {jobs?.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
