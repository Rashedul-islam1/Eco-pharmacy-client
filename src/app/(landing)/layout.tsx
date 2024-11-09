"use client";
import Loader from "@/components/Common/Loader";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [user, router]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="px-5 lg:px-0">{loading ? <Loader /> : children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
