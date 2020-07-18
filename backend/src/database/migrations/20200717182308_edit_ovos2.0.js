
exports.up = function(knex) {
  return knex.schema.table('ovos', function(table){
    table.foreign('id_gema').references('id').inTable('gemas');
    table.foreign('id_albumen').references('id').inTable('albúmen');
    table.foreign('id_casca').references('id').inTable('cascas');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ovos');
};
