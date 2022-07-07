const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = res.url;

  let file = 'index.html';
  const pagePath = path.join(__dirname, 'public', file);

  fs.readFile(pagePath,
    (error, content) => {
    if(error) {return error}
    
    return res.end(content);
  })
});

server.listen(6969, () => {
  console.log('listening on http://localhost:6969');
})