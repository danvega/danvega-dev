//import { exists } from "https://deno.land/std/fs/mod.ts";
import { slugify } from "https://deno.land/x/slugify/mod.ts";
import {
  prettier,
  prettierPlugins,
} from "https://denolib.com/denolib/prettier/prettier.ts";
import init, {
  parse,
  stringify,
} from "https://deno.land/x/yaml_wasm@0.1.9/index.js";
await init();

const title = await prompt("Post Title");
const manualSlug = await prompt("Slug (Leave blank to generate)");
const excerpt = await prompt("Post Excerpt");
const tags = await prompt("Tags (comma separated)");

const slug = manualSlug === ""
  ? slugify(title).toLowerCase()
  : manualSlug.toLowerCase();
const createdOn = new Date();
const year = createdOn.getFullYear();
const month = `${
  createdOn.getMonth() + 1 < 10 ? "0" : ""
}${createdOn.getMonth() + 1}`;
const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`;
const blogPostFolder = `./blog/${year}/${month}/${day}`;
const tagsList = tags.split(",").map((t) => t.trim());

// if (!exists(blogPostFolder)) {
//   Deno.mkdirSync(blogPostFolder, {
//     recursive: true,
//   });
// }

const yaml = stringify({
  title,
  slug,
  date: createdOn.toISOString(),
  published: false,
  excerpt: excerpt,
  author: "Dan Vega",
  tags: tagsList,
  cover: "",
});

console.log(yaml);

const markdown = prettier.format(`---\n${yaml}\n---\n`, {
  parser: "markdown",
  singleQuote: true,
});

console.log(markdown);

// Deno.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown);

/*
 * Prompt for a response
 */
async function prompt(message: string = "") {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message + ": "));
  const n = <number> await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}
