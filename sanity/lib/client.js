import { createClient } from "@sanity/client/stega";

import { apiVersion, dataset, projectId, useCdn } from "../env";

// NEXT_PUBLIC_STUDIO_ORIGIN: Still needs to be added to .env.local
// export const STUDIO_ORIGIN =
//   process.env.NEXT_PUBLIC_STUDIO_ORIGIN || "http://localhost:3000";

export const STEGA_ENABLED = process.env.NODE_ENV !== "production";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: "published",
  stega: {
    enabled: false, // was "true"
    studioUrl: "/studio", // could use "STUDIO_ORIGIN" (I think?)
    // studioUrl: "https://my.sanity.studio",
  },
});

