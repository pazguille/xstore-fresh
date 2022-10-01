import { extname, toFileUrl, fromFileUrl, join, dirname } from "https://deno.land/std@0.150.0/path/mod.ts";
import * as esbuildWasm from "https://deno.land/x/esbuild@v0.15.10/wasm.js";
import * as esbuildNative from "https://deno.land/x/esbuild@v0.15.10/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.5.2/mod.ts";
import manifest from './fresh.gen.ts';

export const cache = new Map();

export async function bundle() {
  const esbuild = Deno.run === undefined ? esbuildWasm : esbuildNative;
  const opts = Deno.run === undefined ? {
    wasmURL: "https://deno.land/x/esbuild@v0.15.10/esbuild.wasm",
    worker: false,
  } : {};
  const absWorkingDir = Deno.cwd();
  const baseUrl = new URL("./", manifest.baseUrl).href;
  const importMapURL = new URL('./import_map.json', manifest.baseUrl);
  const islands = [];
  const entryPoints = {};

  const dir = dirname(fromFileUrl(import.meta.url));
  const islandsDir = join(dir, "./is-lands");
  const islandsUrl = toFileUrl(islandsDir);

  for await (const entry of Deno.readDir(islandsDir)) {
    if (entry.isFile) {
      const ext = extname(entry.name);
      if (![".tsx", ".jsx", ".ts", ".js"].includes(ext)) continue;
      const path = join(islandsDir, entry.name);
      const url = new URL(path, baseUrl).href;
      const id = toFileUrl(path).href.substring(islandsUrl.href.length).replace('/', '').replace(/.jsx|.js/, '').toLowerCase();
      islands.push({ url, id });
    }
  }

  for (const island of islands) {
    entryPoints[`island-${island.id}`] = island.url;
  }

  await esbuild.initialize(opts);

  const bundle = await esbuild.build({
    bundle: true,
    entryPoints,
    format: "esm",
    metafile: true,
    minify: true,
    outdir: "islands",
    absWorkingDir,
    outfile: "",
    platform: "neutral",
    plugins: [denoPlugin({ importMapURL })],
    sourcemap: false,
    splitting: true,
    target: ["chrome99", "firefox99", "safari15"],
    treeShaking: true,
    write: false,
    jsx: 'automatic',
    jsxImportSource: 'preact',
  });

  const absDirUrlLength = toFileUrl(absWorkingDir).href.length;
  for (const file of bundle.outputFiles) {
    cache.set(
      toFileUrl(file.path).href.substring(absDirUrlLength),
      file.contents,
    );
  }

  console.log(
    `%c 🏝  ${islands.length} is-lands generated.`,
    'color: blue; font-weight: bold',
  );

  return;
}
