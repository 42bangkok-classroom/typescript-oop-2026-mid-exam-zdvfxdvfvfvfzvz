const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  // Write your code below
  const words = comment.split(" ");
  words.filter((word) => 5 < word.length);
  const out = words.join(" ");
  return out;
}