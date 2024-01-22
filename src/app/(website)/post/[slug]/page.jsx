import { client } from "../../../../../sanity/lib/client"
import { PostBody, PostHeader } from "@/components/single-page-components";


export async function generateStaticParams () {
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    slug
  }`);
  // console.log(posts)
  return posts.map((post) => ({
    slug: post.slug.current,
    _id: post._id
  }));
}

const SinglePostPage = async ({params: {slug}}) => {
  console.log(slug)
  const postInfo =
    await client.fetch(`*[_type == "post" && slug.current == "${slug}"][0]{
  mainImage,
  categories[]->,
  _id,
  slug,
  title,
  body,
  publishedAt,
  _updatedAt,
  author->
  }`);
  console.log(postInfo)
  //
  return (
    <main className="w-full col-start-2 col-end-12 pt-4 pb-28 tab:pt-9 medTab:pt-16">
      
      <PostHeader {...postInfo} />
      
      <PostBody body={postInfo?.body} />
      
    </main>
  );
}

export default SinglePostPage