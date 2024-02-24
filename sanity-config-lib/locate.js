import { DocumentLocationResolver, DocumentLocationsState } from "sanity/presentation"
import { map, Observable } from "rxjs"

export const locate = (params, context) =>  {
  // console.log("Observable: ", Observable);

  // Set up locations for post documents
  if (params.type === "post" || params.type === "author") {
    // Subscribe to the latest slug and title
    /* 
      Listen to all changes in the selected document 
      and all documents that reference it
    */
    const doc$ = context.documentStore.listenQuery(
      `*[_id==$id || references($id)]{_type,slug,title, name}`,
      params,
      { perspective: "previewDrafts" }, // returns a draft article if it exists
    );

    // Return a streaming list of locations
    // pipe the real-time results to RXJS's map function
    return doc$.pipe(
      map((docs) => {
        if (!docs) {
          return {
            message: "Unable to map docsument type to locations",
            tone: "critical",
          };
        }

        //****Author URLs not needed for this project because, ****/
        //**** there arn't any author pages ****/

        // Generate all the locations for person documents
        // 
        // const authorsLocations = docs
        //   .filter(({ _type, slug }) => _type === "author" && slug?.current)
        //   .map(({ name, slug }) => ({
        //     title: name || "Name missing",
        //     href: `/authors/${slug.current}`,
        //   }));

        const authorsLocations = docs
          .filter(({ _type, slug }) => _type === "author")
          .map(({ name, slug }) => ({
            title: name || "Name missing",
            href: `/`,
          }));

        // Generate all the locations for post documents
        const postLocations = docs
          .filter(({ _type, slug }) => _type === "post" && slug?.current)
          .map(({ title, slug }) => ({
            title: title || "Name missing",
            href: `/post/${slug.current}`,
          }));

        return {
          locations: [
            ...authorsLocations,
            ...postLocations,

            // Add a link to the "All posts" page when there are post documents
            // No "/posts" page
            // postLocations.length > 0 && {
            //   title: "All posts",
            //   href: "/posts",
            // },

            // No "/posts" page
            // Add a link to the "All authors" page when there are person documents
            // authorsLocations.length > 0 && {
            //   title: "All authors",
            //   href: "/authors",
            // },
          ], // Might need: .filter(Boolean)
        };
      })
    );
  }

  return null;
}