function readJson(fileName: string): unknown[] {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    return data;
}