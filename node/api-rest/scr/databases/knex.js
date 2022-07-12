const environment = process.env.ENVIRONMENT || 'development';

const config = require('../../knexfile')[environment]; //puxar atributos de forma dinâmica
const knex = require('knex')(config); // jeito + facil
// const knexInstance = knex(config); outro jeito de passar os parâmetros pro knex

module.exports = knex;