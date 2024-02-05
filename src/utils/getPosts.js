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
  return `*[_type == "post" && count(categories[@->title in [${categories}]]) > 0]${defaultPostFilter}`;
};

const getPosts = async (id = false) => {
  try {
    console.log("getPosts: ", `${id}`);
    const allPostsData = await client.fetch(defaultQuery);
    // const textData = await client.fetch(getCustomCategoryPost(id));
    console.log("testData: ", getCustomCategoryPost(id));
    // const allPostsData = await client.fetch(
    //   id ? getCustomCategoryPost(id) : defaultQuery
    // );
    const res = await allPostsData;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;
