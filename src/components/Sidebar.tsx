import { Button } from "@mui/material";
import { SiApostrophe } from "react-icons/si";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import type { SidebarProps } from "../types/sidebar/sidebarType";
const Sidebar = ({ setCategory }: SidebarProps) => {
  return (
    <div className="w-[15%] h-screen bg-purple-900 text-white flex flex-col gap-4 p-4 scroll-none">
      <h1 className="font-serif">{">>  "}Dashboard</h1>
      <hr />

      <div
        className="hover:bg-purple-800 p-1"
        onClick={() => setCategory(false)}
      >
        <Button
          startIcon={<SiApostrophe size={20} />}
          variant="text"
          className="!justify-start !text-white !hover:bg-blue-500 !w-full"
        >
          Jobs
        </Button>
      </div>
      <div
        className="hover:bg-purple-800 p-1"
        onClick={() => setCategory(true)}
      >
        <Button
          startIcon={<TfiLayoutGrid4Alt size={20} />}
          variant="text"
          className="!justify-start !text-white !hover:bg-blue-800 !w-full"
        >
          Category
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
