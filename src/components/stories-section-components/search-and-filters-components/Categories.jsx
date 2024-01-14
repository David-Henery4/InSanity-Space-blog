import { Tag } from "@/components/shared";

const Categories = () => {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold text-center">CATEGORIES</h3>
      <div className="flex flex-wrap justify-center items-start mt-5 gap-3">
        <Tag>ALL CATEGORIES</Tag>
        <Tag>START UP</Tag>
        <Tag>TECHNOLOGY</Tag>
        <Tag>DEVELOPMENT</Tag>
        <Tag>MARKETING</Tag>
      </div>
    </div>
  );
}

export default Categories