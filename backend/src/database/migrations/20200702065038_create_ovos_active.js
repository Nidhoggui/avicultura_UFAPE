
exports.up = function(knex) {
  return knex.schema.createTable('ovos', function(table){
    table.increments('id');
    table.decimal('peso').notNullable();
    table.string('lote').notNullable();
    table.string('id_gema').notNullable();
    table.string('id_albumen').notNullable();
    table.string('id_casca').notNullable();

    table.string('granja_id').notNullable();
    table.foreign('granja_id').references('id').inTable('granjas');

    table.string('lote_id').notNullable();
    table.foreign('lote_id').references('id').inTable('lotes');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ovos');
};
