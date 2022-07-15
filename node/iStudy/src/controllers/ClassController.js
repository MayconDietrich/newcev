const database = require('../databases/knex');

exports.getById = async (request, response) => {
  try {
    const params = request.params;
    const [classes] = await database.select('*').from('classes').where({id: params.id}).limit(1);;
    return response.status(200).send({
      course: classes
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

exports.getAllLessons = async (request, response) => {
  try {
    const sql = await database.select('*').from('classes');
    return response.status(200).send({
      classes: sql
    });
  } catch (error) {
    return response.status(500).send({ error: error?.message || e });
  }
};

// exports.create = async (request, response) => {
//   try {
//     await database('classes').insert(request.body);

//     return response.status(200).send({ 
//       status: 'success'
//     });
//   } catch (error) {
//     return response.status(500).send({ error: error?.message || e });
//   }
// }

// exports.delete = async (request, response) => {
//   try {
//     const params = request.params;
//     const [classes] = await database.select('*').from('classes').where({id: params.id}).limit(1); 

//     if(!classes) {
//       return response.status(404).send(`O curso com id: ${params.id} não existe`);
//     }
//     console.log('curso encontrado ===', course);
//     await database.delete({name: classes.name}).from('classes').where({id: classes.id});
//     return response.status(200).send({ status:'Curso deletado com sucesso', data: classes});
//   } catch (error) {
//     return response.status(500).send({ error: error?.message || e });
//   }
// }

// exports.put = async (request, response) => {
//   try {
//     const params = request.params;
//     const [outOfDateclasses] = await database.select('*').from('classes').where({id: params.id}).limit(1);

//     if(!outOfDateclasses) {
//       return response.status(404).send(`O curso com id: ${params.id} não existe`);
//     }
//     const upToDateclasses = request.body;
//     console.log('curso encontrado ===', outOfDateclasses);
//     console.log('curso atualizado ===', upToDateclasses);
//     // await database.update({name: upToDateclasses.name}).from('classes').where({id: outOfDateclasses.id});
//     return response.status(200).send({ status:'Aula atualizado com sucesso', data: upToDateclasses});
//   } catch (error) {
//     return response.status(500).send({ error: error?.message || e });
//   }
// }