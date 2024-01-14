// import Image from 'next/image'
import { Navbar } from "@/components/shared"
import { Hero, FeaturedStories, StoriesSection } from "@/components/home-sections"

export default function Home() {
  return (
    <main className="grid grid-cols-mob pb-48 gap-y-16 lgMob:grid-cols-tab medTab:gap-y-28">
      <Navbar/>
      <Hero/>
      <FeaturedStories/>
      <StoriesSection/>
    </main>
  )
}
