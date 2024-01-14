import Image from "next/image"
import { poster } from "../../../public/assets/images"

const Poster = () => {
  return (
    <div className="relative w-full pt-14 p-6 overflow-hidden rounded-md xLgMob:flex-[1] xLgMob:self-stretch xLgMob:flex xLgMob:items-end">
      <Image
        className="w-full h-full absolute top-0 left-0"
        src={poster.src}
        width={200}
        height={200}
        priority
        alt="poster for the sub-main story"
      />
      <div className="relative z-10">
        <div className="rounded-full bg-white w-5 h-5"></div>
        <div className="mt-5 max-w-32">
          <h3 className="text-base">shadcn/ui</h3>
          <p className="mt-2 text-xs text-offWhite">
            Beautifully designed components built with Radix UI and Tailwind
            CSS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Poster