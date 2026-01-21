const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  const words = comment.split(" ");
  const filtered = words.filter((word) => 4 < word.length);
  const filtered2 = words.filter((word) => 11 > word.length);
  const out = filtered2.join(" ");
  return out;
}

let str: string = (process.argv.slice(2).toString());
console.log(shortenComment(str));