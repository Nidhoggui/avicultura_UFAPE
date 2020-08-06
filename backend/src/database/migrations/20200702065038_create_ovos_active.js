
exports.up = function(knex) {
  return knex.schema.createTable('ovos', function(table){
    table.increments('id');
    table.decimal('pesoOvo').notNullable();
    table.string('lote').notNullable();
    table.string('secaoOvo');

    table.string('id_gema').notNullable();
    table.foreign('id_gema').references('id').inTable('gemas');
    table.string('id_albumen').notNullable();
    table.foreign('id_albumen').references('id').inTable('albúmen');
    table.string('id_casca').notNullable();
    table.foreign('id_casca').references('id').inTable('cascas');

    table.string('granja_id').notNullable();
    table.foreign('granja_id').references('id').inTable('granjas');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ovos');
};
