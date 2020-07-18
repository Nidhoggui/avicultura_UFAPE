
exports.up = function(knex) {
  return knex.schema.table('gemas', function(table){
    table.dropColumn('ovo_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('gemas');
};
