import {
  HeadingSection,
  SearchAndFilters,
  PostsSection
} from "../stories-section-components";

const StoriesSection = ({ id, searchQuery }) => {
  //
  return (
    <section
      className="w-full pt-8 grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters />

      <PostsSection id={id} searchQuery={searchQuery} />

    </section>
  );
};

export default StoriesSection;
