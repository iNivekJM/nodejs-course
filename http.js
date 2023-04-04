const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);
    if(req.url === '/about'){

        res.write('Acerca de')
        return res.end()
    }
    res.write('hello world')
    res.end()
}).listen(3000)

console.log('Server listening on port 3000');