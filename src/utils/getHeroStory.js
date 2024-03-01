"use server";
import { revalidateTag } from "next/cache";
import { loadQuery } from "../../sanity/lib/store";

const getHeroStory = async () => {
  const mainStory = await loadQuery(
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
    const res = await mainStory.data
    return res
};

export default getHeroStory;
