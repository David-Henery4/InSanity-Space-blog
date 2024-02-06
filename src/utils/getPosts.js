import { client } from "../../sanity/lib/client";

const defaultPostFilter = `
{
  _id,
  slug,
  title,
  mainImage,
  publishedAt,
  categories[]->,
  author->,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => { "href": "/"+ @.reference-> slug.current },
    },
    children,
    _type,
    tyle,
    _key
  },
  postDescription
}`;

const defaultQuery = `*[_type == "post"] | order(publishedAt desc)${defaultPostFilter}`;

const getCustomCategoryPost = (categories) => {
  const withAddedQuoteMarks = categories?.map(item => {
    return `"${item}"`
  })
  console.log("categories", categories);
  console.log("categories with marks", `${withAddedQuoteMarks}`);
  return `*[_type == "post" && count(categories[@->title in [${withAddedQuoteMarks}]]) > 0]${defaultPostFilter}`;
};

const getPosts = async (id = false) => {
  try {
    const allPostsData = await client.fetch(id ? getCustomCategoryPost(id) : defaultQuery);
    const res = await allPostsData;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;
