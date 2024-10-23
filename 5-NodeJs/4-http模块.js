const http = require('http');

var server = http.createServer();


server.on('request', (req, res) => {
    console.log("调用了request事件")
    // 解决中文乱码问题
    var method = req.method;
    console.log(method, req.url);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('你好世界');
})


server.listen(3000, () => {
    console.log("服务器启动成功")
})
