// my-app/mod.ts
import { fsRouter } from "https://deno.land/x/fsrouter/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

serve(await fsRouter(import.meta.resolve("./pages")));
