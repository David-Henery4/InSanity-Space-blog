import { BurgerIcon, Logo } from "../../../public/assets"

const Navbar = () => {
  return (
    <nav className="w-full py-6 col-start-2 col-end-12 flex justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        <div><Logo/></div>
        <p className="text-xs">
          <span className="text-base">S</span>pace
          <span className="text-base">T</span>ime
          <span className="text-base">B</span>log
        </p>
      </div>
      <div className="hover:cursor-pointer"><BurgerIcon/></div>
    </nav>
  )
}

export default Navbar