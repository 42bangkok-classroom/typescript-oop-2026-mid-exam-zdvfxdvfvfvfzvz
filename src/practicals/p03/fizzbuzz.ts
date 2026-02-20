// Write your code below

export function run(input: string | undefined): void {
    if (input === undefined) return;
    const n = Number(input);
    if (!Number.isInteger(n) || n <= 0) return;
    fizzBuzz(n);
}

export function fizzBuzz(n: number): void {
    if (n <= 0) {
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    };
};