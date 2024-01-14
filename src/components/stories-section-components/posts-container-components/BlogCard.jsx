import Image from "next/image";
import { Tag } from "@/components/shared";
import { featuredPlaceholderImg } from "../../../../public/assets/images";

const BlogCard = () => {
  return (
    <div className="w-full tab:grid tab:grid-cols-postCard tab:grid-rows-postCard tab:min-h-[260px] tab:gap-x-4">
      {/* Images */}
      <div className="w-full tab:row-span-2">
        <Image
          className="w-full tab:h-full"
          src={featuredPlaceholderImg.src}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs my-2 text-lightGrey tab:mt-0">John Doe • 19 Jan 2022</p>
        <div>
          <p className="text-lg font-bold  max-w-[320px]">
            A small business is only as good as its tools and it is totally
            true.
          </p>
          {/* Need max character limit */}
          <p className="text-sm mt-4 max-w-[280px]">
            We&apos;ve all experienced the chaos of multiple spreadsheets,
            tracking and insight tools...
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start items-start mt-8 gap-3">
        <Tag isCard={true} >TECHNOLOGY</Tag>
      </div>
    </div>
  );
}

export default BlogCard