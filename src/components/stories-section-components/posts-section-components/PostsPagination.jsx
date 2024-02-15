import getPosts from "@/utils/getPosts";
import getPostsFromQuery from "@/utils/getPostsFromQuery";

const PostsPagination = ({id, searchQuery}) => {
  const textArray = Array.from({ length: 17 }, (e, i, ray) => {
    return {
      id: i,
      page: i + 1,
    };
  });
  return (
    <div className="flex justify-center items-center gap-8 mt-12 text-sm">
      <button className="min-w-[80px] p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black active:bg-opacity-0 active:text-white">
        Previous
      </button>
      <ul className="flex justify-center items-center gap-4">
        {textArray.map((item) => {
          return (
            <li key={item.id} className="">
              {item.page}
            </li>
          );
        })}
      </ul>
      <button className="min-w-[80px] p-2 border-2 border-white rounded-sm hover:bg-white hover:text-black active:bg-opacity-0 active:text-white">
        Next
      </button>
    </div>
  );
};

export default PostsPagination;
