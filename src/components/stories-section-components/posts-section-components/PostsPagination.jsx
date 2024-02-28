import { NextBtn, PrevBtn, PageNumbersList } from "./pagination-components";


const PostsPagination = ({
  numOfPostsShown,
  searchParams,
  totalPostsAmount,
}) => {
  //
  const totalNumOfPages = Math.ceil(totalPostsAmount / numOfPostsShown);
  //
  return (
    <div className="flex justify-center items-center gap-8 mt-12 text-sm">
      <PrevBtn searchParams={searchParams} />
      <PageNumbersList
        searchParams={searchParams}
        totalNumOfPages={totalNumOfPages}
      />
      <NextBtn searchParams={searchParams} totalNumOfPages={totalNumOfPages} />
    </div>
  );
};

export default PostsPagination;
