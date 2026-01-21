// Write your code below
export function star(num: number) {
    let pattern = "";
    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= num; j--) {
            console.log(j);
        }
    }
}

console.log(star(5));