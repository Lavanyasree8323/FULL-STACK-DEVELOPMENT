const fs = require('fs');

const filePath = 'example.txt';

if (fs.existsSync(filePath)) {
    console.log('File exist.');
  } else {
    console.log('File does not exist.');
  }