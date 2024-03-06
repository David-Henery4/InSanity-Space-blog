"use client"
import { BurgerIcon } from "../../../../public/assets";
import { useContext } from "react";
import { SidebarContext } from "@/context/sidebarContext";

const Burger = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useContext(SidebarContext);
  return (
    <div className="tab:hidden hover:cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      <BurgerIcon />
    </div>
  );
};

export default Burger;
