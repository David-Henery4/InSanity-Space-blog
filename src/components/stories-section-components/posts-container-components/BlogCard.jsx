import Image from "next/image";
import { Tag } from "@/components/shared";
import { PortableText } from "@portabletext/react";
import { formatDate, urlFor } from "@/helpers";
import components from "@/components/portableTextComponents/textComponents";

const BlogCard = ({ title, mainImage: { asset }, publishedAt, categories, author, body }) => {
  //
  return (
    <div className="w-full flex flex-col gap-2 tab:gap-y-0 tab:grid tab:grid-cols-postCard tab:grid-rows-postCard tab:min-h-[260px] tab:gap-x-4">
      {/* Images */}
      <div className="w-full h-[250px] tab:min-h-full tab:h-[260px] tab:row-span-2">
        <Image
          className="w-full h-full"
          src={urlFor(asset._ref).url()}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </div>

      {/* Text */}
      <div className="mb-8">
        <p className="text-xs my-2 text-lightGrey tab:mt-0">
          {author?.name} • {formatDate(publishedAt)}
        </p>
        <div>
          <p className="text-lg font-bold  max-w-[320px]">{title}</p>
          <PortableText
            value={body[0]}
            components={components}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start items-start mt-auto gap-2 tab:h-full">
        {categories.map((category) => {
          //
          return (
            <Tag key={category._id} isCard={true}>
              {category?.title}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard