exports.index = (request, response) => {
  console.log('API is running');
  return response.status(200).send('é o rodas');
}