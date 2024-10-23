const fs = require('fs');
// // 异步读取文件
// fs.readFile('data.txt', 'utf8', (err, data) => {
//     // 你好啊,世界
//     console.log(err, data)
// })
// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }
//
//
// // 异步写入文件
// fs.writeFile('data2.txt', '你好啊,世界', 'utf8', (err) => {
//     console.log(err)
// })


console.log(__dirname)  // 当前文件所在目录

fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
    console.log(data)
})
