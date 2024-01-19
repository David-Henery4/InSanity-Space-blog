import Image from "next/image";
import { mainStoryImg } from "../../../public/assets/images";
import { client } from "../../../sanity/lib/client";
import { formatDate, urlFor } from "@/helpers";

const HeroCard = async () => {
  const mainStory = await client.fetch(`*[_type == "post" && mainStory == true]{
  _id,
  title,
  author->,
  publishedAt,
  mainImage
}`);
  //
  return (
    <div className="w-full xLgMob:flex-[4]">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          priority
          src={urlFor(mainStory[0]?.mainImage).url()}
          className="w-full min-h-[320px] max-h-[325px] medTab:max-h-[450px]"
          width={200}
          height={200}
          alt={mainStory[0]?.mainImage?.alt}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold max-w-[420px] medTab:text-2xl medTab:max-w-[520px]">
          {mainStory[0]?.title}
        </h2>
        <div className="text-grey text-sm flex justify-start items-center mt-4 medTab:mt-8">
          <p>{mainStory[0]?.author?.name}</p>
          <div className="w-[6px] h-[6px] rounded-full bg-grey mx-2"></div>
          <p>{formatDate(mainStory[0]?.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroCard