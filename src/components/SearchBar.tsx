import type { SearchBarProps } from "../types/searchBar/searchBarTypes";
import { Button } from "@mui/material";// for types only
import { ImCancelCircle } from "react-icons/im";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearch ,search}: SearchBarProps) => {
  return (
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
        onClick={() => setSearch("")}
      >
        CLEAR
      </Button>
    </div>
  );
};

export default SearchBar;
