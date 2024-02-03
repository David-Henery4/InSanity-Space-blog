import { client } from "../../sanity/lib/client"

const defaultQuery = `*[_type == "post"] | order(publishedAt desc){
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
    style,
    _key
  },
  postDescription
    }`;

const getPosts = async (id, include) => {
  try {
    const allPostsData = await client.fetch(defaultQuery);
    const res = await allPostsData
    return res
  } catch (error) {
    console.log(error)
    console.error(error)
  }
}

export default getPosts