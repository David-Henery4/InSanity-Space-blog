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
        <CarouselContent className="-ml-8">
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
        <CarouselPrevious  />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
