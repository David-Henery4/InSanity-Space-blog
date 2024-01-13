import Image from "next/image";
import { featuredPlaceholderImg } from "../../../../public/assets/images";

const FeaturedCard = () => {
  return (
    <div className="w-full">

      {/* Images */}
      <div className="w-full">
        <Image
          className="w-full"
          src={featuredPlaceholderImg.src}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs my-2 text-lightGrey">John Doe • 19 Jan 2022</p>
        <div>
          <p className="text-lg font-bold">
            A small business is only as good as its tools and it is totally
            true.
          </p>
          {/* Need max character limit */}
          <p className="text-sm mt-4">
            We&apos;ve all experienced the chaos of multiple spreadsheets,
            tracking and insight tools...
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start items-start mt-8">
        <div className="p-3 py-[6px] bg-lightGreen text-green rounded-3xl text-xs">
          TECHNOLOGY
        </div>
      </div>

    </div>
  );
};

export default FeaturedCard;
