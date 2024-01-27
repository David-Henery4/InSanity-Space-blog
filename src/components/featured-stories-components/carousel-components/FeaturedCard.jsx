import Image from "next/image";
import { Tag } from "@/components/shared";
import { formatDate, urlFor } from "@/helpers";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import components from "@/components/portableTextComponents/textComponents";

const FeaturedCard = ({
  author,
  publishedAt,
  mainImage,
  categories,
  title,
  body,
  postDescription,
  slug,
}) => {
  return (
    <div className="w-full min-h-full flex flex-col">
      {/* Images */}
      <div className="w-full">
        <Link href={`post/${slug?.current}`}>
          <Image
            className="w-full h-[272px]"
            src={urlFor(mainImage).url()}
            alt="featured story thumbnail"
            width={200}
            height={200}
          />
        </Link>
      </div>

      {/* Text */}
      <div className="mb-8">
        <p className="text-xs my-2 text-lightGrey lgTab:my-4">
          {author?.name} • {formatDate(publishedAt)}
        </p>
        <div>
          <Link href={`post/${slug?.current}`}>
            <h3 className="text-lg font-bold max-w-[360px] hover:text-orange">{title}</h3>
          </Link>
          {/* Need max character limit */}
          {/* <PortableText value={body[0]} components={components} /> */}
          <p className="mt-4 text-lightGrey">{postDescription}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start items-start mt-auto gap-3">
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
