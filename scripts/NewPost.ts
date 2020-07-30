// const contentBytes = new TextEncoder().encode("Enter Title: ");
// await Deno.writeAll(Deno.stdout, contentBytes);

const question: string = "Enter Title: ";
await Deno.stdout.write(new TextEncoder().encode(question));

const buf = new Uint8Array(1024);

// Read console's input into answer
const n = <number>await Deno.stdin.read(buf);
const answer = new TextDecoder().decode(buf.subarray(0, n));

console.log(answer.trim());
