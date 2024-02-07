import { BlogCard } from "./posts-container-components"
import getPosts from "@/utils/getPosts";

const wait = async (n) => {
  return new Promise(resolve => setTimeout(resolve, n))
}

const PostsContainer = async ({ id }) => {
  console.log("posts container component", id);
  //
  const posts = await getPosts(id);
  await wait(20000)
  //
  return (
    <div className="w-full mt-10 grid grid-cols-postsMob gap-y-8 gap-x-5 tab:grid-cols-[auto] lgLap:col-start-1 lgLap:col-end-9 lgLap:row-start-2 lgLap:row-end-3 lgLap:mt-0">
      {posts?.map((post) => {
        return (
        <BlogCard key={post._id} {...post} />
        )
      })}
    </div>
  );
};

export default PostsContainer