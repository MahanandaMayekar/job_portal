import Sidebar from "../../components/Sidebar"
import JobsPage from "../jobs/JobsPage"
import Category from "../categoryPage/Category";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
const Dashboard = () => {
  const [category, setCategory] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("");
    
   
  return (
    <div className="flex ">
      <Sidebar setCategory={setCategory} category={category} />
      <div className="flex-1 bg-slate-200">
        <SearchBar setSearch={setSearch} search={search} />
        {category ? <Category  search={search}/> : <JobsPage search={search}/>}
      </div>
    </div>
  );
}

export default Dashboard
