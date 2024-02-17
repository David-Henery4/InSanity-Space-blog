import Link from "next/link";

const PrevBtn = ({ searchParams }) => {
  let tempPageNumber = searchParams?.page ? +searchParams?.page : 1;
  //
  const removePageQuery = () => {
    const newParams = new URLSearchParams(searchParams);
    //
    if (searchParams?.page && +searchParams?.page <= 2) {
      newParams.delete("page");
      return `/?${newParams.toString()}#posts-container`;
    }
    //
    if (searchParams?.page && +searchParams?.page > 1) {
      return {
        query: {
          ...searchParams,
          page: `${(tempPageNumber -= 1)}`,
        },
        hash: "posts-container",
      };
    }
    //
    return `/?${newParams.toString()}#posts-container`
  };
  //
  return (
    <Link
      href={removePageQuery()}
      className={`min-w-[80px] p-2 border-2 border-white rounded-sm text-center hover:bg-white hover:text-black active:bg-opacity-0 active:text-white ${
        +searchParams?.page <= 1 || !+searchParams?.page && "opacity-0 pointer-events-none"
      } `}
    >
      Previous
    </Link>
  );
};

export default PrevBtn;
