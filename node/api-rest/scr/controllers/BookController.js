const database = require('../databases/knex');
const logger = require('../utils/logger');
// Criar uma  migration:
// npx knex migrate:make nome-da-migration

// Rodar uma migration (executar - up):
// npx knex migrate:latest

// Voltar uma migration (voltar - down):
// npx knex migrate:down

exports.findAll = async (request, response) => {
  try {
    const sql = await database.select(
      ['books.id', 'books.name', 'authors.name as authorName']
      ).from('books').innerJoin('authors', 'authors.id', 'books.authorId');

      // sql.forEach(author => {
      //   console.log(author['author name'])
      // })
    return response.status(200).send({
      books: sql
    });
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.create = async (request, response) => {
  try {
    await database('books').insert(request.body);
    
    return response.status(200).send({
      status: 'success'
    });
  } catch (error) {
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.getById = async (request, response) => {
  try {
    const params = request.params;
    const [book] = await database.select('*').from('books').where({id: params.id}).limit(1); 
    
    if(!book) {
      return response.status(404).send(`O resgitro com id: ${params.id} não existe`);
    }
    console.log('livro encontrado ===', book);
    return response.status(200).send({ status:'registro de livro encontrado:', data: book});
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error : error?.message || e});
  }
}

exports.deleteById = async (request, response) => {
  try {
    const params = request.params;
    const [book] = await database.select('*').from('books').where({id: params.id}).limit(1);  
    
    if(!book) {
      return response.status(404).send(`O resgitro com id: ${params.id} não existe`);
    }
    console.log('autor encontrado ===', book);
    await database.delete({name: book.name}).from('books').where({id: book.id});
    return response.status(200).send({ status:'Registro deletado com sucesso', data: book});
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error : error?.message || e});
  }
}

exports.put = async (request, response) => {
  try {
    const params = request.params;
    const [previousBook] = await database.select('*').from('books').where({id: params.id}).limit(1);
    if(!previousBook) {
      return response.status(404).send(`O resgitro com id: ${params.id} não existe`);
    }
    const nextBook = request.body;
    console.log('livro encontrado ===', previousBook);
    console.log('book update ===', nextBook);

    await database.update({name: nextBook.name}).from('authors').where({id: previousBook.id});
    return response.status(200).send({ status:'registro atualizado com sucesso', data: nextBook});
  } catch (error) {
    logger(error.message)
      return response.status(500).send({error : error?.message || e});
  }
}