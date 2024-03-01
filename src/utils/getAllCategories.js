"use server"
import { revalidateTag } from "next/cache"
import { loadQuery } from "../../sanity/lib/store";

const getAllCategories = async () => {
    const categories = await loadQuery(`*[_type == "category"]`, {}, {
      next: {
        tags: ["categories"]
      }
    });
    revalidateTag("categories");
    const res = await categories.data
    return res
}

export default getAllCategories