import { slugify } from "https://deno.land/x/slugify/mod.ts";
import init, { stringify } from "https://deno.land/x/yaml_wasm@0.1.9/index.js";
await init();

const title = await prompt("Post Title");
let slug = await prompt("Slug (Leave blank to generate)");
const excerpt = await prompt("Post Excerpt");
const tags = await prompt("Tags (comma separated)");

slug = slug === "" ? slugify(title).toLowerCase() : slug.toLowerCase();
const createdOn = new Date();
const year = createdOn.getFullYear();
const month = `${
  createdOn.getMonth() + 1 < 10 ? "0" : ""
}${createdOn.getMonth() + 1}`;
const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`;
const blogPostFolder = `./blog/${year}/${month}/${day}`;
const tagsList = tags.split(",").map((t) => t.trim());

await Deno.mkdir(blogPostFolder, { recursive: true });

const yaml = stringify({
  title,
  slug,
  date: createdOn.toISOString(),
  published: false,
  excerpt: excerpt,
  author: "Dan Vega",
  tags: tagsList,
  cover: "",
  video: "",
});

await Deno.writeFile(
  `${blogPostFolder}/${slug}.md`,
  new TextEncoder().encode(`${yaml}\n---\n`),
);

/*
 * Prompt for a response
 */
async function prompt(message: string = "") {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message + ": "));
  const n = <number> await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}
