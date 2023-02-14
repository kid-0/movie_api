const http = require('http'),
url = require('url'),
fs = require('fs');

http.createServer((request, response) => {
    let addr = request.url,
    q = url.parse(addr, true),
    filePath = '';

    if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        filePath = 'index.html';
    }

    fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() +  '\n\n', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Added to log file!');
        }
    });

    response.writeHead(200, {'Content-Type': 'text/plain'}
    );
    response.end('Hello Node!\n');
}).listen(8080);

console.log('My first node test server is running on port 8080.');