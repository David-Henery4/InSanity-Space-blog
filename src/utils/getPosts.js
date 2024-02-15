"use server"
import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";


const getPosts = async () => {
  try {
    const allPostsData = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) ${defaultPostFilter}`,
      {},
      {
        next: { tags: ["allPosts"] },
      }
    );
    revalidateTag("allPosts");
    const res = await allPostsData;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;
