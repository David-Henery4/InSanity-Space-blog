"use server";
import { revalidateTag } from "next/cache";
import { loadQuery } from "../../sanity/lib/store";

const getFeaturedStories = async () => {
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
};

export default getFeaturedStories;
