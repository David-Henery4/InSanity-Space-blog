// "use client"
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
import { client } from "../../../../sanity/lib/client";
import { NextBtn, PrevBtn, PageNumbersList } from "./pagination-components";

// Variables needed for page numbered pagination:
// [X] - $lastPublishedAt - MIGHT not need in URL
// [X] - $lastId - MIGHT not need in URL

// $Index = ($pageNumber - $currentPage) * $pageSize - 1
//   [] - $CurrentPageNumber 
//   [X] - $TargetPageNumber (Already handled when we click next, prev or specific page number)
//   [X] - $pageSize = (Already hard coded) - not needed in URL

const PostsPagination = async ({ numOfPostsShown, searchParams }) => {
  const searchQuery = searchParams?.search;
  const id = searchParams?.id?.split(",");
  //
  let totalPostsAmount = 0;
  let lastItemOfPage = null;
  //
  if (id || searchQuery) {
    const { queriedPostsTotal } = await getPostsFromQuery(
      id,
      searchQuery,
      numOfPostsShown
    );
    totalPostsAmount = queriedPostsTotal;
  } else {
    const { totalPosts, postsList } = await getPosts(numOfPostsShown);
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
        numOfPostsShown={numOfPostsShown}
        lastItemOfPage={lastItemOfPage}
      />
      <NextBtn searchParams={searchParams} totalNumOfPages={totalNumOfPages} />
    </div>
  );
};

export default PostsPagination;
