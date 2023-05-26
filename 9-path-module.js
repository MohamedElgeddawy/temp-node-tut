const path = require('path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

//basename
const basename = path.basename(filePath)
console.log(basename)

//absoulte
const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt' )
console.log(absolute)