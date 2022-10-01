/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { bundle } from "./builder.js";

export function render(ctx, render) {
  ctx.lang = 'es-AR';
  render();
};

// await bundle();

await start(manifest, { render });
