import Image from "next/image";
import { Tag } from "@/components/shared";
import { formatDate, urlFor } from "@/helpers";
import { PortableText } from "@portabletext/react";
import components from "@/components/portableTextComponents/textComponents";

const FeaturedCard = ({author, publishedAt, mainImage, categories, title, body}) => {
  return (
    <div className="w-full">
      {/* Images */}
      <div className="w-full">
        <Image
          className="w-full lgTab:h-[272px]"
          src={urlFor(mainImage).url()}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs my-2 text-lightGrey lgTab:my-4">
          {author?.name} • {formatDate(publishedAt)}
        </p>
        <div>
          <p className="text-lg font-bold max-w-[360px]">{title}</p>
          {/* Need max character limit */}
          <PortableText value={body[0]} components={components} />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start items-start mt-8 gap-3">
        {categories.map((category) => {
          return (
            <Tag key={category?._id} isCard={true}>
              {category?.title}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedCard;
