const database = require('../databases/knex');

exports.findAll = async (request, response) => {
  try {
    const sql = await database.select('*').from('authors');
    return response.status(200).send({
      authors: sql
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.create = async (request, response) => {
  try {
    await database('authors').insert(request.body);
    
    return response.status(200).send({
      status: 'success'
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.getById = (request, response) => {
  const params = request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors method get by ID ${params.id}`);
}

exports.deleteById =  (request, response) => {
  const params = request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors method delete by ID ${params.id}`);
}

exports.put = (request, response) => {
  const params = request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors method put by ID ${params.id}`);
}

exports.patch = (request, response) => {
  const params = request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors method patch by ID ${params.id}`);
}