import { PortableText } from "@portabletext/react";
import components from "@/components/portableTextComponents/textComponents";

const PostBody = ({ body }) => {
  return (
  <section className="mt-14 max-w-[750px] mx-auto">
    <PortableText value={body}/>
  </section>
  )
};

export default PostBody;
