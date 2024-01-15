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
        <CarouselContent className="-ml-6 mt-3 lgDesk:-ml-8">
          <CarouselItem className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8">
            <FeaturedCard />
          </CarouselItem>
          <CarouselItem className="pl-6 smTab:basis-1/2 lgTab:basis-1/3 lgDesk:pl-8">
            <FeaturedCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
