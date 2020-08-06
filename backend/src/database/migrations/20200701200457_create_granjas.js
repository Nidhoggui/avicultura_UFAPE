exports.up = function(knex) {
  return knex.schema.createTable('granjas', function(table){
    table.string('id').primary();
    table.string('nomeFantasia').notNullable();
    table.string('razaoSocial').notNullable();
    table.bigInteger('cnpj').notNullable();
    table.string('proprietario').notNullable();
    table.boolean('gaiola');
    table.string('localizacao');
    table.boolean('termosDeUso');
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('granjas');
};
