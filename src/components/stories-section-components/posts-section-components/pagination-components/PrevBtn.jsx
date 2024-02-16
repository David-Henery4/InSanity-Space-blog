import Link from "next/link";

const PrevBtn = ({ searchParams }) => {
  let tempPageNumber = searchParams?.page ? +searchParams?.page : 1;
  console.log("ee", +tempPageNumber);
  //
  const tempParams = {
    query: {
      ...searchParams,
      page: `${(tempPageNumber -= 1)}`,
    },
    hash: "posts-container",
  };

  //
  const removePageQuery = () => {
    // console.log("removePageQuery: ", searchParams);
    if (searchParams?.page && tempPageNumber <= 1) {
      console.log("chwck", +tempPageNumber);
      delete searchParams?.page;
      return {
        query: {
          ...searchParams,
        },
        hash: "posts-container",
      };
    }
    return {
      query: {
        ...searchParams,
        page: `${(tempPageNumber -= 1)}`,
      },
      hash: "posts-container",
    };
  };
  // removePageQuery()
  //
  return (
    <Link
      href={tempParams}
      className="min-w-[80px] p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black active:bg-opacity-0 active:text-white"
    >
      Previous
    </Link>
  );
};

export default PrevBtn;
