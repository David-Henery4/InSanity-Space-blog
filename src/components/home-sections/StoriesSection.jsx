import {
  HeadingSection,
  SearchAndFilters,
  PostsSection
} from "../stories-section-components";

const StoriesSection = ({ searchParams }) => {
  //searchQuery = searchParams?.search
  // id = searchParams?.id?.split(",");
  return (
    <section
      className="w-full pt-8 grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters />

      <PostsSection
        searchParams={searchParams}
      />
    </section>
  );
};

export default StoriesSection;
