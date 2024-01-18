import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";

const builder = imageUrlBuilder(client);

const urlFor = (src) => {
  return builder.image(src);
};

export default urlFor