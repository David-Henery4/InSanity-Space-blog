import { CardText, CardTags } from "@/components/shared/card-components";
import { FeaturedCardImage } from "./card-components";

const FeaturedCard = ({
  author,
  publishedAt,
  mainImage,
  categories,
  title,
  postDescription,
  slug,
}) => {
  return (
    <div className="w-full min-h-full flex flex-col">
      {/* Images */}
      <FeaturedCardImage mainImage={mainImage} slug={slug} />

      {/* Text */}
      <CardText
        author={author}
        publishedAt={publishedAt}
        slug={slug}
        postDescription={postDescription}
        title={title}
      />

      {/* Tags */}
      <CardTags categories={categories}/>
    </div>
  );
};

export default FeaturedCard;
