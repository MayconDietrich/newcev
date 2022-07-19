const database = require('../databases/knex');

exports.getById = async (request, response) => {
  try {
    const params = request.params;
    let [lesson] = await database.select('*').from('lessons').where({id: params.id}).limit(1); 
    let [sql] = await database.select(['lessons.id', 'lessons.title', 'lessons.description', 'lessons.linkVideo', 'courses.title as course', 'teachers.name as teacher']).from('lessons').innerJoin('courses', 'courses.id', 'lessons.idFromCourse').innerJoin('teachers', 'teachers.id', 'lessons.teacherId');
    lesson.teacherId = sql.teacher;
    lesson.idFromCourse = sql.course;
    return response.status(200).send({
      lesson: lesson
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.getAllLessons = async (request, response) => {
  try {
    let sql = await database.select(['lessons.id', 'lessons.title', 'lessons.description', 'lessons.linkVideo', 'courses.title as course', 'teachers.name as teacher']).from('lessons').innerJoin('courses', 'courses.id', 'lessons.idFromCourse').innerJoin('teachers', 'teachers.id', 'lessons.teacherId')
    return response.status(200).send({
      lessons: sql
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.create = async (request, response) => {
  try {
    await database('lessons').insert(request.body);

    return response.status(200).send({ 
      status: 'success'
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.delete = async (request, response) => {
  try {
    const params = request.params;
    const [lessons] = await database.select('*').from('lessons').where({id: params.id}).limit(1); 

    if(!lessons) {
      return response.status(404).send(`A aula com id: ${params.id} não existe`);
    }
    console.log('aula encontrada ===', lessons);
    await database.delete({name: lessons.name}).from('lessons').where({id: lessons.id});
    return response.status(200).send({ status:'Aula deletada com sucesso', data: lessons});
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.put = async (request, response) => {
  try {
    const params = request.params;
    const [outOfDateLessons] = await database.select('*').from('lessons').where({id: params.id}).limit(1);

    if(!outOfDateLessons) {
      return response.status(404).send(`A aula com id: ${params.id} não existe`);
    }
    const upToDateLessons = request.body;
    console.log('Aula encontrada ===', outOfDateLessons);
    console.log('Aula atualizada ===', upToDateLessons);
    await database.update({name: upToDateLessons.name}).from('lessons').where({id: outOfDateLessons.id});
    return response.status(200).send({ status:'Aula atualizado com sucesso', data: upToDateLessons});
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};