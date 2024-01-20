import { HeadingSection, PostsContainer, SearchAndFilters } from "../stories-section-components"
import { client } from "../../../sanity/lib/client"

// *[_type == "post"]{
//   _id,
//     slug,
//   title,
// mainImage,
// publishedAt,
//   categories[]->
// }

const StoriesSection = async () => {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      slug,
      title,
      mainImage,
      publishedAt,
      categories[]->,
      author->,
      body
    }`
  );
  // console.log(posts)
  return (
    <section
      className="w-full grid gap-y-11 lgLap:grid-cols-postsSectionLap lgLap:gap-x-8 lgLap:gap-y-28"
      id="stories"
    >
      <HeadingSection />

      <SearchAndFilters posts={posts} />

      <PostsContainer posts={posts} />
    </section>
  );
}

export default StoriesSection