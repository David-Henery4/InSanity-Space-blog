"use server"
import { revalidateTag } from "next/cache"
import { client } from "../../sanity/lib/client";
import { loadQuery } from "../../sanity/lib/store";

const getAllCategories = async () => {
  try {
    const categories = await loadQuery(`*[_type == "category"]`, {}, {
      next: {
        tags: ["categories"]
      }
    });
    revalidateTag("categories");
    const res = await categories.data
    return res
  } catch (error) {
    console.log(error)
    console.error(error)
  }
}

export default getAllCategories