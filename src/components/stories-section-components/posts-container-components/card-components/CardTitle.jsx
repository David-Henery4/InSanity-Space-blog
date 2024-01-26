import Link from "next/link";

const CardTitle = ({ title, slug }) => {
  //
  return (
    <Link href={`post/${slug}`}>
      <h3 className="text-lg font-bold  max-w-[320px] hover:text-orange">{title}</h3>
    </Link>
  );
};

export default CardTitle;
