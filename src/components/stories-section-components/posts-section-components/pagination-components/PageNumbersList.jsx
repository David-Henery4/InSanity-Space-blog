import Link from "next/link";

const PageNumbersList = ({
  searchParams,
  totalNumOfPages,
  
}) => {
  const textArray = Array.from({ length: totalNumOfPages }, (e, i, ray) => {
    return {
      id: i,
      page: i + 1,
    };
  });
  //
  const handleSetPageNumber = (newPageNumber) => {
    const newParams = new URLSearchParams(searchParams);

    if (newPageNumber <= 1) {
      newParams.delete("page");
      return `/?${newParams.toString()}#posts-container`;
    }

    return {
      query: {
        ...searchParams,
        page: newPageNumber,
      },
      hash: "posts-container",
    };
  };
  //
  return (
    <ul className="flex justify-center items-center gap-4">
      {textArray.map((item) => {
        const isFirstPage =
          !searchParams?.page || searchParams?.page <= 1 ? 1 : null;
        return (
          <li
            key={item.id}
            className={`${
              +searchParams?.page === +item?.page || isFirstPage === +item?.page
                ? "text-orange"
                : ""
            }`}
          >
            <Link href={handleSetPageNumber(item?.page)}>{item.page}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PageNumbersList