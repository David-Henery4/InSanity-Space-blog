"use server"
import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";


const getPosts = async (numOfPostsShown) => {
  try {
    const allPostsData = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter}`,
      {},
      {
        next: { tags: ["allPosts"] },
      }
    );
    const tempData = await client.fetch(`{
      "postsList": *[_type == "post"] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter},
      "totalPosts": count(*[_type == "post"] | order(publishedAt desc) ${defaultPostFilter})
    }`, {},
      {
        next: { tags: ["allPosts"] },
      });
    // console.log(tempData)
    revalidateTag("allPosts");
    const res = await tempData;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;
