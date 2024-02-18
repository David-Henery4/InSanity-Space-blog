// "use client"
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
import { client } from "../../../../sanity/lib/client";
import { NextBtn, PrevBtn } from "./pagination-components";

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
  // numOfPages is temp, need values from the posts query result
  // const numOfPages = await client.fetch(`count(*[_type == "post"])`);
  const totalNumOfPages = Math.ceil(totalPostsAmount / numOfPostsShown);
  const textArray = Array.from({ length: totalNumOfPages }, (e, i, ray) => {
    return {
      id: i,
      page: i + 1,
    };
  });
  return (
    <div className="flex justify-center items-center gap-8 mt-12 text-sm">
      <PrevBtn searchParams={searchParams} />
      <ul className="flex justify-center items-center gap-4">
        {textArray.map((item) => {
          return (
            <li key={item.id} className="">
              {item.page}
            </li>
          );
        })}
      </ul>
      <NextBtn
        searchParams={searchParams}
        totalNumOfPages={totalNumOfPages}
      />
    </div>
  );
};

export default PostsPagination;
