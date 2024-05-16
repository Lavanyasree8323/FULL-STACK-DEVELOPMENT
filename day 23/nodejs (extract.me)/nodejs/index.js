// file-operations.js

const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Muthu');

// Read from a file
const content = fs.readFileSync('example.txt', 'utf-8');
console.log('File Content:', content);

// Append to a file
fs.appendFileSync('example.txt', '\nAppended Content');

// Read the updated content
const updatedContent = fs.readFileSync('example.txt', 'utf-8');
console.log('Updated File Content:', updatedContent);