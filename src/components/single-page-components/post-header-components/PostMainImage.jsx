import { urlFor } from "@/helpers";
import Image from "next/image";

const PostMainImage = ({img}) => {
  return (
    <div className="w-full medTab:flex-1">
      <Image
        src={urlFor(img).url()}
        alt="Main Image of the article"
        className="w-full min-h-[250px] object-cover object-center medTab:min-h-[340px] lap:min-h-[450px]"
        width={200}
        height={200}
      />
    </div>
  );
};

export default PostMainImage;
