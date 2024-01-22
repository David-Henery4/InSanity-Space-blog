import Image from "next/image";
import { formatDate, urlFor } from "@/helpers";

const PostAuthorAvatar = ({authorInfo: { image, name, publishedAt }}) => {
  return (
    <div className="flex justify-start items-center gap-4 mt-6">
      <div className="overflow-hidden w-12 h-12 rounded-full">
        <Image
          className="object-center object-cover pointer-events-none"
          src={urlFor(image).url()}
          width={200}
          height={200}
          alt={image?.alt}
        />
      </div>
      <div>
        <p className="text-sm font-bold tab:text-lg">{name}</p>
        <p className="text-lightGrey text-sm">{formatDate(publishedAt)}</p>
      </div>
    </div>
  );
};

export default PostAuthorAvatar