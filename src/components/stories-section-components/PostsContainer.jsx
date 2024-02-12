import { BlogCard } from "./posts-container-components"
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
import { revalidateTag } from "next/cache";

const wait = async (n) => {
  return new Promise(resolve => setTimeout(resolve, n))
}

const PostsContainer = async ({ id, searchQuery }) => {
  console.log("posts container component", searchQuery);
  //
  let posts = []
  id || searchQuery
    ? (posts = await getPostsFromQuery(id, searchQuery))
    : posts = await getPosts();
  revalidateTag("allPosts");
  // await wait(20000)
  //
  return (
    <div className="w-full mt-4 grid grid-cols-postsMob gap-y-8 gap-x-5 tab:grid-cols-[auto]">
      {posts?.map((post) => {
        return <BlogCard key={post._id} {...post} />;
      })}
    </div>
  );
};

export default PostsContainer