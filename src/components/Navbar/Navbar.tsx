"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import ActionIcons from "../Home/NavBar/ActionIcons";
import CompanyLogo from "../Home/NavBar/CompanyLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "FAQs", link: "/faq" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <header className="max-w-7xl sticky top-0 bg-white z-30 mx-auto flex justify-between items-center px-4 lg:px-8 py-2 md:py-3">
      <CompanyLogo />
      <div
        className={`fixed top-[65px] bg-gray-100 lg:bg-transparent right-0 lg:px-7 pb-7 pt-4 w-[250px] lg:w-auto h-full overflow-auto transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        } lg:static lg:p-0 lg:overflow-visible`}
      >
        <ul className="list-none block bg-opacity-5 lg:flex gap-4">
          {Links.map((item) => (
            <li
              key={item.link}
              className="border-b  lg:border-b-0 border-b-gray-300 pb-1 lg:pb-0 px-4 lg:px-0"
            >
              <Link
                href={item.link}
                className={`block px-4 lg:px-0 md:py-2 lg:py-0 py-0 text-base ${
                  pathname === `${item.link}`
                    ? "text-primary lg:border-b-2 border-primary "
                    : "text-[#333333] hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <ActionIcons />
        <button
          onClick={toggleMenu}
          className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary"
        >
          {isMenuOpen ? (
            <MdClose className="text-3xl" />
          ) : (
            <HiMiniBars3 className="text-3xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
