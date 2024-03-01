import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/helpers";

const FeaturedCardImage = ({slug, mainImage}) => {
  return (
    <div className="w-full">
      <Link href={`post/${slug?.current}`}>
        <Image
          className="w-full h-[272px]"
          src={urlFor(mainImage).url()}
          alt="featured story thumbnail"
          width={600}
          height={600}
        />
      </Link>
    </div>
  );
}

export default FeaturedCardImage