import { BlogCard } from "./posts-container-components"
import getPosts from "@/utils/getPosts";

const wait = async (n) => {
  return new Promise(resolve => setTimeout(resolve, n))
}

const PostsContainer = async ({ id, searchQuery }) => {
  console.log("posts container component", searchQuery);
  //
  const posts = await getPosts(id, searchQuery);
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