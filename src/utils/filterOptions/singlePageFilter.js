const singlePostFilter = `{
  ...,
  author->,
  categories[]->,
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
  }
}`;

export default singlePostFilter