import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/store";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import { TbLogin } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const DashboardDropdown = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <Menu.Button>
        {user?.userEmail && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-full top-[4px] group hover:border-green-500 md:hover:border-gray-300 flex gap-2 justify-center items-center border-[1px] border-gray-300"
          >
            <Image
              src={
                user.photo ? user?.photo : "https://i.ibb.co/PmWMF1j/user.png"
              }
              alt={user?.name}
              color="green"
              width={1200}
              height={100}
              className="h-[30px] w-[30px] rounded-full "
            />{" "}
            <div className="absolute flex md:hidden top-[2px] right-[-1px] w-2 h-2 rounded-full bg-green-500" />
            <p className="md:flex hidden font-semibold text-sm text-[#333333] ">
              {user?.name.slice(0, 10)}.
            </p>
            {isOpen ? (
              <IoIosArrowUp className="ml-1 text-gray-600 md:flex hidden " />
            ) : (
              <IoIosArrowDown className="ml-1 text-gray-600 md:flex hidden " />
            )}
          </div>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2  min-w-[270px] max-w-[300px] origin-top-right divide-y divide-gray-100 z-50  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div
            className="py-1 border-b border-gray-200 dark:border-gray-600"
            role="none"
          >
            <p className="px-4 pt-2 mb-1 font-normal text-gray-500 dark:text-gray-500">
              Signed in as:
            </p>
            <a className="flex px-3 py-2 text-sm items-center font-semibold text-gray-700 border-l-2 border-transparent hover:border-primary  hover:text-primary ">
              <span className="mr-2">
                <PiUserCircleFill className="text-lg" />
              </span>
              {user ? user.userEmail : "unknown user"}
            </a>
          </div>
          {user ? (
            <>
              <div role="none">
                <a className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary">
                  <span className="mr-2">
                    <GoMail />
                  </span>
                  Messages
                </a>
              </div>
              <div role="none">
                <a className="flex px-[14px] cursor-pointer py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary">
                  <span className="mr-1">
                    <CiSettings className="text-lg" />
                  </span>
                  Settings
                </a>
              </div>

              <div role="none">
                <button
                  onClick={handleLogout}
                  className="flex px-[12px]  py-2 text-sm text-gray-700 border-l-2 border-transparent  rounded-bl-md hover:border-primary  hover:text-primary"
                >
                  <span className="mr-2">
                    <IoLogInOutline className="text-[16px]" />
                  </span>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link href={"/login"}>
              <button className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  rounded-bl-md hover:border-primary  hover:text-primary">
                <span className="mr-2">
                  <TbLogin className="text-[15px]" />
                </span>
                Login
              </button>
            </Link>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default DashboardDropdown;
