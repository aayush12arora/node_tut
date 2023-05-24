const  path = require('path');
console.log(path.sep)
// to join the file path 
const filePath  = path.join('/content','subfolder','test.txt')
console.log(filePath)
// to get the file name i.e or file name 
const base = path.basename(filePath)
console.log(base)

// to get some absolute path 

const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolutePath)