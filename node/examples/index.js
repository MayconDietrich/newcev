// A URL disponibiliza recursos para o usuário
// CRUD Create Read Update Delete
// NPM gerenciador de pacotes, ex de método: install
// O Nodemon fica "ouvindo" o arquivo e assim que alterado reinicia o server
// FS = File System, 

const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');
let users = require('./users.json');

const getUsers = (request, response) => {
  const {name, surname, age, remove} = URL.parse(request.url, true).query;
  let message = '';
  response.writeHead(200, {'Access-Control-Allow-Origin': '*'});

  // if(!name) {
  //   response.writeHead(400, {'Access-Control-Allow-Origin': '*'});
  //   return response.end('informa o nome cringe')
  // }
  if(name) {
    const user = {
      name, surname, age
    }
    if(remove) {
      message = 'Registro removido com sucesso';
      console.log('Its for remove');
      const found = users.filter(user => String(user.name) === String(name));
      users = users.filter(user => String(user.name) !== String(name));


    if(!found.length) {
        response.end('usuário não encontrado');
      }
    }else {
      message = 'Registro salvo com sucesso';
      users.push(user);
    }
    fs.writeFile(
      path.join(__dirname, 'users.json'),
      JSON.stringify(users, null, 2),
      (error) => {
        if(error) return;
        console.log('Successfully saved register');
        response.end(JSON.stringify({
          status: message,
          data: user
        }));
      }
    );
  }else {
    response.end(JSON.stringify(users));
  }
}

const server = http.createServer(getUsers);

server.listen(6924, () => {
  console.log('listening API on http://localhost:6924')
})