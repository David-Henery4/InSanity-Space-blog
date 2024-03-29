import { BlockComponent } from "./textToDisplayComponents";

const components = {
  // types: {
  //   // p: BlockComponent,
  //   // block: BlockComponent,
  //   blockquote: ({ children }) => {
  //     console.log(children)
  //     return <blockquote className="text-green">{children}</blockquote>
  //   },
  // },
  // styles: [],
  // decorators: [],
  block: {
    normal: BlockComponent,
    blockquote: ({ children }) => (
      <div className="px-4 py-6 border-l-4 my-10 border-l-orange bg-darkGrey rounded-md">
        <blockquote className="text-green italic">{children}</blockquote>
      </div>
    ),
    cardText: (props) => {
      //
      return (
        <p key={props.index}>
          {props.children} 
        </p>
        // <p>
        //   {children.map((item) => {
        //       console.log("item: ", item)
        //       return item?.type
        //         ? item?.type(item?.props)
        //         : item.substring(0, 90) + "...";
        //     })}
        // </p>
      );
    }
  },
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ul className="mt-xl">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc list-inside">{children}</li>
    ),
    number: ({ children }) => <li className="mt-xl">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      //
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          target="_blank"
          rel={rel}
          className="text-green underline"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      //
      const newPath = `/post${value.href}`;
      return (
        <a href={newPath} className="text-green underline">
          {children}
        </a>
      );
    },
  },
};

export default components;
