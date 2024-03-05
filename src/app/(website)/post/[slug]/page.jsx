import { client } from "../../../../../sanity/lib/client"
import { PostBody, PostHeader } from "@/components/single-page-components";
import getSinglePost from "@/utils/getSinglePost";
import { revalidateTag } from "next/cache";
import { draftMode } from "next/headers";
import SinglePostPreview from "@/components/preview-components/SinglePostPreview";
import { urlFor } from "@/helpers";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params: {slug} }) => {
  const { initial: {data} } = await getSinglePost(slug);
  return {
    title: {
      default: data?.title,
    },
    description: data?.postDescription,
    openGraph:{
      images: [
        {
          url: data?.mainImage ? urlFor(data?.mainImage)?.url() : ""
        }
      ]
    }
  };
};

export async function generateStaticParams () {
  // "getSinglePost" might have to use for revalidation, if
  // data was expected to change a lot.
  // But I don't expect the slug or id would change often.
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    slug
  }`);
  //
  return posts.map((post) => ({
    slug: post.slug.current,
    _id: post._id,
  }));
}

const SinglePostPage = async ({params}) => {
  const { initial, postQuery } = await getSinglePost(params?.slug);
  revalidateTag("singlePost");
  //
  if (initial.data === null){
    notFound()
  }
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