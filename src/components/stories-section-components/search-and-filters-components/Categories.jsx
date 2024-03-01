import { Tag } from "@/components/shared";
import getAllCategories from "@/utils/getAllCategories";

const Categories = async () => {
  const categories = await getAllCategories()
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold text-center lgLap:text-left">
        CATEGORIES
      </h3>
      <div className="flex flex-wrap justify-center items-start mt-5 gap-3 lgLap:justify-start">
        {categories?.map((category) => {
          //
          return (
            <Tag key={category._id}>
              {category?.title}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}

export default Categories