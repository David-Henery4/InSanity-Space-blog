"use server";
import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";
import { loadQuery } from "../../sanity/lib/store";

import { draftMode } from "next/headers";

const allPostsDataQuery = (firstItem, lastItem) => {
  return `{
      "postsList": *[_type == "post"] | order(publishedAt desc) [${firstItem}...${lastItem}] ${defaultPostFilter},
      "totalPosts": count(*[_type == "post"] | order(publishedAt desc) ${defaultPostFilter})
    }`;
};

const getPosts = async (numOfPostsShown, currentPageNumber) => {
  try {
    const firstItem = (+currentPageNumber - 1) * +numOfPostsShown;
    const lastItem = +currentPageNumber * +numOfPostsShown;
    const allPostsData = await loadQuery(
      allPostsDataQuery(firstItem, lastItem),
      {},
      {
        next: { tags: ["allPosts"] },
        perspective: draftMode().isEnabled ? "previewDrafts" : "published",
      }
    );
    //
    revalidateTag("allPosts");
    const res = {
      initial: allPostsData,
      postsGroqQuery: allPostsDataQuery(firstItem, lastItem),
    };
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;

//////////////////////////////
// Pagination using slice (For now, will try filtering)
// const firstItem = (+currentPageNumber - 1) * +numOfPostsShown;
// const lastItem = +currentPageNumber * +numOfPostsShown
//
// const allPostsData = await client.fetch(
//   `{
//   "postsList": *[_type == "post"] | order(publishedAt desc) [${firstItem}...${lastItem}] ${defaultPostFilter},
//   "totalPosts": count(*[_type == "post"] | order(publishedAt desc) ${defaultPostFilter})
// }`,
//   {},
//   {
//     next: { tags: ["allPosts"] },
//   }
// );
// console.log(allPostsData)

// old fetch:
// const allPostsData = await client.fetch(
//   `*[_type == "post"] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter}`,
//   {},
//   {
//     next: { tags: ["allPosts"] },
//   }
// );
