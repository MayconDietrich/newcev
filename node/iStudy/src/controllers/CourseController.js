const database = require('../databases/knex');

exports.getById = async (request, response) => {
  try {
    const params = request.params;
    const [course] = await database.select('*').from('courses').where({id: params.id}).limit(1);;
    return response.status(200).send({
      course: course
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.getAllCourses = async (request, response) => {
  try {
    const sql = await database.select('*').from('courses');
    return response.status(200).send({
      courses: sql
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.create = async (request, response) => {
  try {
    if(!request.body.title || !request.body.description) {
      return response.status(500).send('Os campos devem ser preenchidos corretamente');
    }
    await database('courses').insert(request.body);

    return response.status(200).send({ 
      status: 'success'
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.delete = async (request, response) => {
  try {
    const params = request.params;
    const [course] = await database.select('*').from('courses').where({id: params.id}).limit(1); 

    if(!course) {
      return response.status(404).send(`O curso com id: ${params.id} não existe`);
    }
    console.log('curso encontrado ===', course);
    await database.delete({name: course.name}).from('courses').where({id: course.id});
    return response.status(200).send({ status:'Curso deletado com sucesso', data: course});
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.put = async (request, response) => {
  try {
    if(!request.body.title || !request.body.description) {
      return response.status(500).send('Os campos devem ser preenchidos corretamente');
    }
    const params = request.params;
    const [outOfDateCourse] = await database.select('*').from('courses').where({id: params.id}).limit(1);

    if(!outOfDateCourse) {
      return response.status(404).send(`O curso com id: ${params.id} não existe`);
    }
    const upToDateCourse = request.body;
    console.log('curso encontrado ===', outOfDateCourse);
    console.log('curso atualizado ===', upToDateCourse);
    await database.update({title: upToDateCourse.title, description: upToDateCourse.description}).from('courses').where({id: outOfDateCourse.id});
    return response.status(200).send({ status:'Curso atualizado com sucesso', data: upToDateCourse});
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}