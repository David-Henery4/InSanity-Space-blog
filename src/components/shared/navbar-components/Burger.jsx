"use client"
import { BurgerIcon } from "../../../../public/assets";
import { SidebarProvider } from "@/context/sidebarContext";
import { useContext } from "react";
import { SidebarContext } from "@/context/sidebarContext";

const Burger = () => {
  console.log("burger");
  const { setIsSidebarOpen, isSidebarOpen } = useContext(SidebarContext);
  return (
    <div className="tab:hidden hover:cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
      <BurgerIcon />
    </div>
  );
};

export default Burger;
