import { type Slugs } from "https://deno.land/x/fsrouter/mod.ts";

// req url: /any/route
export default (_req: Request, slugs: Slugs) => {
  return new Response(`Hello blog/${slugs.id}`);
};
