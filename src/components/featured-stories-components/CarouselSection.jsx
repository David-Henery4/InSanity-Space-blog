import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeaturedCard } from "./carousel-components";

const CarouselSection = () => {
  return (
    <div className="w-full mt-4">
      <Carousel>
        <div className="flex justify-end items-center">
        <CarouselPrevious />
        <CarouselNext />
        </div>
        <CarouselContent className="-ml-8 mt-3">
          <CarouselItem className="pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-8">
            <FeaturedCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
