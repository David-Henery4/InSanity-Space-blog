import Image from "next/image";
import { Tag } from "@/components/shared";
import { featuredPlaceholderImg } from "../../../../public/assets/images";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client)

const urlFor = (src) => {
  return builder.image(src)
}

const TestComponent = ({value: {children}, isInline}) => {
  console.log("children",children[0])
  console.log("Inline",isInline)
  return (
    <p className="text-sm mt-4 max-w-[280px]">
      {children[0].text.substring(0, 90) + "..."}
    </p>
  );
}

const components = {
  types: {
    block: TestComponent,
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ul className="mt-xl">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc list-inside">{children}</li>,
    number: ({ children }) => <li className="mt-xl">{children}</li>,
  },
};

const BlogCard = ({ title, mainImage: { asset }, publishedAt, categories, author, body }) => {
  //
  const formatDate = (publishedDate) => {
    const month = new Intl.DateTimeFormat("en-GB", {
      month: "short",
    }).format(new Date(publishedDate));
    const date = +new Date(publishedDate).getDate();
    const year = +new Date(publishedDate).getFullYear();
    return `${month} ${date}, ${year}`;
  };
  //
  // console.log(body)
  //
  return (
    <div className="w-full tab:grid tab:grid-cols-postCard tab:grid-rows-postCard tab:min-h-[260px] tab:gap-x-4">
      {/* Images */}
      <div className="w-full tab:row-span-2">
        <Image
          className="w-full tab:h-full"
          src={urlFor(asset._ref).url()}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs my-2 text-lightGrey tab:mt-0">
          {author?.name} • {formatDate(publishedAt)}
        </p>
        <div>
          <p className="text-lg font-bold  max-w-[320px]">{title}</p>
          <PortableText
            value={body[0]}
            components={components}
          />
          {/* Need max character limit: 90 */}
          {/* <p className="text-sm mt-4 max-w-[280px]">
            {"We've all experienced the chaos of multiple spreadsheets, tracking and insight tools".substring(
              0,
              90
            ) + "..."}
          </p> */}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-start items-start mt-8 gap-3">
        {categories.map((category) => {
          //
          return (
            <Tag key={category._id} isCard={true}>
              {category?.title}
            </Tag>
          );
        })}
        {/* <Tag isCard={true}>TECHNOLOGY</Tag> */}
      </div>
    </div>
  );
};

export default BlogCard