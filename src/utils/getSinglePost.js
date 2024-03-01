"use server"
import singlePostFilter from "./filterOptions/singlePageFilter";
import { loadQuery } from "../../sanity/lib/store";
import { draftMode } from "next/headers";

const getSinglePost = async (slug) => {
  const postQuery = `*[_type == "post" && slug.current == "${slug}"][0]${singlePostFilter}`;
  try {
    const initial = await loadQuery(
      postQuery,
      {},
      {
        next: { tags: ["singlePost"] },
        perspective: draftMode().isEnabled ? "previewDrafts" : "published",
      }
    );
    // revalidateTag("singlePost");
    const res = {initial, postQuery}
    return res
  } catch (error) {
    console.log(error)
    console.error(error)
  }
}

export default getSinglePost