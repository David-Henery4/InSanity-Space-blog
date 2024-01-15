// import Image from 'next/image'
import { Navbar } from "@/components/shared"
import { Hero, FeaturedStories, StoriesSection } from "@/components/home-sections"

export default function Home() {
  // 
  return (
    <main className="max-w-[1440px] mx-auto grid grid-cols-mob pb-48 gap-y-16 lgMob:grid-cols-tab medTab:gap-y-28 lap:grid-cols-lap desk:grid-cols-desk">
      <Navbar />
      <Hero />
      <FeaturedStories />
      <StoriesSection />
    </main>
  );
}
