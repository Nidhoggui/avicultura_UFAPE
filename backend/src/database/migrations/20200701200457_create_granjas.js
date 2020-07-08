
exports.up = function(knex) {
  return knex.schema.createTable('granjas', function(table){
    table.string('id').primary();
    table.string('nomefantasia').notNullable();
    table.string('razaosocial').notNullable();
    table.bigInteger('cnpj').notNullable();
    table.string('proprietario').notNullable();
    table.boolean('gaiola');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('granjas');
};
