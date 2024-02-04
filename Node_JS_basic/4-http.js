const app = require('http');

app.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
