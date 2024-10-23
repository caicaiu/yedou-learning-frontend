const path = require('path');

console.log(path.join(__dirname, 'test.txt')); // 输出：/Users/xxx/Documents/5-NodeJs/test.txt
console.log(path.join('/user', '/mydir', '/myfile.txt')) // 输出：/user/mydir/myfile.txt


// test.txt
console.log(path.basename('/Users/xxx/Documents/5-NodeJs/test.txt'))

// 移除扩展名
console.log(path.basename('/Users/xxx/Documents/5-NodeJs/test.txt', '.txt'))
