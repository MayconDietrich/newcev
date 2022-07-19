exports.index = (request, response) => {
  console.log('API is running');
  return response.status(200).send('é o rodas');
}

// export = as indexcontroller from './indexcontroller' -> exportar td de uma vez(em um arquivo index separado)
// no aqruivo routes:
// const { indexcontroller, todas os controllers aqui } = require('./controllers)