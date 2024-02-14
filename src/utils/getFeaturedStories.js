"use server";
import { client } from "../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const getFeaturedStories = async () => {
  try {
    const featuredStories = await client.fetch(
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
    const res = await featuredStories;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getFeaturedStories;
