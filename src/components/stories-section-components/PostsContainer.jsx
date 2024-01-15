import { BlogCard } from "./posts-container-components"

const PostsContainer = () => {
  return (
    <div className="w-full mt-10 grid grid-cols-postsMob gap-y-8 gap-x-5 tab:grid-cols-[auto] lgLap:col-start-1 lgLap:col-end-9 lgLap:row-start-2 lgLap:row-end-3 lgLap:mt-0">

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