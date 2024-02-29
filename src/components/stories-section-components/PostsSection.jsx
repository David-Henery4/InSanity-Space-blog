import {
  PostsContainer,
  PostsPagination,
  SearchQueryIndicator,
} from "./posts-section-components";
//
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
//
import { draftMode } from "next/headers";
import PostPreview from "../preview-components/PostPreview";

const PostsSection = async ({ searchParams }) => {
  const numOfPostsShown = 5;
  const searchQuery = searchParams?.search;
  const id = searchParams?.id?.split(",");
  const currentPageNumber = +searchParams?.page || 1;
  //
  let posts = [];
  let totalPostsAmount = 0;
  let lastItemOfPage = null;
  let initialData = null;
  let postsGroqQueryString = "";
  //
  if (id || searchQuery) {
    const { initial, postsGroqQuery } = await getPostsFromQuery(
      id,
      searchQuery,
      numOfPostsShown,
      currentPageNumber
    );
    posts = initial?.data?.queriedPostsList;
    totalPostsAmount = initial?.data?.queriedPostsTotal;
    initialData = initial;
    postsGroqQueryString = postsGroqQuery;
  } else {
    const { initial, postsGroqQuery } = await getPosts(
      numOfPostsShown,
      currentPageNumber
    );
    posts = initial?.data?.postsList;
    totalPostsAmount = initial?.data?.totalPosts;
    lastItemOfPage = initial?.data?.postsList[4];
    initialData = initial;
    postsGroqQueryString = postsGroqQuery;
  }
  return (
    <div
      id="posts-container"
      className="w-full pt-8 lgLap:col-start-1 lgLap:col-end-9 lgLap:row-start-2 lgLap:row-end-3 lgLap:pt-0 "
    >
      <SearchQueryIndicator />

      {draftMode().isEnabled ? (
        <PostPreview
          initial={initialData}
          postsGroqQuery={postsGroqQueryString}
        />
      ) : (
        <PostsContainer posts={posts} />
      )}

      <PostsPagination
        numOfPostsShown={numOfPostsShown}
        searchParams={searchParams}
        totalPostsAmount={totalPostsAmount}
      />
    </div>
  );
};

export default PostsSection;
