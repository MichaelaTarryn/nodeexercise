const fs = require('fs');
const path = require('path');
// read from file
fs.readFile('./file.txt', 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    });
// Write to a file / overwriting existing content
fs.writeFile(path.join(__dirname, './file.txt'), 'content that is overwriting existing  content', err => {
    if (err) throw err;
    console.log('Writing to a file');
});
// adding new content to existing content
fs.appendFile(path.join(__dirname, './file.txt'), ' more content appended to existing file', err => {
    if (err) throw err;
    console.log('adding content to file');
});