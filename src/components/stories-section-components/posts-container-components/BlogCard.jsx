import { Tag } from "@/components/shared";
import { PortableText } from "@portabletext/react";
import { formatDate } from "@/helpers";
import components from "@/components/portableTextComponents/textComponents";
import { CardImage, CardTitle } from "./card-components";

const BlogCard = ({ title, mainImage: { asset }, publishedAt, categories, author, body, slug: {current} }) => {
  // console.log(body[0])
  body[0].style = "cardText"
  //
  return (
    <div className="w-full flex flex-col gap-2 tab:gap-y-0 tab:grid tab:grid-cols-postCard tab:grid-rows-postCard tab:min-h-[260px] tab:gap-x-4">
      {/* Images */}
      <CardImage slug={current} img={asset._ref} />

      {/* Text */}
      <div className="mb-8">
        <p className="text-xs my-2 text-lightGrey tab:mt-0">
          {author?.name} • {formatDate(publishedAt)}
        </p>
        <div>
          <CardTitle title={title} slug={current}/>
          <PortableText value={body[0]} components={components} />
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