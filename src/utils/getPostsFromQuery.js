import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";

const getPostsFromCategories = (categories) => {
  return `&& count(categories[@->title in [${categories?.map(
    (category) => `"${category}"`
  )}]]) > 0`;
};

const getPostsFromSearchQuery = (searchQuery) => {
  return `&& [title, postDescription, author->.name, pt::text(body) ] match ["${searchQuery}"]`
};

const getPostsFromQuery = async (categories = false, searchQuery = false) => {
  try {
    
    // Get Posts with categories ONLY
    if (categories && !searchQuery) {
      const categoryFilteredPosts = await client.fetch(
        `*[_type == "post" ${getPostsFromCategories(
          categories
        )} ] | order(publishedAt desc)${defaultPostFilter}`
      );
      const res = await categoryFilteredPosts;
      return res;
    }
    //
    
    // Get Posts with searchQuery ONLY
    if (searchQuery && !categories) {
      const searchQueriedPosts = await client.fetch(
        `*[_type == "post" ${getPostsFromSearchQuery(
          searchQuery
        )} ] | order(publishedAt desc)${defaultPostFilter}`
      );
      const res = await searchQueriedPosts;
      return res;
    }
    //
    
    // Get posts from categories AND searchQuery
    const FilteredAndSearchedPosts = await client.fetch(
      `*[_type == "post" ${getPostsFromCategories(
        categories
      )} ${getPostsFromSearchQuery(
        searchQuery
      )} ] | order(publishedAt desc)${defaultPostFilter}`
    );
    const res = await FilteredAndSearchedPosts;
    return res;
    //
    
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPostsFromQuery;
