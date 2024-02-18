// "use client"
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
import { client } from "../../../../sanity/lib/client";
import { NextBtn, PrevBtn, PageNumbersList } from "./pagination-components";

const PostsPagination = async ({ numOfPostsShown, searchParams, id, searchQuery }) => {
  let totalPostsAmount = 0;
  if (id || searchQuery) {
    const { queriedPostsTotal } = await getPostsFromQuery(
      id,
      searchQuery,
      numOfPostsShown
    );
    totalPostsAmount = queriedPostsTotal;
  } else {
    const { totalPosts } = await getPosts(numOfPostsShown);
    totalPostsAmount = totalPosts;
  }
  console.log("totalPostsAmount: ", totalPostsAmount);
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
