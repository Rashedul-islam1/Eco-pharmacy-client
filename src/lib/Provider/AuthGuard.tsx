"use client";

import Loader from "@/components/Common/Loader";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isPageReloaded, setIsPageReloaded] = useState(false);

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      setIsPageReloaded(true);
    }
  }, []);

  useEffect(() => {
    if (isPageReloaded) {
      if (!user && !loading) {
        router.push("/sign-in");
      } else {
        setLoading(false);
      }
    } else if (user) {
      setLoading(false);
    }
  }, [user, router, isPageReloaded, loading]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthGuard;
