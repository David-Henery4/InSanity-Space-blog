"use client";

import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { PostsContainer } from "../stories-section-components/posts-section-components";

const PostPreview = ({ initial, postsGroqQuery }) => {
  const { data } = useQuery(postsGroqQuery, {}, { initial });
  //
  // console.log(data)
  // console.log(data.postsList);
  return data ? (
    <PostsContainer posts={data.postsList || data.queriedPostsList} />
  ) : (
    <div className="text-orange w-full mt-4">No posts found</div>
  );
};

export default PostPreview;
