import Link from "next/link";
import navLinks from "@/nav-data/navLinks";

const NavList = () => {
  return (
    <div className="hidden tab:block">
      <ul className="flex justify-center items-center gap-3 text-sm text-white font-light medTab:gap-8">
        {navLinks.map((nav) => {
          return (
            <li key={nav?.id} className="hover:text-orange">
              <Link href={nav?.path}>{nav?.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavList