export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "featuredPost",
      title: "Featured Post",
      type: "boolean",
      description: "Toggle to true if featured post",
      initialValue: false,
    },
    {
      name: "mainStory",
      title: "Main Story",
      type: "boolean",
      description: "Toggle to true if this is the main story",
      initialValue: false,
    },
    {
      name: "postDescription",
      title: "Post Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().max(90).warning("Can't be longer than 90 characters"),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  initialValue: {
    featuredPost: false,
  },

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
