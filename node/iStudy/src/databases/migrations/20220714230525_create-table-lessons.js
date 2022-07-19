/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('lessons', function (table) {
    table.increments();
    table.string('title');
    table.string('description')
    table.string('idFromCourse').unsigned().notNullable().references('id').inTable('courses').onDelete('CASCADE');
    table.string('linkVideo');
    table.string('teacherId').unsigned().notNullable().references('id').inTable('teachers').onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('lessons');
};
