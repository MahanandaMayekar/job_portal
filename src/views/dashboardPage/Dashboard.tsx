import Sidebar from "../../components/Sidebar"
import JobsPage from "../jobs/JobsPage"
import Category from "../categoryPage/Category";
import { useState } from "react";
const Dashboard = () => {
    const [category, setCategory] = useState<boolean>(true)
    
   
  return (
    <div className="flex ">
      <Sidebar setCategory={setCategory} />
      <div className="flex-1 bg-slate-200">
        {category ? <Category /> : <JobsPage />}
      </div>
    </div>
  );
}

export default Dashboard
