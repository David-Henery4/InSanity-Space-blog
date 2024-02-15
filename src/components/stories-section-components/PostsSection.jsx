import { Suspense } from "react";
import { client } from "../../../sanity/lib/client";
import {
  PostsContainer,
  PostsPagination,
  SearchQueryIndicator,
} from "./posts-section-components";
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";

const PostsSection = async ({ id, searchQuery }) => {
  // let posts = [];
  // id || searchQuery
  //   ? (posts = await getPostsFromQuery(id, searchQuery))
  //   : (posts = await getPosts());
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
        <PostsContainer id={id} searchQuery={searchQuery} />
      </Suspense>
      <PostsPagination id={id} searchQuery={searchQuery} />
    </div>
  );
};

export default PostsSection;
