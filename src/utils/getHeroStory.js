"use server";
import { client } from "../../sanity/lib/client";
import { revalidateTag } from "next/cache";

const getHeroStory = async () => {
  try {
    const mainStory = await client.fetch(
      `*[_type == "post" && mainStory == true][0]{
  _id,
  title,
  author->,
  publishedAt,
  mainImage,
  postDescription,
  slug
}`,
      {},
      {
        next: {
          tags: ["heroStory"],
        },
      }
    );
    revalidateTag("heroStory")
    revalidateTag("singlePost");
    const res = await mainStory
    return res
  } catch (error) {}
};

export default getHeroStory;
