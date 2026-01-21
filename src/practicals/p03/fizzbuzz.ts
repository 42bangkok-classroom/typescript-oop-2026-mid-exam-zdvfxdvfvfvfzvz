// Write your code below

function fizzBuzz(n: number): string[] {
    if (n <= 0) {
        return [];
    }
   let answer: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};

let strr: string = (process.argv.slice(2).toString());
let nume = +strr;
console.log(fizzBuzz(nume));