
exports.up = function(knex) {
  return knex.schema.table('granjas', function(table){
    table.string('localizacao');
    table.boolean('termos_de_uso');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('granjas');
};
