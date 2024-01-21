import { formatDate } from "@/helpers"

const PostUpdatedDate = ({ updatedAt }) => {
  return (
    <p className="text-xs text-green font-normal">
      Updated on {formatDate(updatedAt)}
    </p>
  );
};

export default PostUpdatedDate