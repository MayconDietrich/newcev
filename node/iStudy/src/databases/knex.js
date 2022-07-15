const environment = process.env.ENVIRONMENT || 'development';

const config = require('../../knexfile')[environment]; //puxar atributos de forma dinâmica
const knex = require('knex')(config); // jeito + facil

module.exports = knex;