"use server";
import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";
import { loadQuery } from "../../sanity/lib/store";

const getPostsFromCategories = (categories) => {
  return `&& count(categories[@->title in [${categories?.map(
    (category) => `"${category}"`
  )}]]) > 0`;
};

const getPostsFromSearchQuery = (searchQuery) => {
  return `&& [title, postDescription, author->.name, pt::text(body) ] match ["${searchQuery}"]`;
};

const getPostsFromQuery = async (
  categories = false,
  searchQuery = false,
  numOfPostsShown,
  currentPageNumber
) => {
  try {
    // Pagination using slice (For now, will try filtering)
    const firstItem = (+currentPageNumber - 1) * +numOfPostsShown;
    const lastItem = +currentPageNumber * +numOfPostsShown;
    //
    // Get Posts with categories ONLY
    if (categories && !searchQuery) {
      const categoryFilteredPosts = await loadQuery(
        `{
          "queriedPostsList": *[_type == "post" ${getPostsFromCategories(
            categories
          )} ] | order(publishedAt desc) [${firstItem}...${lastItem}] ${defaultPostFilter},
          "queriedPostsTotal": count(*[_type == "post" ${getPostsFromCategories(
            categories
          )} ] | order(publishedAt desc) ${defaultPostFilter})
        }`,
        {},
        { next: { tags: ["allQueriedPosts"] } }
      );
      revalidateTag("allQueriedPosts");
      const res = await categoryFilteredPosts.data;
      return res;
    }
    //

    // Get Posts with searchQuery ONLY
    if (searchQuery && !categories) {
      const searchQueriedPosts = await loadQuery(
        `{
          "queriedPostsList": *[_type == "post" ${getPostsFromSearchQuery(
            searchQuery
          )} ] | order(publishedAt desc) [${firstItem}...${lastItem}] ${defaultPostFilter},
          "queriedPostsTotal": count(*[_type == "post" ${getPostsFromSearchQuery(
            searchQuery
          )} ] | order(publishedAt desc) ${defaultPostFilter})
        }`,
        {},
        { next: { tags: ["allQueriedPosts"] } }
      );
      revalidateTag("allQueriedPosts");
      const res = await searchQueriedPosts.data;
      return res;
    }
    //

    // Get posts from categories AND searchQuery
    const FilteredAndSearchedPosts = await loadQuery(
      `{
        "queriedPostsList": *[_type == "post" ${getPostsFromCategories(
          categories
        )} ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc) [${firstItem}...${lastItem}] ${defaultPostFilter},
        "queriedPostsTotal": count(*[_type == "post" ${getPostsFromCategories(
          categories
        )} ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc) ${defaultPostFilter})
    }`,
      {},
      { next: { tags: ["allQueriedPosts"] } }
    );
    //
    revalidateTag("allQueriedPosts");
    const res = await FilteredAndSearchedPosts.data;
    return res;
    //
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPostsFromQuery;
