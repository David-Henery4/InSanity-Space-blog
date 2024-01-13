import { BlogCard } from "./posts-container-components"

const PostsContainer = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-8">

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