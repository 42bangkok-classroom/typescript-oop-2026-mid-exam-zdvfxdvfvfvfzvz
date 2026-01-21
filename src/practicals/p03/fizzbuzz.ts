// Write your code below
function fizzbuzz(num: number): string | number {
    if (num <= 0) {
        return "";
    }
    if (num % 15 === 0) {
        return "FizzBuzz";
    }
    if (num % 3 === 0) {
        return "Fizz";
    }
    if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

let strr: string = (process.argv.slice(2).toString());
let nume = +strr;
console.log(fizzbuzz(nume));