import { client } from "../../../../../sanity/lib/client"
import { PostBody, PostHeader } from "@/components/single-page-components";
import getSinglePost from "@/utils/getSinglePost";
import { revalidateTag } from "next/cache";
import { draftMode } from "next/headers";
import SinglePostPreview from "@/components/preview-components/SinglePostPreview";


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

const wait = async (n) => {
  return new Promise((resolve) => setTimeout(resolve, n));
};

const SinglePostPage = async ({params}) => {
  // console.log(slug)
  const { initial, postQuery } = await getSinglePost(params?.slug);
  revalidateTag("singlePost");
  // await wait(20000);
  // console.log("postInfo",postInfo)
  //
  return (
    draftMode().isEnabled ? (
      <SinglePostPreview postsGroqQuery={postQuery} initial={initial} params={params}/>
    ) : (
      <main className="w-full col-start-2 col-end-12 pt-4 pb-28 tab:pt-9 medTab:pt-16">
        <PostHeader {...initial.data} />
  
        <PostBody body={initial.data?.body} />
      </main>
    )
  );
}

export default SinglePostPage