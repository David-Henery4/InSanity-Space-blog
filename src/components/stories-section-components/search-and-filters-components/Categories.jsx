import { Tag } from "@/components/shared";
import { client } from "../../../../sanity/lib/client";

const Categories = async () => {
  const categories = await client.fetch(
    `*[_type == "category"]`
  );
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