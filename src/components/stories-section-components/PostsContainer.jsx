import { BlogCard } from "./posts-container-components"

const PostsContainer = () => {
  return (
    <div className="w-full grid grid-cols-postsMob gap-y-8 gap-x-5 tab:grid-cols-[auto]">

      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>

    </div>
  )
}

export default PostsContainer