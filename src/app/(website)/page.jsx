// import Image from 'next/image'
import { Navbar } from "@/components/shared"
import { Hero, FeaturedStories, StoriesSection } from "@/components/home-sections"

export default function Home({searchParams}) {
  console.log("searchParams: ",searchParams)
  const searchValues = searchParams?.id?.split(",")
  console.log(searchValues)

  // 
  return (
    <main className="w-full col-start-2 col-end-12 py-28 flex flex-col gap-16 medTab:gap-28">
      {/* <Navbar /> */}
      <Hero />
      <FeaturedStories />
      <StoriesSection id={searchParams?.id} />
    </main>
  );
}
