"use server";
import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";

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
  numOfPostsShown
) => {
  try {
    // Get Posts with categories ONLY
    if (categories && !searchQuery) {
      const categoryFilteredPosts = await client.fetch(
        `{
          "queriedPostsList": *[_type == "post" ${getPostsFromCategories(
            categories
          )} ] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter},
          "queriedPostsTotal": count(*[_type == "post" ${getPostsFromCategories(
            categories
          )} ] | order(publishedAt desc) ${defaultPostFilter})
        }`, {},{ next: { tags: ["allQueriedPosts"] }, }
      );
      revalidateTag("allQueriedPosts");
      const res = await categoryFilteredPosts;
      return res;
    }
    //

    // Get Posts with searchQuery ONLY
    if (searchQuery && !categories) {
      const searchQueriedPosts = await client.fetch(
        `{
          "queriedPostsList": *[_type == "post" ${getPostsFromSearchQuery(
            searchQuery
          )} ] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter},
          "queriedPostsTotal": count(*[_type == "post" ${getPostsFromSearchQuery(
            searchQuery
          )} ] | order(publishedAt desc) ${defaultPostFilter})
        }`, {},{ next: { tags: ["allQueriedPosts"] },
        }
      );
      revalidateTag("allQueriedPosts");
      const res = await searchQueriedPosts;
      return res;
    }
    //

    // Get posts from categories AND searchQuery
    const FilteredAndSearchedPosts = await client.fetch(
      `{
        "queriedPostsList": *[_type == "post" ${getPostsFromCategories(
          categories
        )} ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc) [0...${numOfPostsShown}] ${defaultPostFilter},
        "queriedPostsTotal": count(*[_type == "post" ${getPostsFromCategories(
          categories
        )} ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc) ${defaultPostFilter})
    }`,{},{ next: { tags: ["allQueriedPosts"] }, }
    );
    //
    revalidateTag("allQueriedPosts");
    const res = await FilteredAndSearchedPosts;
    return res;
    //
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPostsFromQuery;
