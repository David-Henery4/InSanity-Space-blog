import { BlogCard } from "./posts-container-components";
import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";
// import { revalidateTag } from "next/cache";

const wait = async (n) => {
  return new Promise((resolve) => setTimeout(resolve, n));
};

// id || searchQuery
//   ? (posts = await getPostsFromQuery(id, searchQuery, numOfPostsShown))
//   : (posts = await getPosts(numOfPostsShown));
// revalidateTag("allPosts");
// await wait(20000)

const PostsContainer = async ({ searchParams, numOfPostsShown }) => {
  const searchQuery = searchParams?.search;
  const id = searchParams?.id?.split(",");
  const currentPageNumber = +searchParams?.page || 1
  console.log("posts container, page num: ", currentPageNumber)
  let posts = [];
  //
  console.log("posts container component", searchQuery);
  //
  if (id || searchQuery) {
    const { queriedPostsList } = await getPostsFromQuery(
      id,
      searchQuery,
      numOfPostsShown
    );
    posts = queriedPostsList;
  } else {
    const { postsList } = await getPosts(numOfPostsShown);
    posts = postsList;
  }
  //
  return (
    <div className="w-full mt-4 grid grid-cols-postsMob gap-y-8 gap-x-5 tab:grid-cols-[auto]">
      {posts?.map((post) => {
        return <BlogCard key={post._id} {...post} />;
      })}
    </div>
  );
};

export default PostsContainer;
