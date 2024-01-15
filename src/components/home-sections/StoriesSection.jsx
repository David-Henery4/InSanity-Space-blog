import { HeadingSection, PostsContainer, SearchAndFilters } from "../stories-section-components"

const StoriesSection = () => {
  return (
    <section className="grid col-start-2 col-end-12 gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28" id="stories">
      <HeadingSection />

      <SearchAndFilters />

      <PostsContainer />
    </section>
  );
}

export default StoriesSection