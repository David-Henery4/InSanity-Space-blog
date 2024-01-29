"use client"
import NavLinks from "@/nav-data/navLinks";
import Link from "next/link";
import { Logo, CloseIcon } from "../../../public/assets";
import { useContext, useEffect } from "react";
import { SidebarContext } from "@/context/sidebarContext";
import useMediaQuery from "@/hooks/useMediaQuery";

const Sidebar = () => {
  console.log("sidebar")
  const {setIsSidebarOpen, isSidebarOpen} = useContext(SidebarContext)
  const isScreenTabletAndAbove = useMediaQuery("(min-width:41.25em)");
  //
  useEffect(() => {
    if (isScreenTabletAndAbove) setIsSidebarOpen(false)
  },[isScreenTabletAndAbove])
  //
  return (
    <aside
      className={`fixed z-50 top-0 left-0 w-full min-h-full px-6 py-8 bg-blueyGrey flex flex-col justify-center items-start transition-all tab:hidden ${
        isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full flex justify-between items-center mb-auto">
        <div>
          <Logo />
        </div>
        <div onClick={() => {
          setIsSidebarOpen(false)
          console.log("Clicked")
        }}>
          <CloseIcon className="hover:cursor-pointer" />
        </div>
      </div>

      <ul className="flex flex-col justify-start items-start gap-14 mb-auto">
        {NavLinks.map((navItem) => {
          return (
            <li
              key={navItem.id}
              className="text-3xl font-semibold hover:text-orange"
              onClick={() => {
                setIsSidebarOpen(false)
              }}
            >
              <Link href={navItem.path}>{navItem.label}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
