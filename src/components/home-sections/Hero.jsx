import { HeroCard, Poster, HeroHeadings } from "../hero-components";

const Hero = () => {
  return (
    <section className="w-full">
      <HeroHeadings />
      <div className="w-full mt-11 flex flex-col justify-center items-center gap-8 tab:flex-row tab:gap-4 medTab:gap-12">
        <HeroCard />
        <Poster />
      </div>
    </section>
  );
};

export default Hero;
