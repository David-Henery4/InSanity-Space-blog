import { client } from "../../sanity/lib/client";
import defaultPostFilter from "./filterOptions/defaultPostFilter";


const getPosts = async () => {
  try {
    const allPostsData = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc)${defaultPostFilter}`
    );
    const res = await allPostsData;
    return res;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};

export default getPosts;
