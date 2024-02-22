"use server";
import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";

// old fetch:
// const allPostsData = await client.fetch(
//   `*[_type == "post"] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter}`,
//   {},
//   {
//     next: { tags: ["allPosts"] },
//   }
// );

const getPosts = async (numOfPostsShown, currentPageNumber) => {
  try {
    //////////////////////////////
    // Pagination using slice (For now, will try filtering)
    const firstItem = (+currentPageNumber - 1) * +numOfPostsShown;
    const lastItem = +currentPageNumber * +numOfPostsShown
    //
    const allPostsData = await client.fetch(
      `{
      "postsList": *[_type == "post"] | order(publishedAt desc) [${firstItem}...${lastItem}] ${defaultPostFilter},
      "totalPosts": count(*[_type == "post"] | order(publishedAt desc) ${defaultPostFilter})
    }`,
      {},
      {
        next: { tags: ["allPosts"] },
      }
    );
    // console.log(allPostsData)
    revalidateTag("allPosts");
    const res = await allPostsData;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;
