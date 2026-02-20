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

const args: string[] = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Please provide exactly one argument for the grade.");
} else {
    const grade = parseFloat(args[0]);
    if (isNaN(grade)) {
        console.log("Invalid input");
    } else {
        console.log(grading(grade));
    }
}