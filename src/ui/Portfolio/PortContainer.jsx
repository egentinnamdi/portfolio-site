import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Project from "./Project";

// import Project from "./Project";

function PortContainer() {
  return (
    <div
      id="portfolio"
      className="col-span-2 flex h-screen w-full flex-col items-center space-y-16 bg-secondary capitalize text-white"
    >
      <div className="space-y-5 text-center">
        <span className=" text-2xl font-medium text-primary">portfolio</span>
        <h2 className="text-6xl font-bold">selected standout projects</h2>
      </div>
      <div className=" min-h-[32rem] w-1/4  ">
        {/* <Link to="https://weadex.netlify.app/weadex"> */}
        <Carousel>
          <CarouselContent>
            <CarouselItem className=" h-full">
              <Project img="weather" textOne="weather app" textTwo="weadex" />
            </CarouselItem>
            <CarouselItem>
              <Project img="travel" textOne="travel app" textTwo="worldwise" />
            </CarouselItem>
            <CarouselItem>
              <Project img="e-commerce" textOne="e-commerce" textTwo="bunqle" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-secondaryLight" />
          <CarouselNext className="bg-secondaryLight" />
        </Carousel>
      </div>
    </div>
  );
}

export default PortContainer;
