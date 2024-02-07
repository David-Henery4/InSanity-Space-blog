import {
  HeadingSection,
  PostsContainer,
  SearchAndFilters,
} from "../stories-section-components";
import { client } from "../../../sanity/lib/client";
import { Suspense } from "react";
import getPosts from "@/utils/getPosts";

const StoriesSection = ({ id }) => {
  //
  return (
    <section
      className="w-full pt-8 grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters />

      <Suspense
        fallback={
          <div className="w-full mt-10 grid place-items-center lgLap:col-start-1 lgLap:col-end-9 lgLap:row-start-2 lgLap:row-end-3 lgLap:mt-0">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        }
      >
        <PostsContainer id={id} />
      </Suspense>
    </section>
  );
};

export default StoriesSection;
