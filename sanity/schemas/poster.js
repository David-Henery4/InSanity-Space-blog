export const poster = {
  name: "poster",
  title: "Poster",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) =>
        Rule.max(68).warning(`Description shouldn't be more than 68 characters.`),
    },
    {
      title: "Poster Image",
      name: "posterImage",
      type: "image"
    }
  ],
};
