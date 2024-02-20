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

const getPosts = async (
  numOfPostsShown,
  currentPageNumber = null,
  lastPostItem
) => {
  try {
    console.log("current page num in 'getPosts': ", currentPageNumber);
    console.log("LastItem in 'getPosts': ", lastPostItem);
    // Testing Pagination
    let lastPublishedAtTemp = ``;
    let lastIdAtTemp = ``;
    // $lastPublishedAt & $lastId = variables needed
    // Test VARIABLES
    // $lastPublishedAt = "2023-12-12T10:33:00.000Z"
    // $lastId = "c6a82200-1edc-48b4-8892-ff1c8aabfa00"
    const pagString = `*[_type == "post" && (publishedAt > "2023-12-12T10:33:00.000Z"
  || (publishedAt == "2023-12-12T10:33:00.000Z" && _id > "c6a82200-1edc-48b4-8892-ff1c8aabfa00"))] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter}`;
    console.log(pagString);

    // WITH QUERY STRING
    //   const pagString = `*[_type == "post" && (publishedAt > "2023-12-12T10:33:00.000Z"
    // || (publishedAt == "2023-12-12T10:33:00.000Z" && _id > "c6a82200-1edc-48b4-8892-ff1c8aabfa00")) && count(categories[@->title in ["Astronomy"]]) > 0 && [title, postDescription, author->.name, pt::text(body) ] match ["dust"] ]  | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter}`;
    //   console.log(pagString);

    //////////////////////////////
    const allPostsData = await client.fetch(
      `{
      "postsList": *[_type == "post"] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter},
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
