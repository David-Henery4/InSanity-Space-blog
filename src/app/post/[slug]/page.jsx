import { client } from "../../../../sanity/lib/client"
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

const SinglePostPage = ({params}) => {
  console.log(params)
  
  return (
    <main className="w-full col-start-2 col-end-12 py-28">
      
      <PostHeader />
      
      <PostBody />
      
    </main>
  );
}

export default SinglePostPage