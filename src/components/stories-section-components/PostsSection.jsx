import { Suspense } from "react";
import {
  PostsContainer,
  PostsPagination,
  SearchQueryIndicator,
} from "./posts-section-components";

const PostsSection = async ({ searchParams }) => {
  const numOfPostsShown = 5;
  //
  return (
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
        <PostsContainer
          numOfPostsShown={numOfPostsShown}
          searchParams={searchParams}
        />
      </Suspense>
      <PostsPagination
        numOfPostsShown={numOfPostsShown}
        searchParams={searchParams}
      />
    </div>
  );
};

export default PostsSection;
