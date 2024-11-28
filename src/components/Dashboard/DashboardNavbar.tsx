import { FiFilter } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import Notification from "../Common/Notification";
import CompanyLogo from "../Home/NavBar/CompanyLogo";
import DashboardDropdown from "./DashboardDropdown";

const DashboardNavbar = ({ isActive, handleToggle }: any) => {
  return (
    <div className="max-w-[920px] mx-auto bg-gray-50 sticky top-0 z-10 flex gap-2 justify-between items-center py-3 px-4">
      <div className="flex lg:hidden">
        <CompanyLogo />
      </div>
      <div className="lg:flex hidden items-center gap-2">
        <div className="flex items-center bg-gray-100  rounded-lg gap-2 p-[6px]">
          <LuSearch className="text-gray-400" />

          <input
            type="text"
            name=""
            id=""
            className="placeholder:text-sm w-[400px] bg-gray-100 placeholder:text-slate-400 border-none outline-none focus:ring-0"
            placeholder="Search"
          />
        </div>

        <div className="p-[8px] rounded-lg place-items-center bg-primary/80  text-white transition-a hover:bg-primary">
          <FiFilter />
        </div>
      </div>
      <div className="flex  items-center gap-2">
        <Notification />
        <DashboardDropdown />
        <button
          onClick={handleToggle}
          className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary hover:bg-primary/10 duration-500"
        >
          {isActive ? (
            <HiMiniBars3 className="text-2xl" />
          ) : (
            <MdClose className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
