import { SectionHeading } from "../shared";
import { ChevLeft,  ChevRight } from "../../../public/assets";

const HeadingSection = () => {
  return (
    <div className="">
      <SectionHeading>Featured Stories</SectionHeading>
      <div className="w-min flex justify-center items-center gap-7 py-4 px-5 bg-darkGrey">
        <div>
          <ChevLeft />
        </div>
        <div>
          <ChevRight />
        </div>
      </div>
    </div>
  );
}

export default HeadingSection