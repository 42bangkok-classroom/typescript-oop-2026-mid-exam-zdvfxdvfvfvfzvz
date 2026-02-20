function findData(fileName: string, key: string, value: string | number): void {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    const result = data.find((item: any) => item[key] === value);
    if (result) {
        console.log(result);
    } else {
        console.log(`No data found with ${key} = ${value}`);
    }
}
