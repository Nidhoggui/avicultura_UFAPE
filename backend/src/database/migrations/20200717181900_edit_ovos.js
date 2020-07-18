
exports.up = function(knex) {
  return knex.schema.table('ovos', function(table){
    table.dropColumn('lote');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ovos');
};
