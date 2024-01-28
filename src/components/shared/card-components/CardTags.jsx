import { Tag } from "..";

const CardTags = ({categories}) => {
  return (
    <div className="flex flex-wrap justify-start items-start content-start mt-auto gap-2 tab:h-full">
      {categories.map((category) => {
        //
        return (
          <Tag key={category._id} isCard={true}>
            {category?.title}
          </Tag>
        );
      })}
    </div>
  );
}

export default CardTags