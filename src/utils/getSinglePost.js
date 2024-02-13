"use server"
import { client } from "../../sanity/lib/client"
import singlePostFilter from "./filterOptions/singlePageFilter";
// import { revalidateTag } from "next/cache";

const getSinglePost = async (slug) => {
  try {
    const singlePost = await client.fetch(
      `*[_type == "post" && slug.current == "${slug}"][0]${singlePostFilter}`,
      {},
      {
        next: { tags: ["singlePost"] },
      }
    );
    // revalidateTag("singlePost");
    const res = await singlePost
    return res
  } catch (error) {
    console.log(error)
    console.error(error)
  }
}

export default getSinglePost