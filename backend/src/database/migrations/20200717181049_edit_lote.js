
exports.up = function(knex) {
  return knex.schema.table('lotes', function(table){
    table.string('galpao');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lotes');
};
