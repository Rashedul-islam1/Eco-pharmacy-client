"use client";
import Loader from "@/components/Common/Loader";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/store";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => selectCurrentUser(state));

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (user === null) {
    return router.push("/login");
  }
  return <DashboardDrawer> {loading ? <Loader /> : children} </DashboardDrawer>;
};

export default DashboardLayout;
