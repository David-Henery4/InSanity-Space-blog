import { BlogCard } from "./posts-container-components";


const PostsContainer = ({ posts }) => {
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
