"use server"
import { revalidateTag } from "next/cache"
import { client } from "../../sanity/lib/client";

const getAllCategories = async () => {
  try {
    const categories = await client.fetch(`*[_type == "category"]`, {}, {
      next: {
        tags: ["categories"]
      }
    });
    revalidateTag("categories");
    const res = await categories
    return res
  } catch (error) {
    console.log(error)
    console.error(error)
  }
}

export default getAllCategories