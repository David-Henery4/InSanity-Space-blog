import Image from "next/image"
import { client } from "../../../sanity/lib/client";
import { urlFor } from "@/helpers";

const Poster = async () => {
  const posterData = await client.fetch(`*[_type == "poster"]{
  _id,
  posterImage,
  description,
  title
  }`);
  return (
    <div className="relative w-full pt-14 p-6 overflow-hidden rounded-md xLgMob:flex-[1] xLgMob:self-stretch xLgMob:flex xLgMob:items-end">
      <Image
        className="w-full h-full absolute top-0 left-0"
        src={urlFor(posterData[0].posterImage).url()}
        width={200}
        height={200}
        priority
        alt="poster for the sub-main story"
      />
      <div className="relative w-full z-10">
        <div className="rounded-full bg-white w-5 h-5"></div>
        <div className="mt-5 max-w-32">
          <h3 className="text-base font-semibold medTab:text-lg">
            {posterData[0]?.title}
          </h3>
          <p className="mt-2 text-xs text-offWhite medTab:text-sm">
            {posterData[0]?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Poster