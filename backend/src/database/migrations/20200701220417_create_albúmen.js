
exports.up = function(knex) {
  return knex.schema.createTable('albúmen', function(table){
    table.increments('id');
    table.decimal('peso').notNullable();
    table.integer('altura').notNullable();
    table.integer('diametro').notNullable();
    table.float('haugh').notNullable();

    table.string('ovo_id').notNullable();
    table.foreign('ovo_id').references('id').inTable('ovos');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('albúmen');
};
