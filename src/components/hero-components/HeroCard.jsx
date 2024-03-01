import Image from "next/image";
import Link from "next/link";
import { formatDate, urlFor } from "@/helpers";
import getHeroStory from "@/utils/getHeroStory";

const HeroCard = async () => {
  const mainStory = await getHeroStory()
  //
  return (
    <div className="w-full xLgMob:flex-[4]">
      <div className="overflow-hidden rounded-t-lg">
        <Link href={`post/${mainStory?.slug?.current}`}>
          <Image
            priority
            src={urlFor(mainStory?.mainImage).url()}
            className="w-full min-h-[320px] max-h-[325px] medTab:max-h-[450px]"
            width={1200}
            height={1200}
            alt={mainStory?.mainImage?.alt}
          />
        </Link>
      </div>
      <div className="mt-2">
        <div>
          <Link href={`post/${mainStory?.slug?.current}`}>
            <h2 className="text-lg font-semibold max-w-[420px] medTab:text-2xl medTab:max-w-[520px] hover:text-orange">
              {mainStory?.title}
            </h2>
          </Link>
          <p className="mt-4 text-lightGrey">{mainStory.postDescription}</p>
        </div>
        <div className="text-lightGrey text-sm flex justify-start items-center mt-2 medTab:mt-4">
          <p>{mainStory?.author?.name}</p>
          <div className="w-[6px] h-[6px] rounded-full bg-lightGrey mx-2"></div>
          <p>{formatDate(mainStory?.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
