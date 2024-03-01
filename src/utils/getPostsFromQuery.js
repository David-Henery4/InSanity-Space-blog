"use server";
import defaultPostFilter from "./filterOptions/defaultPostFilter";
import { revalidateTag } from "next/cache";
import { loadQuery } from "../../sanity/lib/store";

import { draftMode } from "next/headers";

const getPostsFromCategories = (categories) => {
  return `&& count(categories[@->title in [${categories?.map(
    (category) => `"${category}"`
  )}]]) > 0`;
};

const getPostsFromSearchQuery = (searchQuery) => {
  return `&& [title, postDescription, author->.name, pt::text(body) ] match ["${searchQuery}"]`;
};

//////////////////

// BASE QUERY STRING FUNCTIONS

const categoryFilteredPostsQueryString = (firstItem, lastItem, categories) => {
  return `{
      "queriedPostsList": *[_type == "post" ${getPostsFromCategories(
        categories
      )} ] | order(publishedAt desc) [${firstItem}...${lastItem}]${defaultPostFilter},
      "queriedPostsTotal": count(*[_type == "post" ${getPostsFromCategories(
        categories
      )} ] | order(publishedAt desc) ${defaultPostFilter})
    }`;
};

const searchQueriedPostsQueryString = (firstItem, lastItem, searchQuery) => {
  return `{
      "queriedPostsList": *[_type == "post" ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc) [${firstItem}...${lastItem}]${defaultPostFilter},
      "queriedPostsTotal": count(*[_type == "post" ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc) ${defaultPostFilter})
    }`;
};

const filteredAndSearchedPostsQueryString = (
  firstItem,
  lastItem,
  categories,
  searchQuery
) => {
  return `{
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
    }`;
};

///////////////

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
        categoryFilteredPostsQueryString(firstItem, lastItem, categories),
        {},
        {
          next: { tags: ["allQueriedPosts"] },
          perspective: draftMode().isEnabled ? "previewDrafts" : "published",
        }
      );
      revalidateTag("allQueriedPosts");
      const res = {
        initial: categoryFilteredPosts,
        postsGroqQuery: categoryFilteredPostsQueryString(
          firstItem,
          lastItem,
          categories
        ),
      };
      return res;
    }
    //

    // Get Posts with searchQuery ONLY
    if (searchQuery && !categories) {
      const searchQueriedPosts = await loadQuery(
        searchQueriedPostsQueryString(firstItem, lastItem, searchQuery),
        {},
        {
          next: { tags: ["allQueriedPosts"] },
          perspective: draftMode().isEnabled ? "previewDrafts" : "published",
        }
      );
      revalidateTag("allQueriedPosts");
      const res = {
        initial: searchQueriedPosts,
        postsGroqQuery: searchQueriedPostsQueryString(
          firstItem,
          lastItem,
          searchQuery
        ),
      };
      return res;
    }
    //

    // Get posts from categories AND searchQuery
    const filteredAndSearchedPosts = await loadQuery(
      filteredAndSearchedPostsQueryString(firstItem, lastItem, categories, searchQuery),
      {},
      {
        next: { tags: ["allQueriedPosts"] },
        perspective: draftMode().isEnabled ? "previewDrafts" : "published",
      }
    );
    //
    revalidateTag("allQueriedPosts");
    const res = {
      initial: filteredAndSearchedPosts,
      postsGroqQuery: filteredAndSearchedPostsQueryString(
        firstItem,
        lastItem,
        categories,
        searchQuery
      ),
    };
    return res;
    //
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPostsFromQuery;
