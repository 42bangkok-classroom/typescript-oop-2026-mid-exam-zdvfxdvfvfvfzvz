// Write your code below

function grading(grade: number) {
    if (grade > 100 || grade < 0) {
        return "Invalid input"
    }
    if (grade <= 49) {
        return "F";
    }
    if (grade <= 59) {
        return "D";
    }
    if (grade <= 69) {
        return "C";
    }
    if (grade <= 79) {
        return "B";
    }
    if (grade <= 100) {
        return "A";
    } else {
        return "Invalid input";
    }
}

let str: string = (process.argv.slice(2).toString());
let num = +str;
console.log(grading(num));