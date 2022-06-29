// A URL disponibiliza recursos para o usuário
// CRUD Create Read Update Delete
// NPM gerenciador de pacotes, ex de método: install
// O Nodemon fica "ouvino" o arquivo e assim que alterado reinicia o server

const http = require('http');
const URL = require('url');
const users = require('./read-file/users.json');

http.createServer((request, response) => {
  const {name, surname, age} = URL.parse(request.url, true).query;
  if(name || surname || age) {
    console.log('query: ', name, surname, age);
  }
  response.end(JSON.stringify(users));
}).listen(6924, () => {
  console.log('API is running on port 6924');
})