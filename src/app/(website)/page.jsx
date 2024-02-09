// import Image from 'next/image'
import { v4 as uuidv4 } from "uuid";
import { Navbar } from "@/components/shared"
import { Hero, FeaturedStories, StoriesSection } from "@/components/home-sections"

const wait = async (n) => {
  return new Promise((resolve) => setTimeout(resolve, n));
};

export default async function Home({searchParams}) {
  console.log("searchParams: ",searchParams)
  const searchValues = searchParams?.id?.split(",")
  console.log(searchValues)
  // console.log("id", uuidv4())
  // await wait(20000)
  // 
  return (
    <main
      key={uuidv4()}
      className="w-full col-start-2 col-end-12 py-28 flex flex-col gap-16 medTab:gap-28"
    >
      {/* <Navbar /> */}
      <Hero />
      <FeaturedStories />
      <StoriesSection id={searchValues} />
    </main>
  );
}
