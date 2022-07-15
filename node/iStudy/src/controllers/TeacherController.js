exports.getAllTeachers = (request, response) => {
  console.log('API is running getAll teachers');
  return response.status(200).send('é o rodas, mas agr, of teachers');
}