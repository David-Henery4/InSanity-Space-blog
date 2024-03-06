import { client } from "../../sanity/lib/client";

export default async function sitemap() {
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    slug,
    _updatedAt
  }`);
  //
  const pageUrlEntries = posts.map((post) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/post/${post?.slug?.current}`,
      lastModified: new Date(post?._updatedAt),
    };
  })
  //
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      priority: 1
    },
    ...pageUrlEntries,
  ];
}
