// WARNING: This is an auto-generated file.

// This file SHOULD NOT be manually modified and SHOULD be checked in to source control.  
// This file should be used as the entry point file for Deno Deploy.

// If you're deploying to a Deno environment that supports dynamic imports (e.g. something other than Deno Deploy)
// and you want to opt out of generating this file, you can
//  1) Set RouterOptions.generateManifest to false
//  2) Delete this file
 
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { fsRouter } from "https://deno.land/x/fsrouter/core/handler.ts";
import { Route } from "https://deno.land/x/fsrouter/core/route.ts";

const rootDir = "./pages";

import $0 from "./pages/blog/index.ts";
import $1 from "./pages/index.ts";

const _routes = await Promise.all([
  Route.create(
    "./pages/blog/index.ts",
    rootDir,
    $0,
  ),
  Route.create(
    "./pages/index.ts",
    rootDir,
    $1,
  ),
]);

const devModeOptions = {
  "bootMessage": true,
  "debug": false,
  "convertToNumber": true,
  "generateManifest": true,
  "_routes": []
}

const options = {
  ...devModeOptions,
  generateManifest: false,
  _routes,
};

serve(await fsRouter(import.meta.resolve(rootDir), options));