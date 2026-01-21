// Write your code below

function grading(grade: number) {
    if (grade > 100 || grade < 0) {
        return "Invalid input"
    }
    if (grade <= 49) {
        return "Grade is F";
    }
    if (grade <= 59) {
        return "Grade is D";
    }
    if (grade <= 69) {
        return "Grade is C";
    }
    if (grade <= 79) {
        return "Grade is B";
    }
    if (grade <= 100) {
        return "Grade is A";
    } else {
        return "Invalid input";
    }
}

let str: string = (process.argv.slice(2).toString());
let num = +str;
console.log(grading(num));