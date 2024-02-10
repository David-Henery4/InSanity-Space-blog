import {
  HeadingSection,
  PostsContainer,
  SearchAndFilters,
  SearchQueryIndicator
} from "../stories-section-components";
import { client } from "../../../sanity/lib/client";
import { Suspense } from "react";
import getPosts from "@/utils/getPosts";

const StoriesSection = ({ id, searchQuery }) => {
  //
  return (
    <section
      className="w-full pt-8 grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters />

      <div
        id="posts-container"
        className="w-full pt-8 lgLap:col-start-1 lgLap:col-end-9 lgLap:row-start-2 lgLap:row-end-3 lgLap:pt-0 "
      >
        <SearchQueryIndicator />
        <Suspense
          fallback={
            <div className="w-full h-full grid place-items-center">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          }
        >
          <PostsContainer id={id} searchQuery={searchQuery} />
        </Suspense>
      </div>
    </section>
  );
};

export default StoriesSection;
