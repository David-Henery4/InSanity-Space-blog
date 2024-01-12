import Image from "next/image";
import { featuredPlaceholderImg } from "../../../../public/assets/images";

const FeaturedCard = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          className="w-full"
          src={featuredPlaceholderImg.src}
          alt="featured story thumbnail"
          width={200}
          height={200}
        />
      </div>
      <div>
        <p>John Doe • 19 Jan 2022</p>
        <p>
          A small business is only as good as its tools and it is totally true.
        </p>
        <p>
          We&apos;ve all experienced the chaos of multiple spreadsheets,
          tracking and insight tools...
        </p>
      </div>
    </div>
  );
}

export default FeaturedCard