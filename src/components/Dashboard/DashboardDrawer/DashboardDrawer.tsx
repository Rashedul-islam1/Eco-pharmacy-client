import { useState } from "react";
import DashboardNavbar from "../DashboardNavbar";
import Sidebar from "../Sidebar/Sidebar";

const DashboardDrawer = ({ children }: any) => {
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="relative bg-gray-50 min-h-screen lg:flex font-questrial gap-5">
      <Sidebar isActive={isActive} />
      <div className="flex-1 bg-gray-50 lg:ml-64">
        <DashboardNavbar handleToggle={handleToggle} isActive={isActive} />
        <div className="max-w-4xl mx-auto py-14 px-5 md:px-8 lg:px-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardDrawer;
