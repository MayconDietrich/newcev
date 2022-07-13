const database = require('../databases/knex');
const logger = require('../utils/logger');

exports.findAll = async (request, response) => {
  try {
    const sql = await database.select('*').from('authors');
    return response.status(200).send({
      authors: sql
    });
  } catch (error) { //tratamento de exceção, trata os erros que ocorrem
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.create = async (request, response) => {
  try {
    await database('authors').insert(request.body);
    
    return response.status(200).send({
      status: 'success'
    });
  } catch (error) { //tratamento de exceção, trata os erros que ocorrem
    logger(error.message)
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.getById = async (request, response) => {
  // const params = request.params;
  // console.log('Query params authors', params);
  // return response.status(200).send(`Acessando recurso /authors method get by ID ${params.id}`);
  try {
    const params = request.params;
    const [author] = await database.select('*').from('authors').where({id: params.id}).limit(1); 
    
    if(!author) {
      return response.status(404).send(`O resgitro com id: ${params.id} não existe`);
    }
    console.log('autor encontrado ===', author);
    // await database.delete({name: author.name}).from('authors').where({id: author.id});
    return response.status(200).send({ status:'registro encontrado:', data: author});
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error : error?.message || e});
  }
}

exports.deleteById =  async (request, response) => {
  // const params = request.params;
  // console.log('Query params authors', params);
  // return response.status(200).send(`Acessando recurso /authors method delete by ID ${params.id}`);
  try {
    const params = request.params;
    const [author] = await database.select('*').from('authors').where({id: params.id}).limit(1); 
    
    if(!author) {
      return response.status(404).send(`O resgitro com id: ${params.id} não existe`);
    }
    console.log('autor encontrado ===', author);
    await database.delete({name: author.name}).from('authors').where({id: author.id});
    return response.status(200).send({ status:'Registro deletado com sucesso', data: author});
  } catch (error) {
    logger(error.message)
    return response.status(500).send({error : error?.message || e});
  }
}

exports.put = async (request, response) => {
  try {
    const params = request.params;
    // precisamos buscar no banco de dados os possível registro
    const [previousAuthor] = await database.select('*').from('authors').where({id: params.id}).limit(1); // ou where('id', params.id) 
    // se não existir, informa o client que não existe(não encontrado)
    // capturar o valor do body o qual o cliente quer atualizar e atualizar os dados
    // avisar o cliente que atualizamos o registro, e retornart o registro atualizado
    if(!previousAuthor) {
      return response.status(404).send(`O resgitro com id: ${params.id} não existe`);
    }
    const nextAuthor = request.body;
    console.log('autor encontrado ===', previousAuthor);
    console.log('author update ===', nextAuthor);

    await database.update({name: nextAuthor.name}).from('authors').where({id: previousAuthor.id});
    return response.status(200).send({ status:'registro atualizado com sucesso', data: nextAuthor});
  } catch (error) { //tratamento de exceção, trata os erros que ocorrem
    logger(error.message)
      return response.status(500).send({error : error?.message || e});
  }
}

