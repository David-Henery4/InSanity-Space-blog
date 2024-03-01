// export const dynamic = "force-dynamic"; // might not use
// export const dynamic = "force-static"; // might not use
// import Image from 'next/image'
import { v4 as uuidv4 } from "uuid";
import {
  Hero,
  FeaturedStories,
  StoriesSection,
} from "@/components/home-sections";



export default async function Home({ searchParams }) {
  
  // const searchValues = searchParams?.id?.split(",");
  // console.log(searchParams)
  //
  return (
    <main
      key={uuidv4()}
      className="w-full col-start-2 col-end-12 py-28 flex flex-col gap-16 medTab:gap-28"
    >
      {/* <Navbar /> */}
      <Hero />
      <FeaturedStories />
      <StoriesSection
        searchParams={searchParams}
      />
    </main>
  );
}
