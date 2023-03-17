const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/storeData' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      fs.writeFile('storedData.json', JSON.stringify(data), err => {
        if (err) {
          console.error(err);
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Error storing data');
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Data stored successfully');
        }
      });
    });
  }
  else if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text.html'})
    res.write('<h1>Hello, World!</h1>')
    res.end()
  }
   else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
