
exports.up = function(knex) {
  return knex.schema.createTable('cascas', function(table){
    table.increments('id_casca');
    table.decimal('pesoCasca').notNullable();
    table.integer('corCasca').notNullable();
    table.integer('espessuraP1').notNullable();
    table.integer('espessuraP2').notNullable();
    table.integer('espessuraP3').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cascas');
};
