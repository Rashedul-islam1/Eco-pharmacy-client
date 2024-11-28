import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/store";
import Image from "next/image";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import { LuHome } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import AdminMenu from "./AdminMenu";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";

const Sidebar = ({ isActive }: any) => {
  const { role }: any = useSelector((state: RootState) =>
    selectCurrentUser(state)
  );

  return (
    <div
      className={`z-20 fixed flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)]  bg-[#fff] w-[280px] space-y-6  pb-4  inset-y-0 left-0 transform ${
        isActive && "-translate-x-full"
      }  lg:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        <div className="sticky py-2 top-0 flex justify-center bg-white z-40">
          <Link
            href="/"
            aria-label="Eco-Pharmacy"
            title="Eco-Pharmacy"
            className="inline-flex  items-center mr-8 gap-1"
          >
            <Image
              src={"https://arastta.org/images/logo/arastta-logo.svg"}
              alt="logo"
              width={40}
              height={30}
              className="w-10"
            />
            <span className="text-2xl font-bold text-primary">
              Eco Pharmacy
            </span>
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <MenuItem
              icon={MdOutlineDashboardCustomize}
              label="Dashboard"
              address="/dashboard"
            />
            {/* Admin menu items */}
            {role === "user" && <UserMenu />}
            {role === "admin" && <AdminMenu />}
            {/* User Menu Items */}
            <div className="w-full h-[1px] bg-secondary/30 my-8"></div>
            <MenuItem icon={LuHome} label="Home" address="/" />{" "}
            <MenuItem
              icon={AiFillProduct}
              label="Products"
              address="/products"
            />
            <MenuItem
              icon={RiContactsLine}
              label="Contact"
              address="/contact-us"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
