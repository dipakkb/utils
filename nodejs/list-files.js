const fs = require('fs');
const path = require('path');

const isDir = (filePath) => fs.statSync(filePath).isDirectory()

const listFilesRecursively = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);
        isDir(filePath) 
        ? listFilesRecursively(filePath, filelist)
        : filelist.push(filePath);
    })
    return filelist;
}

console.log(listFilesRecursively(process.argv[2]));