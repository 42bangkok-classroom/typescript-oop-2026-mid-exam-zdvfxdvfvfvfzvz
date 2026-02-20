// Write your code below

type Logger = (value: any) => void;

export function run(input: string | undefined, logger: Logger = console.log): Logger {
    if (input === undefined) return logger;
    const n = Number(input);
    if (!Number.isInteger(n) || n <= 0) return logger;
    fizzBuzz(n, logger);
    return logger;
}

export function fizzBuzz(n: number, logger: Logger = console.log): void {
    if (n <= 0) {
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            logger("FizzBuzz");
        } else if (i % 3 === 0) {
            logger("Fizz");
        } else if (i % 5 === 0) {
            logger("Buzz");
        } else {
            logger(i);
        }
    }
}