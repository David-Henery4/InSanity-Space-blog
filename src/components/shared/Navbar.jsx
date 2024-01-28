import { Logo } from "../../../public/assets";
import { Burger, NavList, LogoContainer } from "./navbar-components";
import { SidebarProvider } from "@/context/sidebarContext";

const Navbar = () => {
  console.log("navbar");
  return (
    <nav className="w-full py-6 col-start-2 col-end-12 flex justify-between items-center medTab:pb-0">
      <LogoContainer />
      <NavList />
      <Burger />
    </nav>
  );
};

export default Navbar;
