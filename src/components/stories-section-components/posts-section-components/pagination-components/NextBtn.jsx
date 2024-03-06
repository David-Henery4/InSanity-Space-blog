import Link from "next/link"


const NextBtn = ({ searchParams, totalNumOfPages }) => {
  //
  let tempPageNumber = searchParams?.page ? +searchParams?.page : 1;
  return (
    <Link
      href={{
        query: {
          ...searchParams,
          page: `${(tempPageNumber += 1)}`,
        },
        hash: "posts-container",
      }}
      className={`min-w-[80px] p-2 border-2 border-white rounded-sm text-center hover:bg-white hover:text-black active:bg-opacity-0 active:text-white ${
        totalNumOfPages <= 1 || searchParams?.page >= totalNumOfPages ? "opacity-0 pointer-events-none": ""
      }`}
    >
      Next
    </Link>
  );
};

export default NextBtn