import { Burger, NavList, LogoContainer } from "./navbar-components";


const Navbar = () => {
  return (
    <nav className="w-full py-6 col-start-2 col-end-12 flex justify-between items-center medTab:pb-0">
      <LogoContainer />
      <NavList />
      <Burger />
    </nav>
  );
};

export default Navbar;
