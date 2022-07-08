exports.findAll = (request, response) => {
  const query =  request.query;
  console.log('Query string books', query);
  return response.status(200).send('Acessando recurso /books method get');
}

exports.create = (request, response) => {
  console.log('Recebendo dados', request.body);
  return response.status(200).send('Acessando recurso /books method post');
}

exports.getById = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response.status(200).send(`Acessando recurso /books method get by ID ${params.id}`);
}

exports.deleteById =  (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response.status(200).send(`Acessando recurso /books method delete by ID ${params.id}`);
}

exports.put = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response.status(200).send(`Acessando recurso /books method put by ID ${params.id}`);
}

exports.patch = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response.status(200).send(`Acessando recurso /books method patch by ID ${params.id}`);
}