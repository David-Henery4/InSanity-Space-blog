import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/helpers";

const BlogCardImage = ({ slug, img }) => {
  //
  return (
    <div className="w-full h-[250px] tab:min-h-full tab:h-[260px] tab:row-span-2">
      <Link href={`post/${slug?.current}`}>
        <Image
          className="w-full h-full"
          src={urlFor(img).url()}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default BlogCardImage;
