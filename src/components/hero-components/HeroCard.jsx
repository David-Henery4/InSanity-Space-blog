import Image from "next/image";
import { mainStoryImg } from "../../../public/assets/images";

const HeroCard = () => {
  return (
    <div className="xLgMob:flex-[4]">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          priority
          src={mainStoryImg.src}
          className="w-full max-h-[325px] medTab:max-h-[450px]"
          width={200}
          height={200}
          alt="Thumbnail of todays main story"
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold max-w-[420px] medTab:text-2xl medTab:max-w-[520px]">
          Collaboration to Develop Coffee and Beverage Industry Expertise in
          Indonesia
        </h2>
        <div className="text-grey text-sm flex justify-start items-center mt-4 medTab:mt-8">
          <p>4 Min</p>
          <div className="w-[6px] h-[6px] rounded-full bg-grey mx-2"></div>
          <p>August 19, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default HeroCard