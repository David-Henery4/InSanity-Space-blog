// "use client"
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
// import { client } from "../../../../sanity/lib/client";
import { NextBtn, PrevBtn, PageNumbersList } from "./pagination-components";


const PostsPagination = async ({ numOfPostsShown, searchParams }) => {
  const searchQuery = searchParams?.search;
  const id = searchParams?.id?.split(",");
  const currentPageNumber = +searchParams?.page || 1;
  //
  let totalPostsAmount = 0;
  let lastItemOfPage = null;
  //
  if (id || searchQuery) {
    const { queriedPostsTotal } = await getPostsFromQuery(
      id,
      searchQuery,
      numOfPostsShown,
      currentPageNumber
    );
    totalPostsAmount = queriedPostsTotal;
  } else {
    const { totalPosts, postsList } = await getPosts(
      numOfPostsShown,
      currentPageNumber
    );
    totalPostsAmount = totalPosts;
    lastItemOfPage = postsList[4];
  }
  // console.log("totalPostsAmount: ", totalPostsAmount);
  // console.log("Last item of current page: ", lastItemOfPage);
  //
  const totalNumOfPages = Math.ceil(totalPostsAmount / numOfPostsShown);
  //
  return (
    <div className="flex justify-center items-center gap-8 mt-12 text-sm">
      <PrevBtn searchParams={searchParams} />
      <PageNumbersList
        searchParams={searchParams}
        totalNumOfPages={totalNumOfPages}
      />
      <NextBtn searchParams={searchParams} totalNumOfPages={totalNumOfPages} />
    </div>
  );
};

export default PostsPagination;
