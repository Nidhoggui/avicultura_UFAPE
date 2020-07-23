
exports.up = function(knex) {
  return knex.schema.createTable('gemas', function(table){
    table.increments('id_gema');
    table.decimal('pesoGema').notNullable();
    table.integer('alturaGema').notNullable();
    table.integer('diametroGema').notNullable();
    table.integer('corGema').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('gemas');
};
