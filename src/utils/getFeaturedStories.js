"use server";
import { client } from "../../sanity/lib/client";
import { revalidateTag } from "next/cache";
import { loadQuery } from "../../sanity/lib/store";

const getFeaturedStories = async () => {
  try {
    const featuredStories = await loadQuery(
      `*[_type == "post" && featuredPost == true]{
  _id,
  title,
  body,
  author->,
  publishedAt,
  categories[]->,
  mainImage,
  postDescription,
  slug
}`,
      {},
      {
        next: {
          tags: ["featuredStories"],
        },
      }
    );
    revalidateTag("featuredStories");
    const res = await featuredStories.data;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getFeaturedStories;
