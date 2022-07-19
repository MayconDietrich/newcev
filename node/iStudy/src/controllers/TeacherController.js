const database = require('../databases/knex');

exports.getById = async (request, response) => {
  try {
    const params = request.params;
    const [teachers] = await database.select('*').from('teachers').where({id: params.id}).limit(1);;
    return response.status(200).send({
      lesson: teachers
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.getAllTeachers = async (request, response) => {
  try {
    const sql = await database.select('*').from('teachers');
    return response.status(200).send({
      teachers: sql
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.create = async (request, response) => {
  try {
    await database('teachers').insert(request.body);

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
    const [teachers] = await database.select('*').from('teachers').where({id: params.id}).limit(1); 

    if(!teachers) {
      return response.status(404).send(`O Professor com id: ${params.id} não existe`);
    }
    console.log('Professor encontrado ===', course);
    await database.delete({name: teachers.name}).from('teachers').where({id: teachers.id});
    return response.status(200).send({ status:'Professor deletado com sucesso', data: teachers});
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}

exports.put = async (request, response) => {
  try {
    const params = request.params;
    const [outOfDateTeachers] = await database.select('*').from('teachers').where({id: params.id}).limit(1);

    if(!outOfDateTeachers) {
      return response.status(404).send(`O professor com id: ${params.id} não existe`);
    }
    const upToDateTeachers = request.body;
    console.log('Professor encontrado ===', outOfDateTeachers);
    console.log('Professor atualizado ===', upToDateTeachers);
    await database.update({name: upToDateTeachers.name}).from('teachers').where({id: outOfDateTeachers.id});
    return response.status(200).send({ status:'professor atualizado com sucesso', data: upToDateTeachers});
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
}