import { PostMainImage, PostHeading , PostAuthorAvatar, PostUpdatedDate} from "./post-header-components";


const PostHeader = ({
  mainImage,
  title,
  author: { name, image },
  _updatedAt,
  publishedAt,
}) => {
  //
  return (
    <header className="w-full flex flex-col justify-center items-center gap-8 medTab:flex-row medTab:gap-5 lap:gap-12">
      {/* Main Post Image */}
      <PostMainImage img={mainImage} />

      {/* Heading & Avatar */}
      <div className="w-full medTab:flex-1">
        <PostUpdatedDate updatedAt={_updatedAt} />

        {/* Heading & Sub-Heading */}
        <PostHeading title={title} />

        {/* AVATAR */}
        <PostAuthorAvatar authorInfo={{ image, name, publishedAt }} />
      </div>

    </header>
  );
};

export default PostHeader;
