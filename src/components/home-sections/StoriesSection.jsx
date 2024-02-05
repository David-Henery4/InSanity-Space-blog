import {
  HeadingSection,
  PostsContainer,
  SearchAndFilters,
} from "../stories-section-components";
import { client } from "../../../sanity/lib/client";
import { Suspense } from "react";
import getPosts from "@/utils/getPosts";

const StoriesSection = async ({id}) => {
  console.log("storiesSectionId: ", id)
  const posts = await getPosts(id)
  // console.log(posts)
  return (
    <section
      className="w-full grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters posts={posts} />

      <Suspense fallback={<div>Loading...</div>}>
        <PostsContainer posts={posts} />
      </Suspense>

    </section>
  );
};

export default StoriesSection;
