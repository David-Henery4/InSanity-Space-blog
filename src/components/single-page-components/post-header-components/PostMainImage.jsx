import { urlFor } from "@/helpers";
import Image from "next/image";

const PostMainImage = ({img}) => {
  return (
    <div className="w-full">
      <Image
        src={urlFor(img).url()}
        alt="Main Image of the article"
        className="w-full"
        width={200}
        height={200}
      />
    </div>
  );
};

export default PostMainImage;
