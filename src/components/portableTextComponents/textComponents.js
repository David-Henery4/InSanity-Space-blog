import { BlockComponent } from "./textToDisplayComponents";

const components = {
  types: {
    block: BlockComponent,
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
};

export default components