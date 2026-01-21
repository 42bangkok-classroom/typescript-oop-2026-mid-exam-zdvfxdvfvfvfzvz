// Write your code below
export function star(num: number) {
    let pattern = "";
    for (let i = 1; i <= num; i++) {
        for (let j = num; j > 0; j--) {
            console.log(i);
            console.log(j);
        }
    }
}

console.log(star(5));