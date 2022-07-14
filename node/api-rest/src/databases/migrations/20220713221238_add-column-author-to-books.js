/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('books', function (table) {
    table.integer('authorId')// tipo do  (nome do campo)
    .unsigned() // precisa ser inteiro
    .notNullable() // não pode ser nulo
    .references('id') //referencia a tabela pai
    .inTable('authors') // nome da tabela pai
    .onDelete('CASCADE'); //executa o comando quando o registro pai for deletado

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('authors', (table) => {
    table.dropForeign('authorId');
    table.dropColumn('authorId');
  })
};
