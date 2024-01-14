import { Logo } from "../../../../public/assets";
import Link from "next/link";

const LogoContainer = () => {
  return (
    <Link href="/" className="flex justify-start items-center gap-2">
      <div>
        <Logo />
      </div>
      <p className="text-xs tab:text-sm">
        <span className="text-base tab:text-lg">S</span>pace
        <span className="text-base tab:text-lg">T</span>ime
        <span className="text-base tab:text-lg">B</span>log
      </p>
    </Link>
  );
}

export default LogoContainer