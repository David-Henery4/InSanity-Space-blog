import { createQueryStore } from "@sanity/react-loader";

export const {
  // Server-side
  loadQuery, 
  setServerClient,
  // Client-side
  useQuery, 
  useLiveMode 
} = createQueryStore({ client: false, ssr: true });
