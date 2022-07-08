exports.indexAuthor = (request, response) => {
  console.log('API is running');
  return response.status(200).send('API is available');
}

exports.indexBook = (request, response) => {
  console.log('API books is running');
  return response.status(200).send('API books is availabe');
}