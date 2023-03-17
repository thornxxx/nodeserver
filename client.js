const http = require('http');
const fs = require('fs');

const data = {
  name: "John",
  age: 30,
  city: "New York"
};

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/storeData',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
});

req.on('error', error => {
  console.error(error);
});

req.write(JSON.stringify(data));
req.end();
