
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

export default defaultPostFilter