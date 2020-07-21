
exports.up = function(knex) {
  return knex.schema.table('albúmen', function(table){
    table.dropColumn('haugh');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('albúmen');
};
