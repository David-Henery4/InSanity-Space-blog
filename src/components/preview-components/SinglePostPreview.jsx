"use client";
import { PostBody, PostHeader } from "@/components/single-page-components";
import { useQuery } from "@sanity/react-loader";

const SinglePostPreview = ({ initial, postsGroqQuery, params }) => {
  const {data} = useQuery(postsGroqQuery, params, {initial})
  //
  return data ? (
    <main className="w-full col-start-2 col-end-12 pt-4 pb-28 tab:pt-9 medTab:pt-16">
      <PostHeader {...data} />

      <PostBody body={data?.body} />
    </main>
  ) : (
    <div className="text-orange w-full col-start-2 col-end-12 pt-4 pb-28 tab:pt-9 medTab:pt-16">
      Post not found
    </div>
  );
};

export default SinglePostPreview