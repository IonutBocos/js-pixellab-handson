const { readFileSync, read } = require('fs');

const data = readFileSync('.file.text', 'utf-8');

console.log(data);
