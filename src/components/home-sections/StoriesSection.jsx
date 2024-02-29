import {
  HeadingSection,
  SearchAndFilters,
  PostsSection,
} from "../stories-section-components";
import { Suspense } from "react";

const StoriesSection = ({ searchParams }) => {
  //
  return (
    <section
      className="w-full pt-8 grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters />

      {/* Could wrap with error boundary */}
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
        <PostsSection searchParams={searchParams} />
      </Suspense>
    </section>
  );
};

export default StoriesSection;
