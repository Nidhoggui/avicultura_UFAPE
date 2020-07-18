
exports.up = function(knex) {
  return knex.schema.table('albúmen', function(table){
    table.dropColumn('ovo_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('albúmen');
};
