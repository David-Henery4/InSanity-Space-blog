import Link from "next/link";
import { formatDate } from "@/helpers";

const CardText = ({author, publishedAt, slug, postDescription, title}) => {
  return (
    <div className="mb-8">
      <p className="text-xs my-2 text-lightGrey lgTab:my-4">
        {author?.name} • {formatDate(publishedAt)}
      </p>
      <div>
        <Link href={`post/${slug?.current}`}>
          <h3 className="text-lg font-bold max-w-[360px] hover:text-orange">
            {title}
          </h3>
        </Link>
        <p className="mt-4 text-lightGrey">{postDescription}</p>
      </div>
    </div>
  );
}

export default CardText