// Write your code below
export function star(num: number) {
    let pattern = "";
    for (let i = 1; i <= num; i++) {
        for (let s = 0; s < num - i; s++) {
            pattern += " ";
        }
        for (let j = i; j >= 1; j--) {
            pattern += j;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(star(5));

//     1
//    21
//   321
//  4321
// 54321