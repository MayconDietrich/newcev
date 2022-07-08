exports.findAll = (request, response) => {
  const query = request.query;
  console.log('Query string authors', query);
  return response.status(200).send('Acessando recurso /authors method get');
}

exports.create = (request, response) => {
  console.log('Recebendo dados', request.body);
  return response.status(200).send('Acessando recurso /authors method post');
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