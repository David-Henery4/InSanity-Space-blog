import Link from "next/link"


const NextBtn = ({ searchParams }) => {
  console.log("PostsPagination: ", searchParams);
  //
  let tempPageNumber = searchParams?.page ? +searchParams?.page: 1;
  return (
    <Link
      href={{
        query: {
          ...searchParams,
          page: `${(tempPageNumber += 1)}`,
        },
        hash: "posts-container",
      }}
      className="min-w-[80px] p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black active:bg-opacity-0 active:text-white"
    >
      Next
    </Link>
  );
};

export default NextBtn