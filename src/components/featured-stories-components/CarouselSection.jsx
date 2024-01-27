import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeaturedCard } from "./carousel-components";
import { client } from "../../../sanity/lib/client";

const CarouselSection = async () => {
  const featuredStories = await client.fetch(
    `*[_type == "post" && featuredPost == true]{
  _id,
  title,
  body,
  author->,
  publishedAt,
  categories[]->,
  mainImage,
  postDescription,
  slug
}`
  );
  //
  return (
    <div className="w-full mt-4">
      <Carousel>
        <div className="flex justify-end items-center">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent className="-ml-6 mt-3 lgDesk:-ml-8">
          {featuredStories.map((story) => {
            return (
              <CarouselItem
                key={story._id}
                className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8"
              >
                <FeaturedCard {...story} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
