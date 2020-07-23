
exports.up = function(knex) {
  return knex.schema.createTable('albumen', function(table){
    table.increments('id_albumen');
    table.decimal('pesoAlbumen').notNullable();
    table.integer('alturaAlbumen').notNullable();
    table.integer('diametroAlbumen').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('albumen');
};
