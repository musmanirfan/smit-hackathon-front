"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
// import { KeyboardArrowDown } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Loans", link: "/loans" },
  // { name: "About", link: "/about" },
  { name: "Dashboard", link: "/Dashboard" },
  { name: "Contact", link: "/contact" },
];

const InnerPagesHeader = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <header className="absolute top-0 left-0 w-full md:py-5 py-3 z-40 bg-[#E6ECEE]">
        <div className="md:w-[85vw] w-[95vw] mx-auto">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Icon */}
            <div className="flex gap-2 items-center">
              <IoIosMenu
                className="text-black text-xl md:hidden inline"
                onClick={() => setOpen(true)}
              />
              <h1
                className="text-green-600 md:text-2xl text-xl font-semibold cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                Sahulat<span className="text-black"> Fund</span>
              </h1>
            </div>

            {/* Main Navigation */}
            <nav className="md:flex hidden gap-8 items-center text-black">
              {navLinks.map((navItem, index) => (
                <a
                  key={index}
                  href={navItem.link}
                  className={`${
                    pathname === navItem.link ? "text-green-600" : ""
                  } hover:text-green-600 transition-all`}
                >
                  {navItem.name}
                </a>
              ))}
            </nav>

            <div className="flex md:gap-4 gap-2 items-center">
              <button onClick={()=>router.push("/login")} className="bg-green-600 text-white px-12 py-3 rounded-full shadow hover:bg-[#E6ECEE] hover:border hover:border-green-600 hover:text-green-600 transition">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <aside
        className={`w-full bg-[#E6ECEE] fixed top-0 ${
          open ? "left-0" : "-left-[200vw]"
        } h-screen z-50 transition-[left] duration-700`}
      >
        <div className="w-[90vw] pt-5 mx-auto flex justify-between items-center">
          <h1
            className="text-green-600 text-3xl font-semibold cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            Sahulat<span className="text-black"> Fund</span>
          </h1>
          <IoClose
            onClick={() => setOpen(false)}
            className="text-black text-2xl"
          />
        </div>
        <nav className="text-black text-2xl w-[90vw] mx-auto mt-14 space-y-10">
          {navLinks.map((navItem, index) => (
            <a
              key={index}
              href={navItem.link}
              className={`${
                pathname === navItem.link ? "text-green-600" : ""
              } block hover:text-green-600 transition-all`}
            >
              {navItem.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default InnerPagesHeader;