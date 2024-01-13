import { HeadingSection, PostsContainer, SearchAndFilters } from "../stories-section-components"

const StoriesSection = () => {
  return (
    <section className="grid col-start-2 col-end-12 gap-y-11">
      
      <HeadingSection/>
      
      <SearchAndFilters/>
      
      <PostsContainer/>
      
    </section>
  )
}

export default StoriesSection