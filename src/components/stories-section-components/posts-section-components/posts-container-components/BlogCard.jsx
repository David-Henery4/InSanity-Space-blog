import { BlogCardImage } from "./card-components";
import { CardText, CardTags } from "@/components/shared/card-components";

const BlogCard = ({
  title,
  mainImage: { asset },
  publishedAt,
  categories,
  author,
  slug,
  postDescription,
}) => {
  //
  return (
    <div className="w-full flex flex-col gap-2 tab:gap-y-0 tab:grid tab:grid-cols-postCard tab:grid-rows-postCard tab:min-h-[260px] tab:gap-x-4">
      {/* Images */}
      <BlogCardImage slug={slug} img={asset._ref} />

      {/* Text */}
      <CardText
        author={author}
        publishedAt={publishedAt}
        slug={slug}
        postDescription={postDescription}
        title={title}
      />

      {/* Tags */}
      <CardTags categories={categories} />
    </div>
  );
};

export default BlogCard;
